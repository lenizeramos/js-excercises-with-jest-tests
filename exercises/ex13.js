/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  let arrayDate = date.split("/");

  let month;
  let day;

  switch (arrayDate[1]) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
    default:
      break;
  }

  switch (arrayDate[2]) {
    case "01":
      day = "1st";
      break;
    case "02":
      day = "2nd";
      break;
    case "03":
      day = "3rd";
      break;
    case "21":
      day = "21st";
      break;
    case "22":
      day = "22nd";
      break;
    case "23":
      day = "23rd";
      break;
    case "31":
      day = "31st";
      break;
    default:
      if (arrayDate[2].startsWith("0")) {
        day = arrayDate[2].replace("0", "");
      }
      day = arrayDate[2] + "th";
      break;
  }

  return `${month} ${day}, ${arrayDate[0]}`;

  // if (arrayDate[1] === "01") {
  //   month = "January";
  // }
};

console.log(talkingCalendar("2017/12/07")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
