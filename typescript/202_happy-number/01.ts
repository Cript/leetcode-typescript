const generated = new Set()

export function isHappy(n: number): boolean {
    generated.clear()
    return recursionIsHappy(n)
}

function recursionIsHappy(n: number): boolean {
    const numbers = n.toString().split('').map(n => parseInt(n))
    const number = numbers
        .map(n => Math.pow(n, 2))
        .reduce((previous, n) => previous + n, 0)

    if (number === 1) {
        return true
    }


    if (generated.has(number)) {
        return false
    }
    generated.add(number)

    return recursionIsHappy(number)
}