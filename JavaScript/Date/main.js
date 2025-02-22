// https://www.testdome.com/questions/javascript/date/76471

function formatDate(userDate) {
  const [month, day, year] = userDate.split("/");
  return `${year}${month.padStart(2, "0")}${day.padStart(2, "0")}`;
}

console.log(formatDate("12/31/2014"));
