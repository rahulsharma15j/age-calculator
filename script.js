const dateInput = document.getElementById("date");
const result = document.querySelector(".result");

//setting current date the initial value to date input
dateInput.value = new Date().toISOString().split("T")[0];

//setting current date as max date value, so than user can't select future dates
dateInput.max = new Date().toISOString().split("T")[0];

const calculateAge = () => {
  //setting input date as birth date
  let birthDate = new Date(dateInput.value);

  //getting birth day number
  let birthDay = birthDate.getDate();
  //getting birth month value
  let birthMonth = birthDate.getMonth() + 1;
  //getting birth year
  let birthYear = birthDate.getFullYear();

  //getting current date
  let today = new Date();

  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  //declaring final values to show
  let years, months, days;

  //total years
  years = currentYear - birthYear;

  if (currentMonth >= birthMonth) {
    //total months
    months = currentMonth - birthMonth;
  } else {
    //reduce years value by 1
    years--;
    months = 12 + currentMonth - birthMonth;
  }

  if (currentDay >= birthDay) {
    //total days
    days = currentDay - birthDay;
  } else {
    months--;
    days = getDaysInMonth(birthYear, birthMonth) + currentDay - birthDay;
  }

  //if months value is negative
  if (months < 0) {
    months = 11;
    years--;
  }

  result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> monts,
                        <span>${days}</span> days old.`;
};

const getDaysInMonth = (year, month) => {
  //get total days in month
  return new Date(year, month, 0).getDate();
};
