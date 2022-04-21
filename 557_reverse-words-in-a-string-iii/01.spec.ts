import {expect} from "chai";
import {reverseWords, reverseWords2} from "./01";

describe('Rotate Array', () => {
    const cases: {
        s: string,
        result: string
    }[] = [
        { s: "Let's take LeetCode contest", result: "s'teL ekat edoCteeL tsetnoc" },
        { s: "God Ding", result: "doG gniD" },
    ]

    describe(`reverseWords`, () => {
        cases.forEach(({s, result}) => {
            describe(`When called with ${s}`, () => {
                it(`should return ${result}`, () => {
                    expect(reverseWords(s)).equals(result)
                })
            })
        })
    })

    describe(`reverseWords2`, () => {
        cases.forEach(({s, result}) => {
            describe(`When called with ${s}`, () => {
                it(`should return ${result}`, () => {
                    expect(reverseWords2(s)).equals(result)
                })
            })
        })
    })
})
