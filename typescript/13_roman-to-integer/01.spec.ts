import {expect} from "chai";
import {romanToInt} from "./01";
import {romanToInt2} from "./02";

describe('Roman to Integer', () => {
    const cases: {
        s: string,
        result: number
    }[] = [
        {s: "II", result: 2},
        {s: "III", result: 3},
        {s: "IV", result: 4},
        {s: "V", result: 5},
        {s: "LVIII", result: 58},
        {s: "MCMXCIV", result: 1994},
    ]

    describe(`romanToInt`, () => {
        cases.forEach(({s, result}) => {
            describe(`When called with ${s}`, () => {
                it(`should return ${result}`, () => {
                    expect(romanToInt(s)).equals(result)
                })
            })
        })
    })

    describe(`romanToInt2`, () => {
        cases.forEach(({s, result}) => {
            describe(`When called with ${s}`, () => {
                it(`should return ${result}`, () => {
                    expect(romanToInt2(s)).equals(result)
                })
            })
        })
    })
})
