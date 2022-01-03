import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter{
  constructor(public data: string){
    super();
  }
  get length(){return this.data.length};
  compare(left: number, right: number): boolean {
      return this.data[left].toLowerCase() > this.data[right].toLowerCase();
  }
  swap(left: number, right: number): void {
      let strArr= this.data.split('');
      const temp = strArr[left];
      strArr[left] = strArr[right];
      strArr[right] = temp;
      this.data = strArr.join('');
  }
}