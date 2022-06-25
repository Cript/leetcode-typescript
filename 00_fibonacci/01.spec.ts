import {fibonacci, fibonacci2} from "./01";
import {expect} from "chai";

describe('Fibonacci', () => {
    const cases: {
        num: number,
        result: number
    }[] = [
        { num: 7, result: 21},
        { num: 8, result: 34},
    ]

    describe(`Fibonacci`, function() {
        cases.forEach(({num, result}) => {
            describe(`When called with ${num}`, function() {
                it(`should return ${result}`, function () {
                    expect(fibonacci(num)).equals(result)
                })
            })
        })
    })

    describe(`Fibonacci2`, function() {
        cases.forEach(({num, result}) => {
            describe(`When called with ${num}`, function() {
                it(`should return ${result}`, function() {
                    expect(fibonacci2(num)).equals(result)
                })
            })
        })
    })
})
