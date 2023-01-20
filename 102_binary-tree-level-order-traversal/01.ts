import {TreeNode} from "../common/tree";

export function levelOrder(root: TreeNode | null): number[][] {
    if (null === root) {
        return []
    }

    const queue: TreeNode[] = [root]
    const nodes: number[][] = []

    while (queue.length !== 0) {
        const size = queue.length
        const temp: number[] = []

        for(let i = 0; i < size; i++) {
            let currentNode = queue.shift() as TreeNode;

            temp.push(currentNode.val);

            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }

        nodes.push(temp)
    }

    return nodes
}