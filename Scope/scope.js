// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//     var x = 10;
//     console.log(x);
//     console.log(a);
//     var f = function (a, b, c) {
//         b = a;
//         console.log(b);
//         b = c;
//         var x = 5;
//     }
//     f(a, b, c);
//     console.log(b);
// }
// var debug= 1;
// c(8, 9, 10);
// console.log(b);
// console.log(x);
//
//
//
//
//
//
// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }
//
// // Person.prototype.nationality = "English";
//
// let person = new Person("clarie", "smith", 35, "blue");
// person.nationality  = "teste";
// console.log(person);


function sum(no1) {
    console.log("parent scope");
    return function (no2) {
        console.log("child scope");
        console.log(no1 + no2);
    }
}

sum(1)(5);


var number_8 = {
    name: "fred",
    major: "Music",
    math: function (x, y) {
        return (x !== y) ? Math.min(x, y) :
            x + "^2=" + Math.pow(x, 2) + "\n" + y + "^2=" + Math.pow(y, 2);
    }
};

console.log(number_8.math(2, 3));


function employee (name, salary, position) {
   this.name = name,
   this.salary = salary,
   this.poisition = position
}

employee1 = new employee("joe", 100000, "senior programmer");
employee2 = new employee("ana", 90000, "jr programmer");
employee3 = new employee("bete", 110000, "software enginnering");

console.log(employee1);
console.log(employee2);
console.log(employee3);




function products(){
    var product = 1;

    for(let i = 0; i < arguments.length; i++){
        product *= arguments[i];
    }
    return product;
}
console.log(products(2, 2));
console.log(products(4, 2));
console.log(products(4, 2, 8));


const max3 = (x, y, z ) => {return Math.max(x, y, z)};
console.log(max3(1, 2, 3));



//
// 6. Assume object x is the prototype for object y in Javascript.
//     Object x has a method f( ) containing keyword 'this'.
//     When f is called by x.f( ), what does 'this' refer to?


