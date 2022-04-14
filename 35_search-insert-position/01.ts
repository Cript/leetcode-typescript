export function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i
        }

        if (nums[i] > target) {
            return i
        }
    }

    return nums.length
}

export function searchInsert2(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const center = Math.floor((right - left) / 2) + left

        if (target == nums[center]) {
            return center
        }

        if (target < nums[center]) {
            right = center - 1
        } else {
            left = center + 1
        }
    }

    return left
}
