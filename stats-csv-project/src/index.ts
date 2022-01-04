import { MatchReader } from "./MatchReader";

const matches = new MatchReader('football.csv');
matches.read();
console.log('testing', matches.data.length)