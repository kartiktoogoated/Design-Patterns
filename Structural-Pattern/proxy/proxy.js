const user = {
    name: "kartik",
    age: 20
}

const userProxy = new Proxy(user, {
    get(target, property){
        console.log(`Accessing property: ${property}`);
        return target[property] || "Property does not exist";
    },
    set(target, property, value){
        if(property === "age" && value < 0){
            console.log("Age cant be -ve");
            return false;
        }
        target[property] = value;
        console.log(`Updated property: ${property} = ${value}`);
        return true;
    }
});

console.log(userProxy.name);
console.log(userProxy.gender);

userProxy.age = 30;
userProxy.age = -5;