export function maxArea(height: number[]): number {
    let i = 0
    let j = height.length - 1
    let maxArea = 0

    while (i < j) {
        const leftHeight = height[i]
        const rightHeight = height[j]

        const area = Math.min(leftHeight, rightHeight) * (j - i)
        maxArea = Math.max(area, maxArea)

        if (leftHeight < rightHeight) {
            i++
        } else {
            j--
        }


    }

    return maxArea
}
