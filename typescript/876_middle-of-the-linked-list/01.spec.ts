import {expect} from "chai";
import {listToArray, newList} from "../common/linked-list";
import {middleNode} from "./01";
import {middleNode2} from "./02";

describe('Middle of the Linked List', () => {
    const cases: {
        head: number[],
        expected: number[]
    }[] = [
        {head: [1, 2, 3, 4, 5], expected: [3, 4, 5]},
        {head: [1, 2, 3, 4, 5, 6], expected: [4, 5, 6]},
    ]

    describe('middleNode', function() {
        cases.forEach(({head, expected}) => {
            describe(`When called with ${head}`, function() {
                it(`should return ${expected}`, function () {
                    const result = middleNode(newList(head))

                    expect(listToArray(result)).eqls(expected)
                })
            })
        })
    })

    describe('middleNode2', function() {
        cases.forEach(({head, expected}) => {
            describe(`When called with ${head}`, function() {
                it(`should return ${expected}`, function () {
                    const result = middleNode2(newList(head))

                    expect(listToArray(result)).eqls(expected)
                })
            })
        })
    })
})
