'use strict'

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed
}

Car.prototype.calcAclt = function() {
    return  this.speed +10
}


const firstCar = new Car('BMW', 120);
const secondCar = new Car('Mercedes', 95)
console.log(`Your car is running at ${firstCar.calcAclt()} km/hr`)
console.log(`Your car is running at ${secondCar.calcAclt()} km/hr`)
console.log(firstCar);
console.log(secondCar);



const Car2 = function(make, speed) {
    this.make = make;
    this.speed = speed
}

Car.prototype.calcBrk = function() {
    return this.speed - 5
}

const firstCarB = new Car('BMW', 120);
const secondCarB = new Car('Mercedes', 95)
console.log(`Your car speed limit is ${firstCarB.calcBrk()}`)
console.log(`Your car speed limit is ${secondCarB.calcBrk()}`)
console.log(firstCarB);
console.log(secondCarB);



 