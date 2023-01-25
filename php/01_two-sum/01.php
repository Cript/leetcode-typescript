<?php

//class Solution {
//    /**
//     * @param Integer[] $nums
//     * @param Integer $target
//     * @return Integer[]
//     */
//    function twoSum($nums, $target) {
//        for ($i = 0; $i < count($nums); $i++) {
//            for($k = $i + 1; $k < count($nums); $k++) {
//                if ($nums[$i] + $nums[$k] === $target) {
//                    return [$i, $k];
//                }
//            }
//        }
//    }
//}

/* The isBadVersion API is defined in the parent class VersionControl.
      public function isBadVersion($version){} */

class Solution extends VersionControl {
    /**
     * @param Integer $n
     * @return Integer
     */


    function firstBadVersion($n) {
        $left = 0;
        $right = $n - 1;
        $result = 0;

        while ($left <= $right) {
            $middle = floor(($right - $left) / 2) + $left;

            var_dump($middle);

            if($this->firstBadVersion($middle)) {
                $result = $middle;
                $right = $middle - 1;
            } else {
                $left = $middle + 1;
            }
        }

        return $result;
    }
}

class Solution {
    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum(array $nums, $target) {
        $map = [];

        foreach ($nums as $key => $num) {
            $compliment = $target - $num;

            if (array_key_exists($num, $map)) {
                return [$map[$num], $key];
            }

            $map[$compliment] = $key;
        }
    }
}

$solution = new Solution();
var_dump($solution->twoSum([2,7,11,15], 18));
