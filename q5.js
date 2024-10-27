// 137. Single Number II from Leet Code

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
     for(let i = 0 ; i < 32 ; i++) {
         let sum = 0;
         for(let j = 0 ; j < nums.length ; j++) {
             if(nums[j] & (1 << i)) {
                 sum++;
             }
         }
         if(sum % 3 == 1) {
             result = result | (1 << i);
         }
     }
     return result;
 };

 /*
        nums = [5, 5, 5, 3]
result = 0 (this will store the final single number)

Outer Loop (i = 0): 
  // We check the 0th bit in all numbers
  Step 1: i = 0, sum = 0 (tracks how many numbers have bit 0 set)
  
  Inner Loop (i = 0):
    Loop 1: j = 0, nums[0] = 5, nums[0] & (1 << 0) => 5 & 1 => 1 (bit is set), sum = 1
    Loop 2: j = 1, nums[1] = 5, nums[1] & (1 << 0) => 5 & 1 => 1 (bit is set), sum = 2
    Loop 3: j = 2, nums[2] = 5, nums[2] & (1 << 0) => 5 & 1 => 1 (bit is set), sum = 3
    Loop 4: j = 3, nums[3] = 3, nums[3] & (1 << 0) => 3 & 1 => 1 (bit is set), sum = 4

  After inner loop: sum = 4, sum % 3 = 1 (meaning the unique number has bit 0 set)
  Update result: result = result | (1 << 0) => result = 0 | 1 => result = 1

Outer Loop (i = 1):
  // Now we check the 1st bit in all numbers
  Step 1: i = 1, sum = 0 (tracks how many numbers have bit 1 set)
  
  Inner Loop (i = 1):
    Loop 1: j = 0, nums[0] = 5, nums[0] & (1 << 1) => 5 & 2 => 0 (bit is not set), sum = 0
    Loop 2: j = 1, nums[1] = 5, nums[1] & (1 << 1) => 5 & 2 => 0 (bit is not set), sum = 0
    Loop 3: j = 2, nums[2] = 5, nums[2] & (1 << 1) => 5 & 2 => 0 (bit is not set), sum = 0
    Loop 4: j = 3, nums[3] = 3, nums[3] & (1 << 1) => 3 & 2 => 2 (bit is set), sum = 1

  After inner loop: sum = 1, sum % 3 = 1 (meaning the unique number has bit 1 set)
  Update result: result = result | (1 << 1) => result = 1 | 2 => result = 3

Outer Loop (i = 2):
  // Now we check the 2nd bit in all numbers
  Step 1: i = 2, sum = 0 (tracks how many numbers have bit 2 set)
  
  Inner Loop (i = 2):
    Loop 1: j = 0, nums[0] = 5, nums[0] & (1 << 2) => 5 & 4 => 4 (bit is set), sum = 1
    Loop 2: j = 1, nums[1] = 5, nums[1] & (1 << 2) => 5 & 4 => 4 (bit is set), sum = 2
    Loop 3: j = 2, nums[2] = 5, nums[2] & (1 << 2) => 5 & 4 => 4 (bit is set), sum = 3
    Loop 4: j = 3, nums[3] = 3, nums[3] & (1 << 2) => 3 & 4 => 0 (bit is not set), sum = 3

  After inner loop: sum = 3, sum % 3 = 0 (meaning the unique number does NOT have bit 2 set)
  No update to result: result remains 3

Outer Loop (i = 3):
  // Now we check the 3rd bit in all numbers
  Step 1: i = 3, sum = 0 (tracks how many numbers have bit 3 set)
  
  Inner Loop (i = 3):
    Loop 1: j = 0, nums[0] = 5, nums[0] & (1 << 3) => 5 & 8 => 0 (bit is not set), sum = 0
    Loop 2: j = 1, nums[1] = 5, nums[1] & (1 << 3) => 5 & 8 => 0 (bit is not set), sum = 0
    Loop 3: j = 2, nums[2] = 5, nums[2] & (1 << 3) => 5 & 8 => 0 (bit is not set), sum = 0
    Loop 4: j = 3, nums[3] = 3, nums[3] & (1 << 3) => 3 & 8 => 0 (bit is not set), sum = 0

  After inner loop: sum = 0, sum % 3 = 0 (meaning the unique number does NOT have bit 3 set)
  No update to result: result remains 3

Outer Loop continues for i = 4 to 31:
  For higher bit positions, there will be no updates since all elements are small (within the 4-bit range).

Final result: result = 3 (the unique number)
 */