"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verbs = require("../data/verbs.json");
const nouns = require("../data/nouns.json");
const joins = require("../data/joins.json");
const actions = require("../data/actions.json");
class Ipsum {
    constructor(opts) {
        this.verbs = verbs;
        this.nouns = nouns;
        this.joins = joins;
        this.actions = actions;
        let defaultOpts = { paragraphs: 3, sentenceMin: 3, sentenceMax: 6 };
        this.opts = Object.assign({}, defaultOpts, opts);
    }
    titleCase(str) {
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }
    random(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    range(n) {
        return [...Array(n).keys()];
    }
    generateSentence() {
        return `${this.titleCase(this.random(this.verbs))} ${this.random(this.nouns)} ${this.random(this.joins)} ${this.random(this.actions)}`;
    }
    generateParagraph() {
        let sentences = Math.floor(Math.random() * (this.opts.sentenceMax - this.opts.sentenceMin + 1)) + this.opts.sentenceMin;
        return this.range(sentences).map(i => this.generateSentence()).join('. ');
    }
    generate() {
        return this.range(this.opts.paragraphs).map(i => this.generateParagraph()).join('.\n\n');
    }
}
exports.default = Ipsum;
