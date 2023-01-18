const fs = require('fs');
export function stringLength() {
    const filesHTML = fs.readdirSync('../html/');
    const filesCSS = fs.readdirSync('../css/');
    const filesUNICSS = fs.readdirSync('../uni-css/');
    const filesJS = fs.readdirSync('../js/');
    let length = 0;
    let data = '';
    for (let i in filesHTML) {
        data = fs.readFileSync('../html/' + filesHTML[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in filesCSS) {
        data = fs.readFileSync('../css/' + filesCSS[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in filesUNICSS) {
        data = fs.readFileSync('../uni-css/' + filesUNICSS[i]).toString();
        length += data.split('\n').length;
    }
    for (let i in filesJS) {
        data = fs.readFileSync('../js/' + filesJS[i]).toString();
        length += data.split('\n').length;
    }
    data = fs.readFileSync('../server.js').toString();
    length += data.split('\n').length;
    return length;
}
module.exports = length;