interface Opts {
    paragraphs?: number,
    sentenceMin?: number,
    sentenceMax?: number,
}

export default class Ipsum{

    private verb: Array<string>;
    private noun: Array<string>;
    private join: Array<string>;
    private action: Array<string>;
    private opts: Opts;

    constructor(opts: Opts){
        // Hard code this for now. Move to json later.
        this.verb = ['leveraging', 'engaging', 'building', 'targeting'];
        this.noun = ['key demographics', 'growth channels', 'social', 'big data'];
        this.join = ['in order to', 'so that we', 'with the aim to', 'while remembering to'];
        this.action = ['build ROI', 're-target key demographics', 'funnel users', 'blow minds'];

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
        return `${this.titleCase(this.random(this.verb))} ${this.random(this.noun)} ${this.random(this.join)} ${this.random(this.action)}`
    }

    private generateParagraph(): string{
        let sentences = Math.floor(Math.random() * (this.opts.sentenceMax - this.opts.sentenceMin + 1)) + this.opts.sentenceMin;
        return this.range(sentences).map(i => this.generateSentence()).join('. ');
    }

    public generate(): string{
        return this.range(this.opts.paragraphs).map(i => this.generateParagraph()).join('.\n\n');
    }
}
