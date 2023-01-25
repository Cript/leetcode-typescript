interface RomanNumerals {
    value: number,
    symbol: string
}

export function romanToInt(s: string): number {
    const numerals: RomanNumerals[] = [
        {value: 1000, symbol: "M"},
        {value: 900, symbol: "CM"},
        {value: 500, symbol: "D"},
        {value: 400, symbol: "CD"},
        {value: 100, symbol: "C"},
        {value: 90, symbol: "XC"},
        {value: 50, symbol: "L"},
        {value: 40, symbol: "XL"},
        {value: 10, symbol: "X"},
        {value: 9, symbol: "IX"},
        {value: 5, symbol: "V"},
        {value: 4, symbol: "IV"},
        {value: 1, symbol: "I"},
    ]

    const isSubtractive = (symbol: string) => {
        return ['I', 'X', 'C'].includes(symbol)
    }

    const romanNumeralsExists = (symbol: string, nextSymbol: string) => {
        const implodeSymbols = symbol + nextSymbol

        for (const numeral of numerals) {
            if (numeral.symbol === implodeSymbols) {
                return true
            }
        }

        return false
    }

    const valueOfRoman = (symbol: string): number => {
        const numeral = numerals.find(numeral => numeral.symbol === symbol) as RomanNumerals
        return numeral.value
    }

    const symbols: string[] = []

    for (let i = 0; i <= s.length - 1; i++) {
        const symbol = s[i]
        const nextSymbol = s[i+1]

        const notAtEnd = i + 1 < s.length

        if (notAtEnd && isSubtractive(symbol) && romanNumeralsExists(symbol, s[i+1])) {
            symbols.push(symbol + nextSymbol)
            i++
        } else {
            symbols.push(symbol)
        }
    }

    let total = 0

    for (const symbol of symbols) {
        total += valueOfRoman(symbol)
    }

    return total
}