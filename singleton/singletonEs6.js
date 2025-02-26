class singleton {
    constructor(){
        if(!singleton.instance){
            singleton.instance = this;
            this.data = "I am a singleton";
        }
        return Singleton.instance
    }

    getData(){
        return this.data;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.loh(instance1 === instance2);
console.log(instance1.getData());

// when a new instance is created, the constructor checks if an instance already exists

//if it does it returns th existence instance instead of creating the new one