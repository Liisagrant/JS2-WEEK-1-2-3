// A class is a template for us to create objects, like a blueprint for the shape of the data.
// In programming, a class contains properties and methods. Properties are variables inside of a class, and methods are functions inside of a class.
// Classes form the basis for Object-Oriented Programming (OOP), a paradigm of programming.
// Classes aren’t used very often in JavaScript, however, you will come across them at the workplace so it’s important to know how to use them.

class MyClass {
  // This is a property in our class
  basicProperty = "My basic property";
  // This is another property however it isn't initialized to a value
  emptyProperty;
  // The constructor lets us set values when we create an instance of a class
  constructor(myInitialValue) {
    // A property 'myInitialValue' being initialized to an argument
    this.myInitialValue = myInitialValue;
  }

  // A method in the class
  myMethod() {
    console.log(this.myInitialValue);
  }
}

const myClassInstance = new MyClass("Hello world");
myClassInstance.myMethod();
// Logs:
// Hello world
