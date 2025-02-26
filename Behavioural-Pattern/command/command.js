//Receiver: Light
class Light{
    turnOn(){
        console.log("light is on");
    }
    turnOff(){
        console.log("light is off");
    }
}

//Command interface
class Command{
    execute(){}
    undo(){}
}

//Concrete Command: Turn on light
class LightOnCommand extends Command {
    constructor(light){
        super();
        this.light = light;
    }

    execute(){
        this.light.turnOn();
    }

    undo(){
        this.light.turnOff();
    }
}

// Concrete Command: Turn Off Light
class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }

    undo() {
        this.light.turnOn();
    }
}

//Invoker: Remote control
class RemoteControl{
    constructor(){
        this.history = [];
    }

    executeCommand(command){
        command.execute();
        this.history.push(command);//save for undo
    }

    undoCommand(){
        if(this.history.length > 0){
            const command = this.history.pop()
            command.undo();
        } else {
            console.log("no commands to undo.")
        }
    }
}

//Usage
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const remote = new RemoteControl();

remote.executeCommand(lightOn);
remote.executeCommand(lightOff);

remote.undoCommand();
remote.undoCommand();
remote.undoCommand();