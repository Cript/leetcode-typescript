export function fibonacci(numbersToReturn: number): number {
    const numbers: number[] = [];

    for (let i = 1; i <= numbersToReturn; i++) {
        if (i === 1 || i === 2) {
            numbers.push(i);
            continue;
        }

        let lastNumber: number = numbers[numbers.length - 1];
        let theNumberBeforeTheLast: number = numbers[numbers.length - 2];
        numbers.push(lastNumber + theNumberBeforeTheLast);
    }

    return numbers[numbers.length - 1];
}

export function fibonacci2(number: number): number {
    if(number < 2) {
        return number;
    }
    else {
        return fibonacci(number-1) + fibonacci(number - 2);
    }
}