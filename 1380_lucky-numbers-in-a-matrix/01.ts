export default function luckyNumbers (matrix: number[][]): number[] {
    const mapMin: Map<number, number> = new Map()
    const mapMax: Map<number, number> = new Map()

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i]

        for (let j = 0; j < row.length; j++) {
            const number = row[j]
            let min = mapMin.get(i)

            if (undefined === min) {
                mapMin.set(i, j)
            } else if (number < row[min]) {
                mapMin.set(i, j)
            }

            let maxIndex = mapMax.get(j)
            if (undefined === maxIndex) {
                mapMax.set(j, i)
            } else if (number > matrix[maxIndex][j]) {
                mapMax.set(j, i)
            }
        }
    }

    const lucky:number[] = []

    mapMin.forEach((elem, row) => {
        if (mapMax.get(elem) === row) {
            lucky.push(matrix[row][elem])
        }
    })

    return lucky
}
