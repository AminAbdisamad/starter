// Api for geo location
// http://ipinfo.io

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const maalmaha = [
  "Axad",
  "Isniin",
  "Talaado",
  "Arbaco",
  "Khamiis",
  "Jimco",
  "Sabti",
];

const date = new Date();
const day = date.getDay();
const today = days[day];
const maalin = maalmaha[day];

export const globalMessage = `Have a wonderful ${today}!`;
export const somaliMessage = `${maalin} Wanaagsan!`;
