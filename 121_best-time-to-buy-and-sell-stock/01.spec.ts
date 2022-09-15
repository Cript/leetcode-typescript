import {expect} from "chai";
import {maxProfit} from "./01";
import {maxProfit2} from "./02";

describe('Best Time to Buy and Sell Stock', () => {
    const cases: {
        prices: number[],
        expected: number
    }[] = [
        {prices: [7, 1, 5, 3, 6, 4], expected: 5},
        {prices: [7, 6, 4, 3, 1], expected: 0},
        {prices: [2, 4, 1], expected: 2},
    ]

    describe('maxProfit', function() {
        cases.forEach(({prices, expected}) => {
            describe(`When called with ${prices}`, function() {
                it(`should return ${expected}`, function () {
                    const result = maxProfit(prices)
                    expect(result).equals(expected)
                })
            })
        })
    })

    describe('maxProfit2', function() {
        cases.forEach(({prices, expected}) => {
            describe(`When called with ${prices}`, function() {
                it(`should return ${expected}`, function () {
                    const result = maxProfit2(prices)
                    expect(result).equals(expected)
                })
            })
        })
    })
})
