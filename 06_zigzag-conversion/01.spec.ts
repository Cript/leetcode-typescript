import {expect} from "chai";
import {convert} from "./01";

describe('Zigzag Conversion', () => {
    const cases: {
        s: string,
        numRows: number,
        result: string
    }[] = [
        {s: 'PAYPALISHIRING', numRows: 3, result: "PAHNAPLSIIGYIR"},
        {s: 'PAYPALISHIRING', numRows: 4, result: "PINALSIGYAHRPI"},
        {s: 'A', numRows: 1, result: "A"},
    ]

    cases.forEach(({s, numRows, result}) => {
        describe(`When called with ${s} and ${numRows}`, () => {
            it(`should return ${result}`, function() {
                expect(convert(s, numRows)).equals(result)
            })
        })
    })
})
