"use strict";

const h1 = document.querySelector(".container h1");
const data = new Date();
const options = {
  dateStyle: "full",
  timeStyle: "short",
};

h1.innerHTML = data.toLocaleDateString("pt-br", options);

/* function getWeekDay(day) {
  let weekday;

  switch (day) {
    case 0:
      weekday = "Sunday";
      return weekday;
    case 1:
      weekday = "Monday";
      return weekday;
    case 2:
      weekday = "Thuesday";
      return weekday;
    case 3:
      weekday = "Wednesday";
      return weekday;
    case 4:
      weekday = "Thursday";
      return weekday;
    case 5:
      weekday = "Friday";
      return weekday;
    case 6:
      weekday = "Saturday";
      return weekday;
    default:
      weekday = "";
      return weekday;
  }
}

function getMonth(month) {
  switch (month) {
    case 0:
      currMonth = "January";
      return currMonth;
    case 1:
      currMonth = "Feburary";
      return currMonth;
    case 2:
      currMonth = "March";
      return currMonth;
    case 3:
      currMonth = "April";
      return currMonth;
    case 4:
      currMonth = "May";
      return currMonth;
    case 5:
      currMonth = "June";
      return currMonth;
    case 6:
      currMonth = "July";
      return currMonth;
    case 7:
      currMonth = "August";
      return currMonth;
    case 8:
      currMonth = "September";
      return currMonth;
    case 9:
      currMonth = "October";
      return currMonth;
    case 10:
      currMonth = "November";
      return currMonth;
    case 11:
      currMonth = "December";
      return currMonth;
    default:
      currMonth = "";
      return currMonth;
  }
}
function leftZero(num) {
  return num >= 10 ? num : `0${num}`;
}

function createDate(date) {
  const weekDay = date.getDay();
  const currMonth = date.getMonth();

  const nameDay = getWeekDay(weekDay);
  const nameMonth = getMonth(currMonth);

  return `${nameDay}, ${data.getDate()} de ${nameMonth} de ${data.getFullYear()}, ${data.getHours()}:${data.getMinutes()}`;
}

h1.innerHTML = createDate(data);
 */
