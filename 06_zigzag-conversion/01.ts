export function convert(s: string, numRows: number): string {
    const result: string[][] = []
    let goingDown = false
    let currentRow = 0

    for (let i  = 0; i < s.length; i++) {
        if (result[currentRow] === undefined) {
            result[currentRow] = []
        }

        result[currentRow].push(s[i])

        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown
        }

        currentRow += goingDown ? 1 : -1
    }

    return result.map(a => a.join("")).join("")
}