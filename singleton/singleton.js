const singleton = {
    name: "I am a singleton",
    getName: function(){
        return this.name;
    }
};

console.log(singleton.getName());