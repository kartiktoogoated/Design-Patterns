//Basic Constructor function
function Car(){
    this.description = "basic car";
}

Car.prototype.getDescription = function(){
    return this.getDescription;
};

Car.prototype.getCost = function(){
    return 100000;
};
//Decorator func
function addSunroof(car){
    const originalCost = car.getCost();
        car.getCost = function(){
            return originalCost + 1500;
        };
        car.getDescription = function(){
            return car.description + " + Sunroof";
        };
            
    }


const myCar = newCar();
console.log(myCar.getDescription());
console.log(myCar.getCost());

//applying decorator
addSunroof(myCar);
console.log(myCar.getDescription());
console.log(myCar.getCost());


