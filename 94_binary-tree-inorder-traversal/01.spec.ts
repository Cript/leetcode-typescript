import {expect} from "chai";
import {inorderTraversal, inorderTraversalIter, TreeNode} from "./01";

describe('Binary Tree Inorder Traversal', () => {
    describe(`inorderTraversal`, () => {
        describe(`When called with node1`, () => {
            it(`should return [1,3,2]`, () => {
                const result = inorderTraversal(node1)
                expect(result).eqls([1,3,2])
            })
        })
    })
    describe(`inorderTraversalIter`, () => {
        describe(`When called with node1`, () => {
            it(`should return [1,3,2]`, () => {
                const result = inorderTraversalIter(node1)
                expect(result).eqls([1,3,2])
            })
        })
    })
})

const node3 = new TreeNode(3, null, null)
const node2 = new TreeNode(2, node3, null)
const node1 = new TreeNode(1, null, node2)

