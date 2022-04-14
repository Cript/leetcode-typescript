export function sortedSquares(nums: number[]): number[] {
    return nums.map(num => num * num).sort((a, b) => a - b)
}

export function sortedSquares2(nums: number[]): number[] {
    let i = 0
    let j = nums.length - 1
    const squares =[]

    while (i <= j) {
        const iSquare = Math.pow(nums[i], 2)
        const jSquare = Math.pow(nums[j], 2)

        if (iSquare <= jSquare) {
            squares.unshift(jSquare)
            j--
        } else if (iSquare > jSquare) {
            squares.unshift(iSquare)
            i++
        }
    }

    return squares
}

export function sortedSquares3(nums: number[]): number[] {
    let i = 0
    let j = nums.length - 1
    let pointer = nums.length - 1
    const squares = new Array(nums.length)

    while (i <= j) {
        const iSquare = Math.pow(nums[i], 2)
        const jSquare = Math.pow(nums[j], 2)

        if (iSquare <= jSquare) {
            squares[pointer] = jSquare
            j--
        } else if (iSquare > jSquare) {
            squares[pointer] = iSquare
            i++
        }

        pointer--
    }

    return squares
}
