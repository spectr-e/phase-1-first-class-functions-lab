// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  let firstTwoDrivers = drivers.slice(0, 2);
  return firstTwoDrivers;
};

const returnLastTwoDrivers = (drivers) => {
  let lastTwoDrivers = drivers.slice(-2);
  return lastTwoDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return (fare) => {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (drivers, selectDrivers) => {
  {
    if (selectDrivers === returnFirstTwoDrivers) {
      return returnFirstTwoDrivers(drivers);
    } else if (selectDrivers === returnLastTwoDrivers) {
      return returnLastTwoDrivers(drivers);
    }
  }
};
