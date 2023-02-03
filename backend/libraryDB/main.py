import requests
from bs4 import BeautifulSoup
import json
import csv

url = "https://www.litres.ru/popular/"  # ссылка
headers = {
    "Accept": "*/*",
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 YaBrowser/23.1.1.1135 Yowser/2.5 Safari/537.36'
}

links = []
books = []

with open('links.csv', 'r') as file:
    reader = csv.reader(file, delimiter=',')
    for row in reader:
        links.append(row)  # создает цикл, в котором добавляем в массив все данные из csv файла

a = -1

for i in links:
    a += 1
    links[a] = ''.join(i)

count = 1
books_info = []

if count < 10:
    for link in links:
        req = requests.get(url=link, headers=headers)
        src = req.text

        # with open(f"data/book{count}.html", "w", encoding="utf-8") as file:           # записываем файл
        #     file.write(src)

        with open(f"data/book{count}.html", encoding="utf-8") as file:  # читаем файл и добавляем его в src
            src = file.read()

        soup = BeautifulSoup(src, "lxml")

        bookName = soup.find("h1", itemprop="name").text
        author = soup.find("a", itemprop="author").find("span").text
        rating = soup.find("div", class_="rating-number bottomline-rating").text
        popularity = soup.find("div", class_="votes-count bottomline-rating-count").text
        resourceLink = soup.find("img", itemprop="image").get("src")
        info = soup.find("div", class_="biblio_book_info_detailed_left").find_all("dd")
        info_age = info[0].text
        info_year = info[2].text
        info_volume = info[3].text
        isbn = soup.find("div", class_="biblio_book_info_detailed_right").find("dd").text

        resourceLink = resourceLink[:-4]

        downloadIMG = requests.get(resourceLink).content
        img_link = f'imageBook{count}.jpg'
        with open(f'img/imageBook{count}.jpg', 'wb') as img:
            img.write(downloadIMG)

        books_info.append(
            {
                "bookName": bookName,
                "author": author,
                "rating": rating,
                "popularity": popularity,
                "resourceLink": resourceLink,
                "info_age": info_age,
                "info_year": info_year,
                "info_volume": info_volume,
                "isbn": isbn
            }
        )
        print(bookName)
        count += 1

with open(f'book.json', "a", encoding="utf-8") as json_file:
    json.dump(books_info, json_file, ensure_ascii=False)