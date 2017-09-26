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
var verbData = require("../data/verbs.json");
var nounData = require("../data/nouns.json");
var joinData = require("../data/joins.json");
var actionData = require("../data/actions.json");
var verbs = verbData;
var nouns = nounData;
var joins = joinData;
var actions = actionData;
var generateSentence = function () {
    var verb = helpers_1.default.titleCase(helpers_1.default.randomFromArray(verbs)), noun = helpers_1.default.randomFromArray(nouns), join = helpers_1.default.randomFromArray(joins), action = helpers_1.default.randomFromArray(actions);
    return verb + " " + noun + " " + join + " " + action;
};
var generateParagraph = function (opts) {
    var sentences = helpers_1.default.randomIntInRange(opts.sentenceMin, opts.sentenceMax);
    return helpers_1.default.range(sentences).map(function (i) { return generateSentence(); }).join('. ');
};
exports.generateIpsum = function (opts) {
    var defaultOpts = { paragraphs: 3, sentenceMin: 3, sentenceMax: 6 };
    var mergedOpts = __assign({}, defaultOpts, opts);
    return helpers_1.default.range(mergedOpts.paragraphs).map(function (i) { return generateParagraph(mergedOpts); }).join('.\n\n');
};
