import moment from "moment";

export const toDefaultDate = (date, locale) => {
  return moment(date)
    .locale(locale)
    .format("DD MMM YYYY");
};

export const primaryDate = date => {
  return moment(date, "DD-MM-YYYY");
};

export const toPrimaryDate = date => {
  return moment(date).format("DD-MM-YYYY");
};

export const toMonthFirst = date => {
  return moment(date).format("MM-DD-YYYY");
};

export const toYearFirst = date => {
  return moment(date).format("YYYY-MM-DD");
};

export const toWithoutDay = date => {
  return moment(date, "DD-MM-YYYY").format("MM-YYYY");
};

export const toWithoutDayDate = date => {
  return moment(date).format("MM-YYYY");
};

export const toWithoutDayYear = date => {
  return moment(date).format("YYYY-MM");
};

export const toPrimaryNextDay = date => {
  return moment(date)
    .add(+1, "days")
    .format("DD-MM-YYYY");
};

export const toPrimaryPrevDay = date => {
  return moment(date)
    .add(-1, "days")
    .format("DD-MM-YYYY");
};

export const toFullMonthName = (date, locale) => {
  return moment(date)
    .locale(locale)
    .format("MMMM YYYY");
};
