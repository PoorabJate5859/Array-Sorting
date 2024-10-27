// Median of two sorted arrays from Leet Code

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let array = [...nums1, ...nums2];
    array.sort((a, b) => a - b);
    let mid = Math.floor(array.length / 2);
    if (array.length % 2 !== 0) {
        return array[mid];
    } else {
        return (array[mid - 1] + array[mid]) / 2;
    }
};

// Test case
console.log(findMedianSortedArrays([1, 3], [2])); // output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // output: 2.5

/*
nums1 = [1, 3]
nums2 = [2]

Step 1: Combine both arrays
array = [1, 3, 2]

Step 2: Sort the combined array
array.sort((a, b) => a - b);
array = [1, 2, 3] // After sorting

Step 3: Find the middle index
mid = Math.floor(array.length / 2);
mid = Math.floor(3 / 2) = 1 // array.length = 3 (odd length)

Step 4: Check if the length is odd or even
Since array.length % 2 !== 0 (3 is odd),
return array[mid] => return array[1] => return 2

Final result: 2
*/

// Second Test Case:

/*
Initial state:
nums1 = [1, 2]
nums2 = [3, 4]

Step 1: Combine both arrays
array = [1, 2, 3, 4]

Step 2: Sort the combined array (already sorted)
array = [1, 2, 3, 4]

Step 3: Find the middle index
mid = Math.floor(array.length / 2);
mid = Math.floor(4 / 2) = 2 // array.length = 4 (even length)

Step 4: Check if the length is odd or even
Since array.length % 2 === 0 (4 is even),
return (array[mid - 1] + array[mid]) / 2 
=> return (array[1] + array[2]) / 2 
=> return (2 + 3) / 2 
=> return 5 / 2 => return 2.5

Final result: 2.5
*/