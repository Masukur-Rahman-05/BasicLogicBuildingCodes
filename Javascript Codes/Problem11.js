const findDay = (day, month, year) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(year, month - 1, day);

  return days[date.getDay()];
};

console.log(findDay(1, 1, 2000));
