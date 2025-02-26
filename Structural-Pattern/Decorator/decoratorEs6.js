class Car {
    constructor() {
        this.description = "Basic Car";
    }

    getDescription() {
        return this.description;
    }

    getCost() {
        return 10000;
    }
}

// Decorator Class
class SunroofDecorator {
    constructor(car) {
        this.car = car;
    }

    getDescription() {
        return this.car.getDescription() + " + Sunroof";
    }

    getCost() {
        return this.car.getCost() + 1500;
    }
}

// Usage
let myCar = new Car();
console.log(myCar.getDescription()); // Output: Basic Car
console.log(myCar.getCost()); // Output: 10000

// Applying Decorator
myCar = new SunroofDecorator(myCar);
console.log(myCar.getDescription()); // Output: Basic Car + Sunroof
console.log(myCar.getCost()); // Output: 11500
