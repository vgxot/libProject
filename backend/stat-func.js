const fs = require('fs');
function stringLength() {
    const filesHTML = fs.readdirSync('../frontend/');
    const filesCSS = fs.readdirSync('../frontend/css/');
    const filesUNICSS = fs.readdirSync('../frontend/uni-css/');
    const filesBackend = fs.readdirSync('/');
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
    for (let i in filesBackend) {
        data = fs.readFileSync('/' + filesBackend[i]).toString();
        length += data.split('\n').length;
    }
    data = fs.readFileSync('../server.js').toString();
    length += data.split('\n').length;
    console.log(length)
}
stringLength()