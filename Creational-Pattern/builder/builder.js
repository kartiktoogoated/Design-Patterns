//STEP-1: DEFINE THE BUILDER CLASS

class HouseBuilder{
    constructor(){
        this.house = {};
    }

    setWalls(walls){
        this.house.walls = walls;
        return this;
    }

    setDoors(doors){
        this.house.doors = doors;
        return this;
    }

    setWindows(windows){
        this.house.windows = windows;
        return this;
    }
    
    setGarage(hasGarage){
        this.house.garage = hasGarage;
        return this;
    }
    
    setPool(hasPool){
        this.house.pool = hasPool;
        return this;
    }

    build(){
        return this.house;
    }
}

const myHouse = new HouseBuilder()
    .setWalls(4)
    .setDoors(2)
    .setWindows(6)
    .setGarage(true)
    .setPool(false)
    .build();

    console.log(myHouse);
