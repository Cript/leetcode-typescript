function transform(s: string): string {
    const symbols: {
        [index: string]: number
    } = {}

    const sT: number[] = []

    for (let i = 0; i < s.length; i++) {
        const symbol = s[i]

        if (symbols[symbol] === undefined) {
            symbols[symbol] = i
        }

        sT.push(symbols[symbol])
    }

    return sT.join(',')
}

export function isIsomorphic2(s: string, t: string): boolean {
    const sT = transform(s)
    const tT = transform(t)

    return sT === tT;
}