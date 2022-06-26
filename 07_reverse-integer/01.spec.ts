import {expect} from "chai";
import {reverse} from "./01";

describe('Reverse Integer', () => {
    const cases: {
        number: number,
        result: number
    }[] = [
        { number: 123, result: 321 },
        { number: -123, result: -321 },
        { number: 120, result: 21 },
        { number: 1534236469, result: 0 },
    ]

    cases.forEach(({number, result}) => {
        describe(`When called with ${number}`, function() {
            it(`should return ${result}`, function() {
                // expect(isPalindrome(number)).equals(result)

                expect(reverse(number)).equals(result)
            })
        })
    })
})
