const fs = require('fs');
const path = require('path');
/*const books = require('./libraryDB/books.json')*/
const db = require('./db/database')

    function stringLength() {
    const filesHTMLfor = fs.readdirSync('../frontend/');
    const filesCSS = fs.readdirSync('../frontend/css/');
    const filesUNICSS = fs.readdirSync('../frontend/uni-css/');
    const filesFrontJS = fs.readdirSync('../frontend/js/');
    const fileBackendFor = fs.readdirSync('../backend');
    const fileBackendUsers = fs.readdirSync('controls/');
    const fileBackendRoutes = fs.readdirSync('routes/');
    const fileBackendDB = fs.readdirSync('db/');
    const filesHTML = [];
    const filesBackend = [];
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
    let length = 0;
    let data = '';
    for (let i in filesHTML) {
        data = fs.readFileSync('../frontend/' + filesHTML[i]).toString();
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
        data = fs.readFileSync('controls/' + fileBackendUsers[i]).toString();
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
    return length
}
function booksCount() {
    let count = 0
    const images = fs.readdirSync('libraryDB/img');
    for (let image in images) {
        count += 1
    }
    return count
}
async function pagesCount() {
    let page_count = 0;
    let pages = await db.query('SELECT pages FROM books')
    for (let page in pages) {
        page_count += (pages[page].pages)
    }
    console.log(page_count)
    return page_count
}
const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}
delay(5000)


let stat = {
    page_books: pagesCount(), lenght: stringLength(), books_count: booksCount()
}


stat = JSON.stringify(stat)
fs.writeFile("./stat/stat.json", stat, function (err, result) {
    if (err) console.log('Ошибка при записи stat.json', err)
})
console.log(stat)