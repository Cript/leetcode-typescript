export function runningSum(nums: number[]): number[] {
    let lastNumber = 0
    return nums.map((num, index, nums) => {
        lastNumber = num + lastNumber
        return lastNumber
    })
}