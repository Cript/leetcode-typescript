import {isPalindrome, isPalindrome2} from "./01";
import {expect} from "chai";

describe('is_palindrome', () => {
    const cases: {
        number: number,
        result: boolean
    }[] = [
        { number: 121, result: true },
        { number: 123, result: false },
        { number: 232, result: true },
    ]

    cases.forEach(({number, result}) => {
        describe(`When called with ${number}`, function() {
            it(`should return ${result}`, function() {
                // expect(isPalindrome(number)).equals(result)

                expect(isPalindrome2(number)).equals(result)
            })
        })
    })
})
