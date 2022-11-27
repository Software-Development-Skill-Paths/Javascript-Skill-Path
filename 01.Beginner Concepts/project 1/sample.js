
let obj = {
    val: 'hello',
    printVal: function() {
        console.log(this.val);
    }
}

let obj1 = {
    val: 'Clear'
}
//obj1.printVal = obj.printVal;

//obj.printVal.bind(obj1)();

let func = function () {
    //console.log(this);
    this.hello = 'hello';
    this.greet = function() {
        console.log(this.hello)
    }
    this.delayGreeting = function () {
        setTimeout(this.greet, 1000);
    }
}

//this logs the global scope because that is where func is being executed
//func();

//the 'new' keyword creates a new 'this' which is a new object that has
//as it's properties the variables that were defined within the func()
//function
let greeter = new func();

//this returns a type of 'object'
/*greeter = func {
    hello: 'hello',
    greet: function() {
        console.log(this.hello)
    }
    delayGreeting = function () {
        setTimeout(this.greet, 1000);
    } 
}*/
console.log(typeof greeter);  

//this logs 'hello' because greet() is being executed in the func scope
//greeter.greet();

//when we execute the delayGreeting(), it calls the setTimeout() function
//but the setTimeout() function is defined within the global scope, so it's
//'this' value is the global scope. So when it's call back handler function
//(this.greet) is called, it looks within the global scope where it is located
//to find the greet() function but this greet function is not defined within
//the global scope so it returns undefined 
//greeter.delayGreeting();

//to solve the above problem of undefined returned when we we call
//greeter.delayGreeting(), we can 
//1.give the greet() function that setTimeOut() uses as a handler 
//a context so that execution knows where to find it as shown below
/*

let func = function () {
    //console.log(this);
    this.hello = 'hello';
    this.greet = function() {
        console.log(this.hello)
    }
    this.delayGreeting = function () {
        setTimeout(*****this.greet.bind(this)*****, 1000);
    }
}
*/
//2. create a variable to save the context of the current func
//so that you can preserve it's context wherever it is used as
//shown below
/*let func = function () {
    //console.log(this);
    ***** _this = this *****
    _this.hello = 'hello';
    _this.greet = function() {
        console.log(_this.hello);
    }
    _this.delayGreeting = function () {
        setTimeout(_this.greet, 1000);
    }
}*/
