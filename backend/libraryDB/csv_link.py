from bs4 import BeautifulSoup
import csv

with open(f"data/1.html", encoding="utf-8") as file:  # читаем файл и добавляем его в src
    src = file.read()

links = []

soup = BeautifulSoup(src, "lxml")
books = soup.find_all('a', class_='Art-module__imageWrapper_2Mm2c')
print('books:', books)
for book in books:
    links.append(
        book.get('href')
    )
    print('book:', book)
print(links)

a = -1

for i in links:             # если есть "разное" в ссылке то пропускаем, так как там нет всех атрибутов
    a =+ 1
    if 'raznoe' in i:
        del links[a]

for i in links:
    with open(f'links.csv', "a", newline='', encoding="utf-8") as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow([i])