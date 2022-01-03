"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() { return this.data.length; }
    ;
    compare(left, right) {
        return this.data[left].toLowerCase() > this.data[right].toLowerCase();
    }
    swap(left, right) {
        let strArr = this.data.split('');
        const temp = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = temp;
        this.data = strArr.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
