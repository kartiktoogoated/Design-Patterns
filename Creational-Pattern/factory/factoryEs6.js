class VehicleFactory{
    static createVehicle(type){
        switch(type){
            case "car":
                return new Car();
            case "bike":
                return new Bike();

            default: 
            throw new Error("Invalid vehicle type");
        }
    }
}

const car = VehicleFactory.createVehicle("car");
car.drive();