// Two sum from Leet Code

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for(let i = 0 ; i < nums.length ; i++) {
        for(let j = 0 ; j < nums.length ; j++) {
            if(nums[j] + nums[i] == target && i !== j ){
                return [i,j]
            }
        }
    }
};

// Test case
console.log(twoSum([2, 7, 11, 15], 9)); // output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // output: [1, 2]

/*
nums = [2, 7, 11, 15]
target = 9

Outer Loop (i = 0):
    - nums[i] = 2
    Inner Loop (j = 0):
        - nums[j] = 2
        - Check: 2 + 2 === 9 && 0 !== 0 => false
    Inner Loop (j = 1):
        - nums[j] = 7
        - Check: 2 + 7 === 9 && 0 !== 1 => true
        - Found a pair: return [0, 1]

Final result for the first test case: [0, 1]

----------------------------------

Test Case 2:
Initial state:
nums = [3, 2, 4]
target = 6

Outer Loop (i = 0):
    - nums[i] = 3
    Inner Loop (j = 0):
        - nums[j] = 3
        - Check: 3 + 3 === 6 && 0 !== 0 => false
    Inner Loop (j = 1):
        - nums[j] = 2
        - Check: 3 + 2 === 6 && 0 !== 1 => false
    Inner Loop (j = 2):
        - nums[j] = 4
        - Check: 3 + 4 === 6 && 0 !== 2 => false

Outer Loop (i = 1):
    - nums[i] = 2
    Inner Loop (j = 0):
        - nums[j] = 3
        - Check: 2 + 3 === 6 && 1 !== 0 => true
        - Found a pair: return [1, 0]

Final result for the second test case: [1, 0]
*/