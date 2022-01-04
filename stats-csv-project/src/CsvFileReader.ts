import fs from "fs";
import { MatchResults } from "./MatchResults";
import {stringToDate} from './utils';

type MatchData = [Date, string, string, number, number, MatchResults, string];

export class CsvFileReader {
  data: MatchData[] = [];
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((match: string): string[] => match.split(","))
      .map((item: string[]): MatchData=>{
        return [
          stringToDate(item[0]),
          item[1],
          item[2],
          parseInt(item[3]),
          parseInt(item[4]),         
          item[5] as MatchResults,
          item[6]
        ];
      });
  }
}
