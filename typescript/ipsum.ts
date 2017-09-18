/// <reference path="./typings.d.ts" />

import Helpers from './helpers';

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

    private helpers: Helpers;
    private verbs: any;
    private nouns: any;
    private joins: any;
    private actions: any;
    private opts: Opts;

    constructor(opts: Opts){
        this.helpers = new Helpers();

        this.verbs = verbs;
        this.nouns = nouns;
        this.joins = joins;
        this.actions = actions;

        let defaultOpts = {paragraphs: 3, sentenceMin: 3, sentenceMax: 6};

        // Merge defaults and opts
        this.opts = {...defaultOpts, ...opts};
    }

    private generateSentence(): string{
        let verb = this.helpers.titleCase(this.helpers.randomFromArray(this.verbs)),
            noun = this.helpers.randomFromArray(this.nouns),
            join = this.helpers.randomFromArray(this.joins),
            action = this.helpers.randomFromArray(this.actions);

        return `${verb} ${noun} ${join} ${action}`;
    }

    private generateParagraph(): string{
        let sentences = this.helpers.randomIntInRange(this.opts.sentenceMin, this.opts.sentenceMax);
        return this.helpers.range(sentences).map(i => this.generateSentence()).join('. ');
    }

    public generate(): string{
        return this.helpers.range(this.opts.paragraphs).map(i => this.generateParagraph()).join('.\n\n');
    }
}
