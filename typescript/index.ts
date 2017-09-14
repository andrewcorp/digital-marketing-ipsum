import Ipsum from './ipsum';

const ipsum = new Ipsum({sentenceMin: 5, sentenceMax: 10, paragraphs: 5});

console.log(ipsum.generate());
