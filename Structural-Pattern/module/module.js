const MyModule = (function (){
    let privateVariable = "i am private";

    function privateMethod(){
        console.log("Accessing the private method:", privateVariable);
    }

    return{
        publicVariable: "I am public",

        publicMethod(){
            console.log("Accessing public method");
            privateMethod();
        }
    };
})();

console.log(MyModule.publicVariable);
MyModule.publicMethod();
console.log(MyModule.privateVariable);