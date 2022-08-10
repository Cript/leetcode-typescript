interface RomanNumerals {
    value: number,
    symbol: string
}

export function romanToInt2(s: string): number {
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

    const romanNumeralsValue = (symbol: string, nextSymbol: string): {
        exist: boolean,
        value: number
    } => {
        const implodeSymbols = symbol + nextSymbol
        let symbolValue: number = 0
        let implodeSymbolsValue: number | null = null

        for (const numeral of numerals) {
            if (numeral.symbol === symbol) {
                symbolValue = numeral.value
            }

            if (numeral.symbol === implodeSymbols) {
                implodeSymbolsValue = numeral.value
            }
        }

        return {
            exist: implodeSymbolsValue !== null,
            value: implodeSymbolsValue ?? symbolValue
        }

    }

    let total = 0

    for (let i = 0; i < s.length; i++) {
        const symbol = s[i]
        const nextSymbol = s[i + 1]

        const value = romanNumeralsValue(symbol, nextSymbol)

        if (value.exist) {
            i++
        }

        total += value.value
    }

    return total
}