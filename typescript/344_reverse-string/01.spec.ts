import {expect} from "chai";
import {reverseString, reverseString2} from "./01";

describe('Rotate Array', () => {
    const cases: {
        s: string[],
        result: string[]
    }[] = [
        { s: ["h","e","l","l","o"], result: ["o","l","l","e","h"] },
        { s: ["H","a","n","n","a","h"], result: ["h","a","n","n","a","H"] },
    ]

    describe(`Reverse String`, () => {
        cases.forEach(({s, result}) => {
            describe(`When called with ${s}`, () => {
                it(`should return ${result}`, () => {
                    const sCopy = [...s]
                    reverseString(sCopy)
                    expect(sCopy).eqls(result)
                })
            })
        })
    })

    describe(`Reverse String 2`, () => {
        cases.forEach(({s, result}) => {
            describe(`When called with ${s}`, () => {
                it(`should return ${result}`, () => {
                    const sCopy = [...s]
                    reverseString2(sCopy)
                    expect(sCopy).eqls(result)
                })
            })
        })
    })
})
