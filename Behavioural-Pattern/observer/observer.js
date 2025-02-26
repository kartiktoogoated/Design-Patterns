//subject(observable)
class Subject{
    constructor(){
        this.observers = [];
    }


    subscribe(observer) {
        this.observers.push(observer);
        console.log("Observer added");
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
        console.log("observer removed.")
    }

    notify(data){
        console.log("Notifying observers...");
        this.observers.forEach(observer => observer.update(data));
    }
}

// Observer

class Observer {
    constructor(name){
        this.name = name;
    }

    update(data){
        console.log(`${this.name} recieved data:`, data);
    }
}

//Usage
const subject = new Subject();

const observer1 = new Observer("Obs 1");
const observer2 = new Observer("Obs 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("hello, Observers!")
subject.unsubscribe(observer1);
subject.notify("Another update");

    