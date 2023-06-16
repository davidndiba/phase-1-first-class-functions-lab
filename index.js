// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers =function(drivers){
   return drivers.slice (0, 2);
} 
let first = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let returnLastTwoDrivers = function(first){
    return first.slice (2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier){
    return function(fare=5){
        return fare*fareMultiplier
    }
}
let fareDoubler = function (fare){
    return createFareMultiplier(2)(fare);
}
let fareTripler = function (fare){
    return createFareMultiplier(3)(fare);
}
function selectDifferentDrivers(drivers, list){
    return list(drivers);
}


