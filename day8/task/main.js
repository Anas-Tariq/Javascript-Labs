/********************************* Task 1 *********************************/ 
function Person (name, age, address) {
    if (this.constructor == Person) {
        throw "This is an abstract class"
    }
    this.name = name;
    this.age = age;
    this.address = address;
}

function Employee (name, age, address, salary, ) {
    Employee.numOfEmployee=++Employee.numOfEmployee||1;
    Person.call(this, name, age, address);
    this.salary = salary;
}

// Override
Employee.prototype.printEmp = function (x) {
    x = "I'm one"
    console.log("Hello from 1st print " + x)
}
Employee.prototype.printEmp = function (y) {
    y = "I'm one"
    console.log("Hello from 2nd print " + y)
}
// Override


Employee.HTRules = function() {
    console.log("Don't eat or drink in the lab");
    console.log("Sleep is not allowed");
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee

Employee.prototype.showSalary = function () {
    console.log(this.salary)
}

Employee.prototype.increaseSalary = function (raise) {
    console.log(this.salary + raise)
}


//  i) 1- Static method are assigned to the class itself and can't be called with one of it's instance


// Overriding

// We can make an abstract class manually as there is no keyword for it in javascipt
// seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed



function Student (name, age, address, courses) {
    Person.call(this, name, age, address);
    this.courses = courses;
}
Student.prototype = Object.create(Person.prototype);


var p1 = new Person('anas', 28, 'Maadi');
var e1 = new Employee('boray', 27, 'Imbaba', 3000);

console.log(e1)

/********************************* Task 1 *********************************/



/********************************* Task 2 *********************************/ 
function Course (courseName) {
    this.courseName = courseName;
}

var course1 = Course("DS")
var course2 = Course("DB")
var course3 = Course("Programming")

var student1 = Student("omar", 23, "port-said", [course1, course2, course3])



/********************************* Task 2 *********************************/ 

/*3) a
*   Abstract Class It is necessary for an abstract class to have at least one abstract method.
*   
*/