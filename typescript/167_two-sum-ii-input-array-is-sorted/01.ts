export function twoSum(numbers: number[], target: number): number[] {
    let i = 0
    let j = numbers.length - 1

    while (i < j) {
        const sum = numbers[i] + numbers[j]

        if (sum === target) {
            return [i + 1, j + 1]
        }

        if (sum > target) {
            j--
        } else {
            if (j < numbers.length - 1) {
                j++
            }
            i++
        }
    }

    return [];
}

export function twoSum2(numbers: number[], target: number): number[] {
    let i = 0
    let j = numbers.length - 1

    while (i < j) {
        const sum = numbers[i] + numbers[j]

        if (sum === target) {
            return [i + 1, j + 1]
        }

        if (sum < target) {
            i++
        } else {
            j--
        }
    }

    return [];
}