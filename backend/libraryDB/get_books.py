import time
import requests
from bs4 import BeautifulSoup
import json
import csv

url = "https://www.litres.ru/popular/"  # ссылка
headers = {
    "Accept": "*/*",
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

    a = -1

    for i in links:  # если есть "разное" в ссылке, то пропускаем так как там иногда нет всех атрибутов
        a += 1
        if 'raznoe' in i:
            print(f'нашли разное', {links[a]})
            del links[a]

    for i in links:
        with open(f'links.csv', "a", newline='', encoding="utf-8") as csv_file:
            writer = csv.writer(csv_file)
            writer.writerow([i])


def attempts(url, retry=10):    # количество попыток
    headers = {
        "Accept": "*/*",
        "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 YaBrowser/23.1.1.1135 Yowser/2.5 Safari/537.36'
    }

    try:
        response = requests.get(url=url, headers=headers)   # если что-то не так, то
    except Exception as ex:
        time.sleep(3)                                       # через рандомное время пытается снова
        if retry:
            print(f'что-то пошло не так, попыток подключения осталось: {retry}, проблемная ссылка: {url}')
            return attempts(url, retry=(retry - 1))         # выводит счетчик ошибок
        else:
            raise
    else:
        return response


def write_books():
    links = []
    books = []

    with open('links.csv', 'r') as file:
        reader = csv.reader(file, delimiter=',')
        for row in reader:
            links.append(row)  # создает цикл, в котором добавляем в массив все данные из csv файла

    a = -1

    for i in links:
        a += 1
        links[a] = ''.join(i)  # переводим элементы в строки

    count = 1

    for link in links:
        try:
            print(f'начинаю писать книгу номер', count)
            src = attempts(url=link)
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
            description_form = soup.find("div", class_="biblio_book_descr_publishers").find_all("p")
            description = ''
            for i in description_form:
                description += (' ' + i.text)
            isbn = soup.find("div", class_="biblio_book_info_detailed_right").find("dd").text
            print('все элементы найдены')

            resource_link = resource_link[:-4]
            download_IMG = requests.get(resource_link).content
            img_link = f'imageBook{count}.jpg'
            with open(f'img/imageBook{count}.jpg', 'wb') as img:
                img.write(download_IMG)
            books.append(
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
            count += 1
        except Exception as ex:
            print(f'какая-то ошибка в коде страницы, ссылка: {link}')
            continue

    with open(f'book.json', "a", encoding="utf-8") as json_file:
        json.dump(books, json_file, ensure_ascii=False)


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
