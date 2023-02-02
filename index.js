// Code your solution in this file!
const returnFirstTwoDrivers = (function(driversArray) {
    return driversArray.slice(0, 2);
});

const returnLastTwoDrivers = (function(driversArray) {
    return driversArray.slice(-2);
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(value) {
    return function muliplier(fare) {
        return value * fare;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(driversArray, eitherFunction) {
    return eitherFunction(driversArray);
}