import {TreeNode} from "../common/tree";

export function inorderTraversalIter(root: TreeNode | null): number[] {
    let nodes: number[] = []
    let stack: TreeNode[] = []
    let current: TreeNode | null = root

    while (current !== null || stack.length !== 0) {
        while (current !== null) {
            stack.push(current)
            current = current.left
        }

        current = stack.pop() as TreeNode
        nodes.push(current.val)
        current = current.right
    }

    return nodes;
}