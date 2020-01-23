const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

function formatHour(h) {
    return [h % 12, (h >= 12) ? "PM" : "AM"];
}

function main() {
    let date = new Date();

    let hourData = formatHour(date.getHours())

    console.log("Today is : " + daylist[date.getDay()]);
    console.log(`Current time is : ${hourData[0]} ${hourData[1]} : ${date.getMinutes()} : ${date.getSeconds()}`);
}

main();