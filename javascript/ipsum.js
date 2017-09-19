"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
var verbs = require("../data/verbs.json");
var nouns = require("../data/nouns.json");
var joins = require("../data/joins.json");
var actions = require("../data/actions.json");
var Ipsum = (function () {
    function Ipsum(opts) {
        this.helpers = new helpers_1.default();
        this.verbs = verbs;
        this.nouns = nouns;
        this.joins = joins;
        this.actions = actions;
        var defaultOpts = { paragraphs: 3, sentenceMin: 3, sentenceMax: 6 };
        this.opts = __assign({}, defaultOpts, opts);
    }
    Ipsum.prototype.generateSentence = function () {
        var verb = this.helpers.titleCase(this.helpers.randomFromArray(this.verbs)), noun = this.helpers.randomFromArray(this.nouns), join = this.helpers.randomFromArray(this.joins), action = this.helpers.randomFromArray(this.actions);
        return verb + " " + noun + " " + join + " " + action;
    };
    Ipsum.prototype.generateParagraph = function () {
        var _this = this;
        var sentences = this.helpers.randomIntInRange(this.opts.sentenceMin, this.opts.sentenceMax);
        return this.helpers.range(sentences).map(function (i) { return _this.generateSentence(); }).join('. ');
    };
    Ipsum.prototype.generate = function () {
        var _this = this;
        return this.helpers.range(this.opts.paragraphs).map(function (i) { return _this.generateParagraph(); }).join('.\n\n');
    };
    return Ipsum;
}());
exports.default = Ipsum;
