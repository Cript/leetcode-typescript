export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const num1Length = nums1.length
    const num2Length = nums2.length
    let i = 0
    let j = 0
    let merged: number[] = []

    while (i < num1Length && j < num2Length) {
        const num1 = nums1[i]
        const num2 = nums2[j]

        if (num1 <= num2) {
            merged.push(nums1[i])
            i++
        } else {
            merged.push(nums2[j])
            j++
        }
    }

    if (i === num1Length) {
        while (j < nums2.length) {
            merged.push(nums2[j])
            j++
        }
    }

    if (j === num2Length) {
        while (i < nums1.length) {
            merged.push(nums1[i])
            i++
        }
    }

    const mergedLength = num1Length + num2Length
    if (mergedLength % 2 === 1) {
        return merged[((mergedLength + 1) / 2) - 1];
    }

    return (merged[(mergedLength / 2) - 1] + merged[(mergedLength / 2)]) / 2
}