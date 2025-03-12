// Code your solution in this file!
// Function to return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Function to return the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Array containing the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on the provided function
const selectDifferentDrivers = function(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
};

// Exporting the functions for testing
module.exports = { 
    returnFirstTwoDrivers, 
    returnLastTwoDrivers, 
    selectingDrivers, 
    createFareMultiplier, 
    fareDoubler, 
    fareTripler, 
    selectDifferentDrivers 
};
