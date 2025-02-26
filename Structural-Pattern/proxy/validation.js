const secureUser = new Proxy(user, {
    set(target, property, value) {
        if (property === "password") {
            console.log("You cannot modify the password directly!");
            return false;
        }
        target[property] = value;
        return true;
    }
});

// Usage
secureUser.password = "newpassword"; // Output: You cannot modify the password directly!
secureUser.name = "Bob"; // Name is updated successfully
console.log(secureUser.name); // Output: Bob
