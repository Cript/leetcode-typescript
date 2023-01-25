import {isPowerOfThree} from "./01";
import {isPowerOfThreeLog} from "./02";
import {expect} from "chai";
import {isPowerOfThreeString} from "./03";
import {isPowerOfThreePrime} from "./04";

describe('Power of Three', () => {
    const cases: {
        n: number,
        result: boolean
    }[] = [
        { n: 0, result: false},
        { n: 27, result: true},
        { n: 45, result: false},
    ]

    describe(`recursion`, function() {
        cases.forEach(({n, result}) => {
            describe(`When called with ${n}`, function() {
                it(`should return ${result}`, function () {
                    expect(isPowerOfThree(n)).equals(result)
                })
            })
        })
    })

    describe(`log`, function() {
        cases.forEach(({n, result}) => {
            describe(`When called with ${n}`, function() {
                it(`should return ${result}`, function () {
                    expect(isPowerOfThreeLog(n)).equals(result)
                })
            })
        })
    })

    describe(`string`, function() {
        cases.forEach(({n, result}) => {
            describe(`When called with ${n}`, function() {
                it(`should return ${result}`, function () {
                    expect(isPowerOfThreeString(n)).equals(result)
                })
            })
        })
    })

    describe(`prime`, function() {
        cases.forEach(({n, result}) => {
            describe(`When called with ${n}`, function() {
                it(`should return ${result}`, function () {
                    expect(isPowerOfThreePrime(n)).equals(result)
                })
            })
        })
    })
})
