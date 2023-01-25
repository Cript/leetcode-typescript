import {expect} from "chai";
import {isPowerOfFour} from "./01";
import {isPowerOfFour2} from "./02";

describe('Power of Three', () => {
    const cases: {
        n: number,
        result: boolean
    }[] = [
        { n: 1, result: true},
        { n: 5, result: false},
        { n: 8, result: false},
        { n: 16, result: true},
    ]

    describe(`bitwise`, function() {
        cases.forEach(({n, result}) => {
            describe(`When called with ${n}`, function() {
                it(`should return ${result}`, function () {
                    expect(isPowerOfFour(n)).equals(result)
                })
            })
        })
    })

    describe(`bitwise2`, function() {
        cases.forEach(({n, result}) => {
            describe(`When called with ${n}`, function() {
                it(`should return ${result}`, function () {
                    expect(isPowerOfFour2(n)).equals(result)
                })
            })
        })
    })
})
