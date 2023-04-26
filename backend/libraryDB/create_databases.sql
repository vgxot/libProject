create table books
(
    book_id     serial,
    book_name   varchar not null,
    author      varchar not null,
    isbn        varchar not null,
    pages       varchar not null,
    year        varchar not null,
    age         varchar not null,
    description varchar not null,
    photo_link  varchar not null,
    popularity  integer not null,
    rating      varchar not null,
    constraint books_pk
        primary key (book_id)
);
create table books_genre
(
    book_id integer not null,
    genre   varchar not null,
    constraint book_id___fk
        foreign key (book_id) references books (book_id)
);
create table books_tags
(
    book_id integer not null,
    tags    varchar not null,
    constraint book_id___fk
        foreign key (book_id) references books (book_id)
);
create table users
(
    username        varchar not null,
    name            varchar not null,
    password        varchar not null,
    role            varchar not null,
    reg_date        varchar not null,
    reg_time        varchar not null,
    avatar_link     varchar not null,
    background_link varchar not null,
    constraint users_pk
        primary key (username)
);
create table users_rating
(
    username varchar not null,
    book_id  integer not null,
    rating   integer not null,
    constraint book_id___fk
        foreign key (book_id) references books (book_id),
    constraint username___fk
        foreign key (username) references users (username)
);

comment on column users_rating.rating is 'пользовательская оценка книги от 1 до 5';

create table author_books
(
    username varchar not null,
    book_id  integer not null,
    constraint book___fk
        foreign key (book_id) references books (book_id),
    constraint username___fk
        foreign key (username) references users (username)
);
create table author
(
    username varchar not null,
    pseudonym  varchar not null,
    constraint username___fk
        foreign key (username) references users (username)
);
create table book_ratings
(
    book_id integer not null,
    five    integer not null,
    four    integer not null,
    three   integer not null,
    two     integer not null,
    one     integer not null,
    constraint book_ratings_books__fk
        foreign key (book_id) references books (book_id)
);
create table tokens
(
    username varchar not null,
    token    varchar,
    constraint tokens___fk
        foreign key (username) references users (username)
);
