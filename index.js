// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    const newArray = array.slice(0, 2);
    return newArray;
}

const returnLastTwoDrivers = function(array) {
    const newArray = array.slice(2);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(number) {
    return function(fare = 25) {fare * number};
}