import {lengthOfLongestSubstring} from "./01";
import {expect} from "chai";

describe('Longest Substring Without Repeating Characters', () => {
    const cases: {
        s: string,
        result: number
    }[] = [
        {s: ' ', result: 1},
        {s: 'aab', result: 2},
        {s: 'dvdf', result: 3},
        {s: 'abba', result: 2},
        {s: 'abcabcbb', result: 3},
        {s: 'bbbbb', result: 1},
        {s: 'pwwkew', result: 3},
        {s: 'nfpdmpi', result: 5},
        {s: '"aabaab!bb"', result: 3},
    ]

    cases.forEach(({s, result}) => {
        describe(`When called with ${s}`, function() {
            it(`should return ${result}`, function() {
                expect(lengthOfLongestSubstring(s)).equals(result)
            })
        })
    })
})
