class HeavyObject {
    constructor() {
        console.log("Heavy object initialized...");
        this.data = "Expensive data";
    }
}

const heavyObjectProxy = new Proxy({}, {
    get(target, property) {
        if (!target.instance) {
            target.instance = new HeavyObject();
        }
        return target.instance[property];
    }
});

// Usage
console.log("Before accessing heavyObjectProxy");
console.log(heavyObjectProxy.data); // Heavy object initialized... | Expensive data
console.log(heavyObjectProxy.data); // Expensive data (No reinitialization)
