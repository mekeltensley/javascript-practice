'use strict';

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
// a class method 
    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
    }

    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2;
    }
}
// an instance of class that is defining the parameters of that class!
const cx5 = new Car(4, 'V6', 'grey');
const civic = new Car(3, 'v4', 'blue');

console.log(cx5);
console.log(cx5.carStats());
console.log(Car.totalDoors(cx5, civic));