import time
import requests
from bs4 import BeautifulSoup
import json
import csv

url = "https://www.litres.ru/popular/"  # ссылка
headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 YaBrowser/23.1.1.1135 Yowser/2.5 Safari/537.36'
}


def get_links():
    with open(f"html/litresPopular250pages.html", encoding="utf-8") as file:  # читаем файл и добавляем его в src
        src = file.read()

    links = []  # список со ссылками

    soup = BeautifulSoup(src, "lxml")
    books = soup.find_all('a', class_='Art-module__imageWrapper_2Mm2c')
    print('books:', books)
    for book in books:  # ищем все ссылки и записываем их в массив
        links.append(
            book.get('href')
        )
        print('book:', book)
    print(links)

    for i in links:
        with open(f'links.csv', "a", newline='', encoding="utf-8") as csv_file:
            writer = csv.writer(csv_file)
            writer.writerow([i])


def attempts(url, retry=3):    # количество попыток
    headers = {
        "Accept": "*/*",
        "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 YaBrowser/23.1.1.1135 Yowser/2.5 Safari/537.36'
    }

    try:
        response = requests.get(url=url, headers=headers)   # если что-то не так, то
    except Exception as ex:
        time.sleep(10)                                      # через рандомное время пытается снова
        if retry:
            print(f'что-то пошло не так, попыток подключения осталось: {retry}, проблемная ссылка: {url}')
            return attempts(url, retry=(retry - 1))         # выводит счетчик ошибок
        else:
            raise
    else:
        return response


def write_books():
    links = []

    with open('links.csv', 'r') as file:
        reader = csv.reader(file, delimiter=',')
        for row in reader:
            links.append(row)  # создает цикл, в котором добавляем в массив все данные из csv файла

    a = -1

    for i in links:
        a += 1
        links[a] = ''.join(i)  # переводим элементы в строки
    books_count = 0
    count = 7001
    errors = 0
    for link in links:
        try:
            count += 1
            if count % 50 == 0:
                print('засыпаю, чтобы замести следы')
                time.sleep(25)                                     # засыпает на n секунд каждые 50 книг

            print(f'начинаю писать книгу номер', count)
            src = attempts(url=links[count])
            print('тело получено')

            soup = BeautifulSoup(src.text, "lxml")
            print('суп создан')

            bookName = soup.find("h1", itemprop="name").text
            if 'сборник' in bookName:
                print('пропускаем сборник')
                continue
            check = soup.find("div", class_="biblio_book_name").find("span").text
            if 'Черновик' in check:
                print('пропускаем черновик')
                continue
            PDF_count = 0
            if 'PDF' in check:
                PDF_count = 1
            author = soup.find("a", itemprop="author").find("span").text
            rating = soup.find("div", class_="rating-number bottomline-rating").text
            popularity = soup.find("div", class_="votes-count bottomline-rating-count").text
            resource_link = soup.find("img", itemprop="image").get("src")
            info = soup.find("div", class_="biblio_book_info_detailed_left").find_all("dd")
            info_age = info[0].text

            if PDF_count == 0:
                info_year = info[2].text
            else:
                info_year = info[3].text

            volume = soup.find("li", class_="volume").text
            s = volume.split(' ')   # объем книги делит по пробелам и берет 2 элемент, это всегда количество страниц
            volume = s[1]
            description_form = soup.find("div", class_="biblio_book_descr_publishers").find_all("p")
            description = ''

            for i in description_form:
                description += (' ' + i.text)  # ставит пробелы между описанием, так как они обычно разделены

            try:
                isbn = soup.find("dd", itemprop="isbn").text
            except Exception as ex:
                isbn = '-'
            print('все элементы найдены')

            resource_link = resource_link[:-4]
            download_IMG = requests.get(resource_link).content
            img_link = f'imageBook{count - 1}.jpg'
            with open(f'img/imageBook{count - 1}.jpg', 'wb') as img:
                img.write(download_IMG)
            books = (
                {
                    "bookName": bookName,
                    "author": author,
                    "description": description,
                    "rating": rating,
                    "popularity": popularity,
                    "info_age": info_age,
                    "info_year": info_year,
                    "volume": volume,
                    "isbn": isbn,
                    "resourceLink": img_link
                }
            )
            print('элементы обработаны: ')
            print(bookName, author, rating, popularity, resource_link, info_age, volume, info_year, isbn, "\n", description)

            print(f'записали книгу номер', count)
            if count % 1000 == 0:   # каждую 1000 книг записывает в json, на всякий случай, потом просто убрать квадратные скобки и норм
                books_count += 1
                print(f'{count} книга! записываем в json, чтобы не потерять')
                with open(f'books{books_count}.json', "a", encoding="utf-8") as json_file:
                    json.dump(books, json_file, ensure_ascii=False)

            with open(f'books.json', "a", encoding="utf-8") as json_file:
                json.dump(books, json_file, ensure_ascii=False)

        except Exception as ex:
            print(f'какая-то ошибка в коде страницы, ссылка: {links[count]}')
            errors += 1
            time.sleep(3)   # спит если вдруг ошибка, при ошибке 429(503) не поможет
            continue
    with open(f'booksCOMPLETE.json', "a", encoding="utf-8") as json_file:
        json.dump(books, json_file, ensure_ascii=False)
    print(f'Поздравляем, запись книг в json файл завершена, по нашим подсчетам в вашей библиотеке будет {count} книг. Ошибок во время записи: {errors}')


do = int(input('какую функцию вы хотите выполнить?\n1 - найти все ссылки\n2 - парсить данные о книгах\n3 - выполнить обе функции\n'))
if do == 1:
    get_links()
elif do == 2:
    write_books()
elif do == 3:
    get_links()
    write_books()
else:
    print('неправильное значение, введите цифры от 1 до 3')