"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ipsum {
    constructor(opts) {
        this.verb = ['leveraging', 'engaging', 'building', 'targeting'];
        this.noun = ['key demographics', 'growth channels', 'social', 'big data'];
        this.join = ['in order to', 'so that we', 'with the aim to', 'while remembering to'];
        this.action = ['build ROI', 're-target key demographics', 'funnel users', 'blow minds'];
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
        return `${this.titleCase(this.random(this.verb))} ${this.random(this.noun)} ${this.random(this.join)} ${this.random(this.action)}`;
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
