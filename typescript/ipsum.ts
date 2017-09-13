interface Options {
  paragraphs: number,
  sentenceMin: number,
  sentenceMax: number,
}

export default class Ipsum{

  verbs: Array<string>;
  nouns: Array<string>;
  joiningWords: Array<string>;
  actions: Array<string>;
  options: Options;

  constructor(){
      // Hard code this for now. Move to json later.
      this.verbs = ['leveraging', 'engaging', 'building', 'targeting'];
      this.nouns = ['key demographics', 'growth channels', 'social', 'big data'];
      this.joiningWords = ['in order to', 'so that we', 'with the aim to', 'while remembering to'];
      this.actions = ['build ROI', 're-target key demographics', 'funnel users', 'blow minds'];

      // Default options
      this.options = {
          paragraphs: 3,
          sentenceMin: 3,
          sentenceMax: 3,
      }
  }

  pickRandom(arr: Array<string>): string{
    return arr[Math.floor(Math.random() * arr.length)];
  }

  generate(options?: Options): string{
      return `Lorem ipsum ${this.pickRandom(this.verbs)}`;
  }
}
