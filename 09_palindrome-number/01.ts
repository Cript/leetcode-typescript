export function isPalindrome(x: number): boolean {
    return x == parseInt(x.toString().split('').reverse().join(''))
}

export function isPalindrome2(x: number): boolean {
    let n = x
    let rev = 0

    while (n > 0) {
        const dig = Math.floor(n % 10)
        rev = rev * 10 + dig
        n = Math.floor(n / 10)
    }

    return x == rev
}
