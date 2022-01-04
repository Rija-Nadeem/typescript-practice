import fs from "fs";

export abstract class CsvFileReader<T> {
  data: T[] = [];
  abstract formatRow(arr: string[]): T;
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((match: string): string[] => match.split(","))
      .map(this.formatRow);
  }
}
