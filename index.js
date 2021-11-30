const returnFirstTwoDrivers = function() {
    const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function() {
    const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(_number){
    const fareMultiplier = number => number * number
    return fareMultiplier
}

const fareDoubler = function(number) {
    return number * 2
}

const fareTripler = function(number) {
    return number * 3
}

function selectDifferentDrivers(drivers, selectDrivers) {
    drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    if (selectDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers()
    } else if (selectDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers()
    }
}