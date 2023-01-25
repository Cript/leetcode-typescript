import {expect} from "chai";
import {longestPalindrome} from "./01";

describe('Longest Palindromic Substring', () => {
    const cases: {
        input: string,
        result: string
    }[] = [
        {input: 'babad', result: 'bab'},
        {input: 'cbbd', result: 'bb'},
    ]

    cases.forEach(({input, result}) => {
        describe(`When called with ${input}`, () => {
            it(`should return ${result}`, function() {
                expect(longestPalindrome(input)).equals(result)
            })
        })
    })
})
