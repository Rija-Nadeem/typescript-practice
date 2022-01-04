import { CsvFileReader } from "./CsvFileReader";
import { MatchResults } from "./MatchResults";
import {stringToDate} from './utils';

type MatchData = [Date, string, string, number, number, MatchResults, string];

export class MatchReader extends CsvFileReader<MatchData> {
  formatRow(item: string[]): MatchData{
      return [
        stringToDate(item[0]),
        item[1],
        item[2],
        parseInt(item[3]),
        parseInt(item[4]),         
        item[5] as MatchResults,
        item[6]
      ];
  }
}