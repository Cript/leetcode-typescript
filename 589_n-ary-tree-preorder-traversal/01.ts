export class NodeTree {
    val: number
    children: NodeTree[]

    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val)
        this.children = []
    }
}

export function preorder(root: NodeTree | null): number[] {
    if (null === root) {
        return []
    }

    let numbers: number[] = [root.val]

    for (const child of root.children) {
        numbers.push(...preorder(child))
    }

    return numbers
}