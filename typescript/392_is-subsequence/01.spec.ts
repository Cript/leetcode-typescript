import {expect} from "chai";
import {isSubsequence} from "./01";

describe('Is Subsequence', () => {
    const cases: {
        s: string,
        t: string,
        result: boolean
    }[] = [
        {s: "", t: "ahbgdc", result: true},
        {s: "a", t: "", result: false},
        {s: "", t: "", result: true},
        {s: "abc", t: "ahbgdc", result: true},
        {s: "axc", t: "ahbgdc", result: false},
    ]

    describe('Is Subsequence', function() {
        cases.forEach(({s, t, result}) => {
            describe(`When called with ${s} and ${t}`, function() {
                it(`should return ${result}`, function () {
                    expect(isSubsequence(s, t)).equals(result)
                })
            })
        })
    })
})
