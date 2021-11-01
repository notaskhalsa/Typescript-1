"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'welcome back to world';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'main.ts';
var isbeginner = true;
var total = 0;
var name = 'Arshdeep Singh';
var sentence = "My name is " + name + "\nI am still a beginner to typescript";
var n = null;
var u = undefined;
var guess = null;
var myName = undefined;
console.log(sentence);
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
var person = ['yes', 1,];
var color;
(function (color) {
    color[color["red"] = 10] = "red";
    color[color["blue"] = 11] = "blue";
    color[color["green"] = 12] = "green";
})(color || (color = {}));
var c = color.blue;
var temp = 10;
temp = true;
temp = 'arshdeep';
var multitype;
multitype = 10;
multitype = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else
        return num1;
}
add(4, 2);
add(5); /// the optional parameters always comes after defiend parameters
;
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
;
var employee = /** @class */ (function () {
    function employee(name) {
        this.employeeName = name;
    }
    employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    return employee;
}());
var emp1 = new employee('Arshdeep');
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(employee));
var m1 = new Manager('bruce');
m1.delegateWork();
m1.greet();
var p = {
    firstName: 'steve',
    lastName: 'rogers'
};
fullName(p);
