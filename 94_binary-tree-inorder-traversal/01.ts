export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

export function inorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
        return []
    }

    let nodes: number[] = []

    nodes = nodes.concat(inorderTraversal(root.left))
    nodes.push(root.val)
    nodes = nodes.concat(inorderTraversal(root.right))

    return nodes
}

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