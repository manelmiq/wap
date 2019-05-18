setTimeout(booyah, 2000);
setTimeout(booyah, 2000);

function booyah() {
    console.log("teste");

}

var myfunc = function (a, x) {
    return a * x;
};
var x = myfunc(2, 3);
var y = myfunc;
console.log(x);
console.log(y(2, 3));


function booyah1() {
    alert("BOOYAH1");
}

function booyah2() {
    setTimeout(function () {
        alert("BOOYAH2");
    }, 2000);
}

setTimeout(booyah1, 2000);
setTimeout(booyah2(), 2000);


















