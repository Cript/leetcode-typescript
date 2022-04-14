export var solution = function(isBadVersion: any) {
    return function(n: number): number {
        if (n == 1) {
            return 1
        }

        let left = 1
        let right = n
        let firstBadVersion = 0

        while (left <= right) {
            const middle = Math.floor((right - left) / 2) + left

            if(isBadVersion(middle)) {
                firstBadVersion = middle
                right = middle - 1
            } else {
                left = middle + 1
            }
        }

        return firstBadVersion
    };
};
