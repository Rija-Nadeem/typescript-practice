"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const matches = new MatchReader_1.MatchReader('football.csv');
matches.read();
console.log('testing', matches.data.length);
