import {expect} from "chai";
import {isPowerOfTwo} from "./01";

describe('Power of Two', () => {
    const cases: {
        n: number,
        result: boolean
    }[] = [
        { n: 1, result: true},
        { n: 3, result: false},
        { n: 16, result: true}
    ]

    describe(`bitwise`, function() {
        cases.forEach(({n, result}) => {
            describe(`When called with ${n}`, function() {
                it(`should return ${result}`, function () {
                    expect(isPowerOfTwo(n)).equals(result)
                })
            })
        })
    })
})
