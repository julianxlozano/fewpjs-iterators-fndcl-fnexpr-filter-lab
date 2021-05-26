// Code your solution here

function findMatching(drivers,string){
    return drivers.filter(driver => {return driver === string || driver === string.toLowerCase()})
};

function fuzzyMatch(drivers,string){
    return drivers.filter(driver => {return driver.match("^"+string) })
};

function matchName(drivers,string){
    return drivers.filter(driver => {return driver.name === string})  
};