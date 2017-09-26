"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.prototype.titleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
    Helpers.prototype.randomFromArray = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    Helpers.prototype.randomIntInRange = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Helpers.prototype.range = function (n) {
        var tmp = [];
        for (var i = 0; i < n; i++) {
            tmp.push(i);
        }
        return tmp;
    };
    return Helpers;
}());
var helpers = new Helpers();
exports.default = helpers;
