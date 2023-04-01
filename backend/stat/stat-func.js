const fs = require('fs');
const path = require('path');
const db = require('../db/database');

async function pagesCount() {
    let page_count = 0;
    await db.query('SELECT pages FROM books')
        .then((value) => {
            for (let i in value) {
                page_count += parseInt(value[i].pages)
            }
            console.log(page_count)
            return page_count
        })
}
function stringLength() {
    const filesVuePages = fs.readdirSync('../../frontend_old/src/pages');
    const filesVueRouter = fs.readdirSync('../../frontend_old/src/router');
    const filesVueUI = fs.readdirSync('../../frontend_old/src/UI');
    const fileBackendFor = fs.readdirSync('../../backend');
    const fileBackendControls = fs.readdirSync('../controls/');
    const fileBackendRoutes = fs.readdirSync('../routes/');
    const fileBackendDB = fs.readdirSync('../db/');
    const fileBackendLibraryDB = fs.readdirSync('../libraryDB');
    const filesBackend = [];
    for (let i in fileBackendFor) {
        if (fileBackendFor[i].indexOf('.') !== -1) {
            filesBackend.push(fileBackendFor[i])
        }
    }
    let filesBackendLibraryDB = []
    for (let i in fileBackendLibraryDB) {
        if (fileBackendLibraryDB[i].indexOf('.js') !== -1 || fileBackendLibraryDB[i].indexOf('.sql') !== -1 ||
            fileBackendLibraryDB[i].indexOf('.py') !== -1 ) {
            filesBackendLibraryDB.push(fileBackendLibraryDB[i])
        }
    }
    let length = 0;
    let data = '';
    for (let i in filesVuePages) {
        data = fs.readFileSync('../../frontend_old/src/pages/' + filesVuePages[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in filesVueRouter) {
        data = fs.readFileSync('../../frontend_old/src/router/' + filesVueRouter[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in filesVueUI) {
        data = fs.readFileSync('../../frontend_old/src/UI/' + filesVueUI[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in filesBackend) {
        data = fs.readFileSync('../' + filesBackend[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in fileBackendControls) {
        data = fs.readFileSync('../controls/' + fileBackendControls[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in fileBackendRoutes) {
        data = fs.readFileSync('../routes/' + fileBackendRoutes[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in fileBackendDB) {
        data = fs.readFileSync('../db/' + fileBackendDB[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in filesBackendLibraryDB) {
        data = fs.readFileSync('../libraryDB/' + filesBackendLibraryDB[i]).toString();
        length += data.split('\n').length;
    }
    return length
}
function booksCount() {

    }

let stat = {
    name: "Страниц книг в базе данных",
    value: pagesCount(),
}

stat = JSON.stringify(stat)
fs.writeFile("./stats.json", stat, function (err, result) {
    if (err) console.log('Ошибка при записи stat.json', err)
})
