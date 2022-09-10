import {expect} from "chai";
import {isIsomorphic} from "./01";
import {isIsomorphic2} from "./02";

describe('Find Pivot Index', () => {
    const cases: {
        s: string,
        t: string,
        result: boolean
    }[] = [
        {s: "egg", t: "add", result: true},
        {s: "foo", t: "bar", result: false},
        {s: "paper", t: "title", result: true},
        {s: "badc", t: "baba", result: false},
        {s: "ab", t: "aa", result: false}
    ]

    describe(`Isomorphic Strings`, function() {
        cases.forEach(({s, t, result}) => {
            describe(`When called with ${s} and ${t}`, function() {
                it(`should return ${result}`, function () {
                    expect(isIsomorphic(s, t)).equals(result)
                })
            })
        })
    })

    describe(`Isomorphic Strings 2`, function() {
        cases.forEach(({s, t, result}) => {
            describe(`When called with ${s} and ${t}`, function() {
                it(`should return ${result}`, function () {
                    expect(isIsomorphic2(s, t)).equals(result)
                })
            })
        })
    })
})
