"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ipsum_1 = require("./ipsum");
const ipsum = new ipsum_1.default({ sentenceMin: 2, sentenceMax: 4, paragraphs: 3 });
console.log(ipsum.generate());
