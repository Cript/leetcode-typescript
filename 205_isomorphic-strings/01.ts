type Mapping = {
    [index: string]: string
}

export function isIsomorphic(s: string, t: string): boolean {
    const mappingST: Mapping = {}
    const mappingTS: Mapping = {}

    for (let i = 0; i < s.length; i++) {
        const sSymbol = s[i]
        const tSymbol = t[i]

        if (!mappingST[sSymbol] && !mappingTS[tSymbol]) {
            mappingST[sSymbol] = tSymbol
            mappingTS[tSymbol] = sSymbol
            continue
        }

        if (mappingST[sSymbol] != tSymbol || mappingTS[tSymbol] != sSymbol) {
            return false
        }
    }

    return true
}