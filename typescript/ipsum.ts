/// <reference path="./typings.d.ts" />

import * as verbs from '../data/verbs.json';
import * as nouns from '../data/nouns.json';
import * as joins from '../data/joins.json';
import * as actions from '../data/actions.json';

interface Opts {
    paragraphs?: number,
    sentenceMin?: number,
    sentenceMax?: number,
}

export default class Ipsum{

    private verbs: any;
    private nouns: any;
    private joins: any;
    private actions: any;
    private opts: Opts;

    constructor(opts: Opts){
        this.verbs = verbs;
        this.nouns = nouns;
        this.joins = joins;
        this.actions = actions;

        let defaultOpts = {paragraphs: 3, sentenceMin: 3, sentenceMax: 6};

        // Merge defaults and opts
        this.opts = {...defaultOpts, ...opts};
    }

    private titleCase(str: string): string{
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }

    private random(arr: Array<string>): string{
        return arr[Math.floor(Math.random() * arr.length)];
    }

    private range(n: number): Array<number>{
        return [...Array(n).keys()]
    }

    private generateSentence(): string{
        return `${this.titleCase(this.random(this.verbs))} ${this.random(this.nouns)} ${this.random(this.joins)} ${this.random(this.actions)}`
    }

    private generateParagraph(): string{
        let sentences = Math.floor(Math.random() * (this.opts.sentenceMax - this.opts.sentenceMin + 1)) + this.opts.sentenceMin;
        return this.range(sentences).map(i => this.generateSentence()).join('. ');
    }

    public generate(): string{
        return this.range(this.opts.paragraphs).map(i => this.generateParagraph()).join('.\n\n');
    }
}
