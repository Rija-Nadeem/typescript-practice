"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = void 0;
const stringToDate = (date) => {
    const dateParts = date.split('/').map((str) => parseInt(str));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.stringToDate = stringToDate;
