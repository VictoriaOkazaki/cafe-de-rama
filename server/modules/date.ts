import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";

// https://day.js.org/docs/en/plugin/utc

dayjs.extend(utc);

export function getUtcDate() {
  return dayjs.utc().format();
}

const UI_DATE_FORMAT = "DD MMMM, YYYY";

export function checkIsUtcDate(date: string) {
  return dayjs.utc(date).isUTC();
}

export function utcToUiDateFormat(date: string) {
  try {
    if (!checkIsUtcDate(date)) return date;
    return dayjs.utc(date).local().format(UI_DATE_FORMAT);
  } catch (err) {
    console.warn("Error to ui date format", date, err);
    return date;
  }
}
