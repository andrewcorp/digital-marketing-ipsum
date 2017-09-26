/// <reference path="./typings.d.ts" />

import helpers from './helpers';

import * as verbData from '../data/verbs.json';
import * as nounData from '../data/nouns.json';
import * as joinData from '../data/joins.json';
import * as actionData from '../data/actions.json';

interface Opts {
    paragraphs?: number,
    sentenceMin?: number,
    sentenceMax?: number,
}

const verbs = verbData as any;
const nouns = nounData as any;
const joins = joinData as any;
const actions = actionData as any;

const generateSentence = (): string => {
    let verb = helpers.titleCase(helpers.randomFromArray(verbs)),
        noun = helpers.randomFromArray(nouns),
        join = helpers.randomFromArray(joins),
        action = helpers.randomFromArray(actions);

    return `${verb} ${noun} ${join} ${action}`;
}

const generateParagraph = (opts: Opts): string => {
    let sentences = helpers.randomIntInRange(opts.sentenceMin, opts.sentenceMax);
    return helpers.range(sentences).map(i => generateSentence()).join('. ');
}

export const generateIpsum = (opts: Opts): string => {
    let defaultOpts = {paragraphs: 3, sentenceMin: 3, sentenceMax: 6};

    // Merge defaults and opts
    let mergedOpts = {...defaultOpts, ...opts};
    return helpers.range(mergedOpts.paragraphs).map(i => generateParagraph(mergedOpts)).join('.\n\n');
}
