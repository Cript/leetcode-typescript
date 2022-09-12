import {addTwoNumbers} from "./01";
import {expect} from "chai";
import {listToArray, newList} from "../common/linked-list";

describe('add_two_numbers', () => {
    const cases: {
        l1: number[],
        l2: number[],
        expected: number[]
    }[] = [
        {l1: [0], l2: [0], expected: [0]},
        {l1: [3], l2: [4], expected: [7]},
        {l1: [3, 4], l2: [3, 3], expected: [6, 7]},
        {l1: [2, 4, 3], l2: [5, 6, 4], expected: [7, 0, 8]},
        {l1: [3, 4, 2], l2: [4, 6, 5], expected: [7, 0, 8]},
        {l1: [9, 9, 9], l2: [2], expected: [1, 0, 0, 1]},
        {l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9], expected: [8, 9, 9, 9, 0, 0, 0, 1]},
    ]

    cases.forEach(({l1, l2, expected}) => {
        describe(`When called with ${l1} and ${l2}`, function () {
            it(`addTwoNumbers: should return ${expected}`, function () {
                const result = addTwoNumbers(
                    newList(l1),
                    newList(l2)
                )

                expect(result).eqls(newList(expected))
            })
        })
    })

    describe('new_list', () => {
        const cases: {
            number: number[],
            expected: number[]
        }[] = [
            {number: [0], expected: [0]},
            {number: [3, 4, 2], expected: [3, 4, 2]},
            {number: [4, 6, 5], expected: [4, 6, 5]},
            {number: [9, 9, 9], expected: [9, 9, 9]},
            {number: [1, 0, 0, 0], expected: [1, 0, 0, 0]},
        ]

        cases.forEach(({number, expected}) => {
            describe(`When called with ${number}`, function () {
                it(`newList: should return correct ListNode`, function () {
                    expect(listToArray(newList(number))).eqls(expected)
                })
            })
        })
    })
})
