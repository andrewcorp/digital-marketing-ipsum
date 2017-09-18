"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const verbs = require("../data/verbs.json");
const nouns = require("../data/nouns.json");
const joins = require("../data/joins.json");
const actions = require("../data/actions.json");
class Ipsum {
    constructor(opts) {
        this.helpers = new helpers_1.default();
        this.verbs = verbs;
        this.nouns = nouns;
        this.joins = joins;
        this.actions = actions;
        let defaultOpts = { paragraphs: 3, sentenceMin: 3, sentenceMax: 6 };
        this.opts = Object.assign({}, defaultOpts, opts);
    }
    generateSentence() {
        let verb = this.helpers.titleCase(this.helpers.randomFromArray(this.verbs)), noun = this.helpers.randomFromArray(this.nouns), join = this.helpers.randomFromArray(this.joins), action = this.helpers.randomFromArray(this.actions);
        return `${verb} ${noun} ${join} ${action}`;
    }
    generateParagraph() {
        let sentences = this.helpers.randomIntInRange(this.opts.sentenceMin, this.opts.sentenceMax);
        return this.helpers.range(sentences).map(i => this.generateSentence()).join('. ');
    }
    generate() {
        return this.helpers.range(this.opts.paragraphs).map(i => this.generateParagraph()).join('.\n\n');
    }
}
exports.default = Ipsum;
