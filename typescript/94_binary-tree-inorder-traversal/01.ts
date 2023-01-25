import {TreeNode} from "../common/tree";

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