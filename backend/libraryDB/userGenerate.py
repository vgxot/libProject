import json
import random


def random_rating():    # распределение вероятности по оценке
    if float(books[book_id]['rating']) >= 4.9:
        rating = random.choices([five, four, three, two, one], weights=[900, 50, 30, 10, 5])
        return ''.join(str(rating[0]))
    elif float(books[book_id]['rating']) >= 4.7:
        rating = random.choices([five, four, three, two, one], weights=[820, 82, 40, 23, 35])
        return ''.join(str(rating[0]))
    elif float(books[book_id]['rating']) >= 4.5:
        rating = random.choices([five, four, three, two, one], weights=[790, 90, 35, 20, 65])
        return ''.join(str(rating[0]))
    elif float(books[book_id]['rating']) >= 4.3:
        rating = random.choices([five, four, three, two, one], weights=[620, 175, 100, 45, 60])
        return ''.join(str(rating[0]))
    elif float(books[book_id]['rating']) >= 4.1:
        rating = random.choices([five, four, three, two, one], weights=[565, 170, 100, 50, 115])
        return ''.join(str(rating[0]))
    elif float(books[book_id]['rating']) >= 3.7:
        rating = random.choices([five, four, three, two, one], weights=[690, 20, 10, 10, 270])
        return ''.join(str(rating[0]))
    elif float(books[book_id]['rating']) >= 3.3:
        rating = random.choices([five, four, three, two, one], weights=[370, 140, 150, 140, 200])
        return ''.join(str(rating[0]))
    elif float(books[book_id]['rating']) >= 3.0:
        rating = random.choices([five, four, three, two, one], weights=[420, 70, 45, 45, 420])
        return ''.join(str(rating[0]))
    elif float(books[book_id]['rating']) >= 2.5:
        rating = random.choices([five, four, three, two, one], weights=[360, 50, 25, 40, 525])
        return ''.join(str(rating[0]))
    elif float(books[book_id]['rating']) >= 2.0:
        rating = random.choices([five, four, three, two, one], weights=[200, 5, 5, 15, 775])
        return ''.join(str(rating[0]))
    elif float(books[book_id]['rating']) >= 0.9:
        rating = random.choices([five, four, three, two, one], weights=[0, 1, 2, 3, 95])
        return ''.join(str(rating[0]))


names = []
common = []
with open(f"names.txt", encoding="utf-8") as file:
    names_raw = file.read()
names_raw = names_raw.split()
with open(f"common.txt", encoding="utf-8") as file:
    common_raw = file.read()
common_raw = common_raw.split()
with open(f"places.txt", encoding="utf-8") as file:
    places = file.read()
places = places.split()
with open(f"books_add.json", encoding="utf-8") as file:
    books = json.load(file)

for i in names_raw:
    if len(i) > 3:
        names.append(i)

for i in common_raw:
    if len(i) >= 3:
        if i.isalpha():
            common.append(i)

chars = '+-/*!&$#?=@<>abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
end = ']'
start = '['
mid = ', '
count = 0
repeat = 0
name_repeat = 0
users_count = 0
user_count = 10005
multiplier = 10
multiplier_count = 0
usernames = []

for i in range(multiplier):
    multiplier_count += 1
    with open(f"users{multiplier_count}.json", "a", encoding="utf-8") as json_file:
        json_file.write(start)
    for i in range(user_count):  # генерирует n аккаунтов
        username = (common[random.randrange(len(common))] + places[random.randrange(len(places))])  # создает username
        if username in usernames:
            name_repeat += 1
            continue
        usernames.append(username)
        name = names[random.randrange(len(names))]  # создает имя
        password = ''
        avatar_link = random.randrange(16)
        background_link = avatar_link
        for _ in range(33):  # генерирует пароль
            password += random.choice(chars)
        count_books_rating = random.choices([250, 150, 100, 50, 25, 3],
                                            weights=[1, 50, 150, 750, 100, 10])  # сколько оценивать книг
        choice = ''.join(str(count_books_rating[0]))
        if choice == '50':
            count_books = random.randint(50, 100)  # рандомизация
        elif choice == '150':
            count_books = random.randint(150, 250)
        elif choice == '100':
            count_books = random.randint(100, 150)
        elif choice == '250':
            count_books = random.randint(250, 500)
        elif choice == '25':
            count_books = random.randint(25, 50)
        elif choice == '3':
            count_books = random.randint(3, 25)
        book_ratings = []
        five = 5
        four = 4
        three = 3
        two = 2
        one = 1
        count += count_books
        books_id = []
        for _ in range(count_books):  # цикл, в котором перебираем книги столько раз, сколько выпало
            # выбор самых популярных книг
            popular_choice = random.choices([2000, 500, 100, 10, 0], weights=[50, 30, 12, 7, 1])
            # print(popular_choice)
            for z in range(len(books)):  # цикл из длины книг
                random_id = random.randrange(len(books) - 1)  # выбираем рандомный id
                book_id = random_id + 1
                if book_id in books_id:  # если он есть в массиве, то начинаем цикл заново
                    repeat += 1
                    continue
                # если его нет в массиве, то добавляем в массив
                books_id.append(book_id)
                # смотрим, больше ли популярность книги популярности, которую нам надо
                if int(books[book_id]['popularity']) > popular_choice[0]:
                    rating = random_rating()  # присваиваем рейтингу значение, полученное из функции random_rating()
                    # print('подошло', book_id, popular_choice)
                    break
                else:
                    # print('меньше', book_id, popular_choice)
                    continue
            book_rating = (
                {
                    "book_id": book_id,
                    "rating": rating
                }
            )
            book_ratings.append(book_rating)
        user = (
            {
                "username": username,
                "name": name,
                "avatar_link": avatar_link,
                "background_link": background_link,
                "password": password,
                "book_ratings": book_ratings
            }
        )
        with open(f'users{multiplier_count}.json', "a", encoding="utf-8") as json_file:
            json.dump(user, json_file, ensure_ascii=False)
        if i + 1 != user_count:
            with open(f"users{multiplier_count}.json", "a", encoding="utf-8") as json_file:
                json_file.write(mid)
        print(f'Создал аккаунт {users_count}')
        users_count += 1
    with open(f"users{multiplier_count}.json", "a", encoding="utf-8") as json_file:
        json_file.write(end)

print(f'повторов username: {name_repeat}\n'
      f'оценок: {count}\n'
      f'повторов: {repeat}\n'
      f'юзеров: {users_count}')
