const moment = require("moment");
import { DAYMILLISECONDS } from "../constants/constants";

export const getNextSeason = () => {
  const actualYear = moment().format("YYYY");
  const today = moment("2020-04-19");
  const seasons = [
    {
      day: "22",
      month: "12",
      year:
        moment(`${actualYear}-12-22`).diff(moment()) > 0
          ? actualYear
          : moment()
              .add(1, "years")
              .format("YYYY"),
      name: "Winter"
    },
    {
      day: "21",
      month: "03",
      year:
        moment(`${actualYear}-03-21`).diff(moment()) > 0
          ? actualYear
          : moment()
              .add(1, "years")
              .format("YYYY"),
      name: "Spring"
    },
    {
      day: "22",
      month: "06",
      year:
        moment(`${actualYear}-06-22`).diff(moment()) > 0
          ? actualYear
          : moment()
              .add(1, "years")
              .format("YYYY"),
      name: "Summer"
    },
    {
      day: "23",
      month: "09",
      year:
        moment(`${actualYear}-09-23`).diff(moment()) > 0
          ? actualYear
          : moment()
              .add(1, "years")
              .format("YYYY"),
      name: "Autumn"
    }
  ];

  const findto = seasons.find(
    ({ day, month, year }) => `${year + month + day}` > today.format("YYYYMMDD")
  );
  const { day, month, year, name } = findto;
  const sunstractionDate = moment(`${year + month + day}`).diff(today);
  const numberOfDays = Math.ceil(sunstractionDate / DAYMILLISECONDS);

  return [numberOfDays, name];
};
