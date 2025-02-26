class House {
    constructor(builder) {
        this.walls = builder.walls;
        this.doors = builder.doors;
        this.windows = builder.windows;
        this.garage = builder.garage;
        this.swimmingPool = builder.swimmingPool;
    }
}

class HouseBuilder {
    constructor() {
        this.walls = 0;
        this.doors = 0;
        this.windows = 0;
        this.garage = false;
        this.swimmingPool = false;
    }

    setWalls(walls) {
        this.walls = walls;
        return this;
    }

    setDoors(doors) {
        this.doors = doors;
        return this;
    }

    setWindows(windows) {
        this.windows = windows;
        return this;
    }

    setGarage(hasGarage) {
        this.garage = hasGarage;
        return this;
    }

    setSwimmingPool(hasPool) {
        this.swimmingPool = hasPool;
        return this;
    }

    build() {
        return new House(this); // Returns a House instance
    }
}

// Using the Builder
const house = new HouseBuilder()
    .setWalls(6)
    .setDoors(3)
    .setWindows(8)
    .setGarage(true)
    .setSwimmingPool(true)
    .build();

console.log(house);
// Output: House { walls: 6, doors: 3, windows: 8, garage: true, swimmingPool: true }
