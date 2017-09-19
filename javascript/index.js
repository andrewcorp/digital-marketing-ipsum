"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ipsum_1 = require("./ipsum");
var ipsum = new ipsum_1.default({ sentenceMin: 5, sentenceMax: 10, paragraphs: 5 });
console.log(ipsum.generate());
