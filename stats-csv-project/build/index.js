"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const matches = new CsvFileReader_1.CsvFileReader('football.csv');
matches.read();
console.log('matches', matches.data);
