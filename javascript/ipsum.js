"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ipsum = (function () {
    function Ipsum() {
        this.verbs = ['one', 'two', 'three', 'four'];
        this.nouns = [];
        this.joiningWords = [];
        this.actions = [];
        this.options = {
            paragraphs: 3,
            sentenceMin: 3,
            sentenceMax: 3,
        };
    }
    Ipsum.prototype.pickRandom = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    Ipsum.prototype.generate = function (options) {
        return "Lorem ipsum " + this.pickRandom(this.verbs);
    };
    return Ipsum;
}());
exports.default = Ipsum;
