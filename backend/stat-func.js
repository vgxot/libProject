const fs = require('fs');
const path = require('path');
const books = require('./libraryDB/books.json')
const pgp = require('pg-promise')()
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'libraryDB',
    user: 'postgres',
    password: '00000000'
};
function stringLength() {
    const filesHTMLfor = fs.readdirSync('../frontend/');
    const filesCSS = fs.readdirSync('../frontend/css/');
    const filesUNICSS = fs.readdirSync('../frontend/uni-css/');
    const filesFrontJS = fs.readdirSync('../frontend/js/');
    const fileBackendFor = fs.readdirSync('../backend');
    const fileBackendUsers = fs.readdirSync('users/');
    const fileBackendRoutes = fs.readdirSync('routes/');
    const fileBackendDB = fs.readdirSync('db/');
    const fileBackendBooksFor = fs.readdirSync('libraryDB/');

    const filesHTML = [];
    const filesBackend = [];
    const filesBackendBooks = [];

    for (let i in filesHTMLfor) {
        if (filesHTMLfor[i].indexOf('.') !== -1) {
            filesHTML.push(filesHTMLfor[i])
        }
    }
    for (let i in fileBackendFor) {
        if (fileBackendFor[i].indexOf('.') !== -1) {
            filesBackend.push(fileBackendFor[i])
        }
    }
    for (let i in fileBackendBooksFor) {
        if (fileBackendBooksFor[i].indexOf('.') !== -1) {
            filesBackendBooks.push(fileBackendBooksFor[i])
        }
    }
    let length = 0;
    let data = '';
    for (let i in filesHTML) {
        data = fs.readFileSync('../frontend/' + filesHTML[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in filesCSS) {
        data = fs.readFileSync('../frontend/css/' + filesCSS[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in filesUNICSS) {
        data = fs.readFileSync('../frontend/uni-css/' + filesUNICSS[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in filesFrontJS) {
        data = fs.readFileSync('../frontend/js/' + filesFrontJS[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in filesBackend) {
        data = fs.readFileSync('../backend/' + filesBackend[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in fileBackendUsers) {
        data = fs.readFileSync('users/' + fileBackendUsers[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in fileBackendRoutes) {
        data = fs.readFileSync('routes/' + fileBackendRoutes[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in fileBackendDB) {
        data = fs.readFileSync('db/' + fileBackendDB[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in filesBackendBooks) {
        data = fs.readFileSync('libraryDB/' + filesBackendBooks[i]).toString();
        length += data.split('\n').length;
    }
    console.log(length)
}
stringLength()

function imageCount() {
    let count = 0
    const images = fs.readdirSync('libraryDB/img');
    for (let image in images) {
        count += 1
    }
    console.log(count)
}
imageCount()

function booksCount() {
    let count = 0
    for (let i in books) {
        count += 1
    }
    console.log(count)
}
booksCount()

function pagesCount() {

}