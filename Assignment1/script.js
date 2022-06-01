'use strict'

class Car  {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed
    }

    //Method
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }
    get getSpeedUS() {
        return `${this/1.6}mi/hr`
    }

    set setSpeedUS(newSpeed) {
        return `${newSpeed * 1.6}mi/hr`
    }

}
const myCar1 = new Car('BMW', 120);
myCar1.accelerate()
myCar1.accelerate()
myCar1.accelerate()
myCar1.brake()
myCar1.accelerate()
myCar1.accelerate()
myCar1.brake();


class Account {
    constructor(owner, pin,) {
        this.owner = owner;
        this.pin = pin;
        this.movements = [200, 500, 300, 200]
    }
    setFirstEl(mov) {
        console.log(this.movements.push(mov))
    }
   introduce() {
    console.log(`My account name is ${this.owner}, with pin ${this.pin} with account transaction ${this.movements}`)   

   }
}
const James = new Account('James Bob',3333,)
 James.introduce()

