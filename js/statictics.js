// считает количество строк в файле и выводит в консоль
const fs = require('fs');
const data = fs.readFileSync('../main.html').toString();
console.log(data.split('\n').length)

