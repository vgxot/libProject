function date() {
    let currentDate = new Date();               // проблемы с записью месяца и числа, начинающихся с нуля
    return currentDate.getFullYear() + "-"
        + (currentDate.getMonth()+1 < 10 ? "" : "")
        + currentDate.getMonth()+1 + "-" +
        + currentDate.getDate();
}
function time() {
    let currentTime = new Date();
    return currentTime.getHours() + "-"
        + currentTime.getMinutes() + "-"
        + currentTime.getSeconds();
}

module.exports = date();
module.exports = time();