import {expect} from "chai";
import {TreeNode} from "../common/tree";
import {levelOrder} from "./01";

//======================================================
const left2_1 = new TreeNode(20)
const right2_1 = new TreeNode(30)
const left1 = new TreeNode(9, left2_1, right2_1)

const left2_2 = new TreeNode(15)
const right2_2 = new TreeNode(7)
const right1 = new TreeNode(20, left2_2, right2_2)

const root = new TreeNode(3, left1, right1)
//======================================================

describe('Binary Tree Level Order Traversal', () => {
    const cases: {
        root: TreeNode,
        expected: number[][]
    }[] = [
        {root, expected: [[3], [9, 20], [20, 30, 15, 7]]},
    ]

    describe('longestPalindrome', function () {
        cases.forEach(({root, expected}) => {
            describe(`When called with ${root}`, function () {
                it(`should return ${expected}`, function () {
                    expect(levelOrder(root)).eqls(expected)
                })
            })
        })
    })
})
