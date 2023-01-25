export function moveZeroes(nums: number[]): void {
    const zeroes = new Set<number>()

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            zeroes.add(i)
        }
    }

    let j = 0
    zeroes.forEach((value, value2) => {
        nums.splice(value - j, 1)
        j++
    })

    Array.prototype.push.apply(nums, Array(zeroes.size).fill(0))
}

export function moveZeroes2(nums: number[]): void {
    let i = 0
    let j = 1
    while(j < nums.length) {
        if (nums[i] != 0) {
            i++
            j++
            continue
        }

        if (nums[j] == 0) {
            j++
            continue
        }

        if (nums[i] == 0) {
            nums[i] = nums[j]
            nums[j] = 0
        }

        i++
        j++
    }
}

export function moveZeroes3(nums: number[]): void {
    let writePointer = 0;
    for (let readPointer = 0; readPointer < nums.length; readPointer ++) {
        const val = nums[readPointer];
        nums[readPointer] = 0;
        if (val!==0) {
            nums[writePointer] = val;
            writePointer ++;
        }
    }
}
