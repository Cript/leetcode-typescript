import {expect} from "chai";
import {longestPalindrome} from "./01";
import {longestPalindrome2} from "./02";
import {longestPalindrome3} from "./03";

describe('Longest Palindrome', () => {
    const cases: {
        s: string,
        expected: number
    }[] = [
        {s: 'abccccdd', expected: 7},
        {s: 'a', expected: 1},
        {s: 'ccc', expected: 3},
        {s: 'aaabaaaa', expected: 7},
    ]

    describe('longestPalindrome', function() {
        cases.forEach(({s, expected}) => {
            describe(`When called with ${s}`, function() {
                it(`should return ${expected}`, function () {
                    expect(longestPalindrome(s)).equals(expected)
                })
            })
        })
    })

    describe('longestPalindrome2', function() {
        cases.forEach(({s, expected}) => {
            describe(`When called with ${s}`, function() {
                it(`should return ${expected}`, function () {
                    expect(longestPalindrome2(s)).equals(expected)
                })
            })
        })
    })

    describe('longestPalindrome3', function() {
        cases.forEach(({s, expected}) => {
            describe(`When called with ${s}`, function() {
                it(`should return ${expected}`, function () {
                    expect(longestPalindrome3(s)).equals(expected)
                })
            })
        })
    })
})
