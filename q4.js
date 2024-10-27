// Single Number from Leet Code

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;  
};

/*
nums = [5, 1, 5]
result = 0 (this will store the final single number)

Loop 1:
  i = 0
  result = result ^ nums[0] => result = 0 ^ 5 => result = 5

Loop 2:
  i = 1
  result = result ^ nums[1] => result = 5 ^ 1 => result = 4

Loop 3:
  i = 2
  result = result ^ nums[2] => result = 4 ^ 5 => result = 1

End of loop: result = 1 (this is the single number)

Final result: 1
*/