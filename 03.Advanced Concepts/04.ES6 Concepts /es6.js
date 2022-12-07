//ES6 declares variables with the let and const keywords
//ES6 has introduced block scoping
//No hoisting takes place when the let keyword is used
//If you don't assign a value to a variable, undefined is assigned to it
//When we use a const keyword to declare a variable, we must initialize it
//Once we initialize a constant, we can't change it
//Using a "this" keyword inside an arrow function will give you the current
//context of the code you're running and not the element in which the code is
//running
//e.g document.addEventListener('click', () => console.log(this)); this code
//will return the window object widow {...} because the context in which 
//**document.addEventListener('click', () => console.log(this))** is being run
//where the arrow function is called is the window/global scope
//you cannot bind a new object to an arrow function
//you cannot change the value of this when using arrow functions
//calls to bind(), call(), and apply() are all useless when using an arrow
//function
//the => symbol of an arrow fuction cannot be put on a separate line with the
//() symbol
//when we declare a function with the => symbol, we do not have access to its
//prototype
//Dynamic functions: let func = new Function("price = 20.00", "return price")
//Object Literals
//    let price = 5.99, quantity = 30;
//    let productView = {
//          price,
//          quantity
//    }; console.log(productView); returns {price: 5.99, quantity: 30}
//
//    Also; let productView = {
//                  price,
//                  quantity,
//                  calculateValue() {
//                      return this.price * this.quantity;
//                  }
//          };
// You can also have space in the property name:
//          let productView = {
//              price,
//              quantity,
//              "calculatePrice"() {
//                  return this.price * this.quantity;
//              }
//          }; console.log(productView["calculatePrice"]);
//
// You can also do, let field = 'dynamicField';
//                  let price = 5.99;
//                  let productView = {
//                      [field]: price
//                  };
//                  console.log(productView); returns {dynamicField: 5.99}
//
// You can also do, let productView = {
//                      [field + "-001"]
//                  }
