var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.disp = function () {
        console.log("car name: " + this.name);
    };
    return car;
}());
var obj = new car();
obj.name = "Thar";
console.log("accessing property :" + obj.name);
obj.disp();
