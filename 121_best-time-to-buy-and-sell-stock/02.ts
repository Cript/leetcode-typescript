export function maxProfit2(prices: number[]): number {
    let minPrice = Number.MAX_SAFE_INTEGER
    let maxProfit = 0

    for (let day = 0; day < prices.length; day++) {
        const price = prices[day]
        if (price < minPrice) {
            minPrice = price
        }
        const profit = price - minPrice
        if (profit > maxProfit) {
            maxProfit = profit
        }
    }

    return maxProfit
}