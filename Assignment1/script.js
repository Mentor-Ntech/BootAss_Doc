'use strict'

// class Car  {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed
//     }

//     //Method
//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.make} is going at ${this.speed} km/h`)
//     }

//     brake() {
//         this.speed -= 5;
//         console.log(`${this.make} is going at ${this.speed} km/h`)
//     }
//     get getSpeedUS() {
//         return `${this/1.6}mi/hr`
//     }

//     set setSpeedUS(newSpeed) {
//         return `${newSpeed * 1.6}mi/hr`
//     }

// }
// const myCar1 = new Car('BMW', 120);
// myCar1.accelerate()
// myCar1.accelerate()
// myCar1.accelerate()
// myCar1.brake()
// myCar1.accelerate()
// myCar1.accelerate()
// myCar1.brake();


// class Account {
//     constructor(owner,currency, pin) {
//         this.owner = owner;
//         this.currency = currency
//         this.pin = pin;
//         this.movements = [];
//         this.locale = navigator.language;

//         console.log(`Thank you for banking with us ${this.owner}`)
//     }

//     createUsername() {
//         return this.owner.toUpperCase().split('').slice(0, 2).join()
//     // return (`{this.owner.toUpperCase().split('').slice(0, 2).join('')}${this.pin.toString().split('').slice(-2).join}`)
//     }


//     deposit(value) {
//         return this.movements.push(value)
//     }

//     withdraw(value) {
//         // return this.movements.push(-value)
//         return this.deposit(-value)
//     }

//     approveLoan() {
//      return true;
   
//     }

//     requestLoan(value) {
//         if (this.approveLoan()) {
//             console.log('Loan approved')
//             return this.deposit(value);
//         }else {
//             console.log('gattat hah here')
//         }
//     }
//     get getBalance() {
//         return this.movements.reduce((accm, el)=> el + accm, 0)
//     }
// }

// const acct1 = new Account('Makawana', 'USD', 1111)
// console.log(acct1.createUsername())
// acct1.deposit(250)
// acct1.deposit(1250)
// acct1.deposit(750)
// acct1.withdraw(300)
// acct1.withdraw(750)
// acct1.deposit(250)
// acct1.withdraw(550)
// acct1.requestLoan(10000)
// console.log(acct1.getBalance)
// console.log(acct1.movements)
// console.log(acct1)


const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

const bmw = new Car('BMW', 120)
console.log(bmw);

const SUV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

SUV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

SUV.prototype.accelerate = function() {
    this.speed = this.speed + 20;
    this.charge = this.charge - 2;

    console.log(`${this.make} is going at ${this.speed} with the battery percentage at ${this.charge}%`)
}

const bmwSUV = new SUV('BMW SUV', 140, 46);
console.log(bmwSUV)
bmwSUV.accelerate()
bmwSUV.accelerate()
bmwSUV.accelerate()
bmwSUV.accelerate()


class Suv extends Car {
    constructor (make, speed, charge) {
        super(make, speed)
        this.charge = charge

    
    }
    break() {
        this.make += 20;
        this.speed -= 2
         console.log(`${this.make} is going at ${this.speed} with the battery percentage at ${this.charge}%`)
    }

    
}
const mySuv = new Car ('SUV bmw', 140, 46)
console.log(mySuv)
mySuv.break()
mySuv.break()
mySuv.break()
mySuv.break()

/**
 * ASSIGNMENT
 * 1. Convert the code above (Function Constructor) to ES6 Class
 * 2. Create another instance of volvoSUV with speed of 130 at charge of 58%
 * 3. Write *brake* method in ES6 👇
 *      a. Speed will reduce by 10
 *      b. Charge will increase by 1
 * 4. Chain these two methods together to see the battery charge percentages
 * 
 * HINT: Don't forget to return *this* from each method...😏
 * 
 * You are FREE to create as many additional instances to the two above as you wish.
 * 
 * Goodluck 🍀
 */

class CarA extends Car{
    constructor (make, speed, charge) {
        super(make, speed)
        this.charge = charge
    }

    brake() {
        this.speed -=10
        this.charge += 1

        console.log(`${this.make} is going at ${this.speed} with the battery percentage at ${this.charge}%`)
        return this
    }
}
const volvoSUV = new CarA('volvo SUV', 130, 58)
console.log(volvoSUV)
volvoSUV.brake();
volvoSUV.brake();
volvoSUV.brake();
volvoSUV.brake()
volvoSUV.brake()

 