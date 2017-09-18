"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helpers {
    titleCase(str) {
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }
    randomFromArray(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    randomIntInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    range(n) {
        return [...Array(n).keys()];
    }
}
exports.default = Helpers;
