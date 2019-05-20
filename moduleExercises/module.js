// var q1 = function () {
//     x = 1;
//     var a = 5;
//     var b = 10;
//     var c = function (a, b, c) {
//         console.log(x);
//         console.log(a);
//         var f = function (a, b, c) {
//             b = a;
//             console.log(b);
//             b = c;
//             var x = 5;
//         }
//         f(a, b, c);
//         console.log(b);
//         var x = 10;
//     }
//     c(8, 9, 10);
//     console.log(b);
//     console.log(x);
// };

// q1();


// var x = 9;
// function myFunction() {
//     return x * x;
// }
// console.log(myFunction());
// x = 5;
// console.log(myFunction());


// var foo = 1;
// function bar() {
//     if (!foo) {
//         var foo = 10;
//     }
//     alert(foo);
// }
// bar();


var counter = (function () {
    var counter = 0;

    var add = function () {
        counter++;
    }
    var reset = function () {
        counter = 0;
    }
    var value = function () {
        console.log(counter);
    }

    return {
        add: add,
        reset: reset,
        value: value
    }
})();

counter.add();
counter.add();
counter.add();
counter.value();
counter.reset();
counter.value();


var make_addr = (function (addr) {
    var counter = 0;

    return function () {
        counter += addr;
        return counter;
    }

}());
//
// add5 = make_addr(5);
//
// add5();
// add5();
// add5();


// Private Field: name
// Private Field: age
// Private Field: salary
// Public Method: setAge(newAge)
// Public Method: setSalary(newSalary)
// Public Method: setName(newName)
// Private Method: getAge( )
// Private Method: getSalary( )
// Private Method: getName( )
// Public Method: increaseSalary(percentage) // uses private getSalary( )
// Public Method: incrementAge( ) // uses private getAge( )
/*
var employee = (function () {
    let name;
    let salary;
    let age;

    let getName = function () {
        return name;
    }

    let getSalary = function(){
        return salary;
    }

    let getAge = function(){
        return age;
    }

    let setAge = function (newAge) {
        this.age = newAge;
    }

    let setSalary = function (newSalary) {
        this.salary = newSalary;
    }

    let setName = function (newName) {
        this.name = newName;
    }

    let increaseSalary = function (percetage) {
        let newSalary =  getSalary() + (getSalary() * (percetage));
        setSalary( salary + (salary * (percetage)));
    }

    let incrementAge = function () {
        var newAge = getAge();
        newAge++;
        setAge(newAge);
    }

    return {
        setAge: setAge,
        setName: setName,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    }
}());



// x = 1;
//
// var inside = function(){
//     console.log(x);
// };
// inside();
// console.log(x);

var employee = (function () {
    let name;
    let salary;
    let age;

    let getName = function () {
        return name;
    }
    let getAge = function(){
        return age;
    }

    let setSalary = function (newSalary) {
        this.salary = newSalary;
    }

    return {
        setAge: function (newAge) {
            this.age = newAge;
        },
        setName: function (newName) {
            this.name = newName;
        },
        setSalary: function(){
            return salary;
        },
        increaseSalary: function (percetage) {
            let newSalary =  getSalary() + (getSalary() * (percetage));
            setSalary( salary + (salary * (percetage)));
        },
        incrementAge: function () {
            var newAge = getAge();
            newAge++;
            setAge(newAge);
        }
    }
}());




var employee = (function () {

    var employe = {};

    let name;
    let salary;
    let age;

    let getName = function () {
        return name;
    }
    let getAge = function () {
        return age;
    }

    let getSalary = function () {
        return salary;
    }

    employee.setAge = function(newAge) {
        age = newAge;
    };
    employee.setName = function (newName) {
        name = newName;
    };
    employee.setSalary = function () {
        return salary;
    };
    employee.increaseSalary = function (percetage) {
        let newSalary = getSalary() + (getSalary() * (percetage));
        setSalary(salary + (salary * (percetage)));
    };
    employee.incrementAge = function () {
        var newAge = getAge();
        newAge++;
        setAge(newAge);
    };
    return employee;
}());





const promise = new Promise((resolve, reject) => {
    reject("Hattori");
});
promise.then(val => alert("Success: " + val))
.catch(e => alert("Error: " + e));







const promise = new Promise((resolve, reject) => {
    resolve("Hattori");
    setTimeout(()=> reject("Yoshi"), 500);
});
promise.then(val => alert("Success: " + val))
.catch(e => alert("Error: " + e));



 */





function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}
let promise = job(true);
promise.then(function(data) {
    console.log(data);
    return job(false);
}).catch(function(error) {
    console.log(error);
    return 'Error caught';
});
















