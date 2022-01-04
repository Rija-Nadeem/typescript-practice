import {CsvFileReader} from './CsvFileReader';

const matches = new CsvFileReader('football.csv')
matches.read();

console.log('matches', matches.data);