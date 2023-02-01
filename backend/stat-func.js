const fs = require('fs');
const path = require('path');
function stringLength() {
    const filesHTMLfor = fs.readdirSync('../frontend/');
    const filesCSS = fs.readdirSync('../frontend/css/');
    const filesUNICSS = fs.readdirSync('../frontend/uni-css/');
    const filesFrontJS = fs.readdirSync('../frontend/js/');
    const fileBackendFor = fs.readdirSync('../backend');
    const fileBackendUsers = fs.readdirSync('users/');
    const fileBackendRoutes = fs.readdirSync('routes/');
    const fileBackendDB = fs.readdirSync('db/');
    const fileBackendBooks = fs.readdirSync('libraryDB/');
    const filesHTML = [];
    for (let i in filesHTMLfor) {
        if (filesHTMLfor[i].indexOf('.') !== -1) {
            filesHTML.push(filesHTMLfor[i])
        }
    }
    const filesBackend = [];
    for (let i in fileBackendFor) {
        if (fileBackendFor[i].indexOf('.') !== -1) {
            filesBackend.push(fileBackendFor[i])
        }
    }
    let length = 0;
    let data = '';
    for (let i in filesHTML) {
        data = fs.readFileSync('../frontend/' + filesHTML[i]).toString();
        length += data.split('\n').length;
    }
    console.log('1', length)
    for (let i in filesCSS) {
        data = fs.readFileSync('../frontend/css/' + filesCSS[i]).toString();
        length += data.split('\n').length;
    }
    console.log('2', length)
    for (let i in filesUNICSS) {
        data = fs.readFileSync('../frontend/uni-css/' + filesUNICSS[i]).toString();
        length += data.split('\n').length;
    }
    console.log('3', length)
    for (let i in filesFrontJS) {
        data = fs.readFileSync('../frontend/js/' + filesFrontJS[i]).toString();
        length += data.split('\n').length;
    }
    console.log('4', length)
    for (let i in filesBackend) {
        data = fs.readFileSync('../backend/' + filesBackend[i]).toString();
        length += data.split('\n').length;
    }
    console.log('5', length)
    for (let i in fileBackendUsers) {
        data = fs.readFileSync('users/' + fileBackendUsers[i]).toString();
        length += data.split('\n').length;
    }
    console.log('6', length)
    for (let i in fileBackendRoutes) {
        data = fs.readFileSync('routes/' + fileBackendRoutes[i]).toString();
        length += data.split('\n').length;
    }
    console.log('7', length)
    for (let i in fileBackendDB) {
        data = fs.readFileSync('db/' + fileBackendDB[i]).toString();
        length += data.split('\n').length;
    }
    console.log('8', length)
    for (let i in fileBackendBooks) {
        data = fs.readFileSync('libraryDB/' + fileBackendBooks[i]).toString();
        length += data.split('\n').length;
    }
    console.log('9', length)
    console.log(length)
}
stringLength()