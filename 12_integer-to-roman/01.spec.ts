import {expect} from "chai";
import {intToRoman} from "./01";

describe('max_area', () => {
    const cases: {
        num: number,
        result: string
    }[] = [
        {num: 2, result: "II"},
        {num: 3, result: "III"},
        {num: 4, result: "IV"},
        {num: 5, result: "V"},
        {num: 6, result: "VI"},
        {num: 7, result: "VII"},
        {num: 8, result: "VIII"},
        {num: 9, result: "IX"},
        {num: 10, result: "X"},
        {num: 14, result: "XIV"},
        {num: 18, result: "XVIII"},
        {num: 20, result: "XX"},
        {num: 39, result: "XXXIX"},
        {num: 40, result: "XL"},
        {num: 47, result: "XLVII"},
        {num: 49, result: "XLIX"},
        {num: 50, result: "L"},
        {num: 90, result: "XC"},
        {num: 100, result: "C"},
        {num: 500, result: "D"},
        {num: 900, result: "CM"},
    ]

    cases.forEach(({num, result}) => {
        describe(`When called with ${num}`, () => {
            it(`should return ${result}`, () => {
                expect(intToRoman(num)).equals(result)
            })
        })
    })
})
