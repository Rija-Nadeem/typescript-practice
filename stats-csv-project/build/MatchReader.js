"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    formatRow(item) {
        return [
            (0, utils_1.stringToDate)(item[0]),
            item[1],
            item[2],
            parseInt(item[3]),
            parseInt(item[4]),
            item[5],
            item[6]
        ];
    }
}
exports.MatchReader = MatchReader;
