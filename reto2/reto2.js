const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

function countHours(year, holidays) {
  days = holidays.map(holiday => new Date(`${year}/${holiday}`).getDay())
  let a = days.filter(day => day > 0 && day < 6).length * 2;
  return a;
}

function countHours2(year, holidays) {
  return holidays.filter(day =>
    new Date(`${year}/${day}`).getDay() % 6 != 0).length * 2;
}