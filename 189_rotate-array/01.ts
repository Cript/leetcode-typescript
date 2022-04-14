export function rotate(nums: number[], k: number): void {
    if (k > nums.length) {
        k = k % nums.length
    }

    const items = nums.splice(-k, k)
    nums.splice(0,0, ...items)
}

export function rotate2(nums: number[], k: number): void {
    for (let i = 0; i < k; i++) {
        const lastNum = nums[nums.length - 1]

        for (let j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j - 1]
        }

        nums[0] = lastNum
    }
}
