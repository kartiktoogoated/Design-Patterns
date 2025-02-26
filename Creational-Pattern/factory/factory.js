//step  1: Define a Factory Function
function VehicleFactory(){
    this.createVehicle = function(type){
        let vehicle;

        if(type === "car"){
            vehicle = new Car;
        } else if(type === "bike"){
            vehicle = new Bike;
        }

        return vehicle;
    }
}

//Step-2: Define vehicle types
class Car{
    drive(){
        console.log("Driving a car");
    }
}

class Bike{
    drive(){
        console.log("Driving a bike");
    }
}

//Step-3: Using the factory
const factory = new VehicleFactory();

const myCar = factory.createVehicle("car");
myCar.drive();

const myBike = factory.createVehicle("bike");
myBike.drive();