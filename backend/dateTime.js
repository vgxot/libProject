function dateTime() {
    let currentDate = new Date();               // проблемы с записью месяца и числа, начинающихся с нуля
    let date = currentDate.getFullYear() + "-"
        + (currentDate.getMonth()+1 < 10 ? "" : "")
        + currentDate.getMonth()+1 + "-" +
        + currentDate.getDate();
    console.log(date);
    let currentTime = new Date();
    let time = currentTime.getHours() + "-"
            + currentTime.getMinutes() + "-"
            + currentTime.getSeconds();
    console.log(time);
}
module.exports = new dateTime()
