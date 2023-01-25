export function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let k = i + 1; k < nums.length; k++) {
            if (nums[i] + nums[k] === target) {
                return [i, k]
            }
        }
    }

    return []
}

export function twoSum2(nums: number[], target: number): number[] {
    const map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }

    for (let k = 0; k < nums.length; k++) {
        const compliment = target - nums[k];
        if (map.has(compliment) && map.get(compliment) != k) {
            return [k, map.get(compliment) as number]
        }
    }

    return []
}

export function twoSum3(nums: number[], target: number): number[] {
    const map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];

        if (map.has(compliment)) {
            return [map.get(compliment) as number, i]
        } else {
            map.set(nums[i], i)
        }
    }

    return []
}

export function twoSum4(nums: number[], target: number): number[] {
    const map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]) as number, i]
        }

        map.set(target - nums[i], i)
    }

    return []
}

export function twoSum5(nums: number[], target: number): number[] {
    const map: {[key: number]: number} = {}

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            return [map[nums[i]] as number, i]
        }

        map[target - nums[i]] = i
    }

    return []
}
