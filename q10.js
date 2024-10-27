// // Quick Sort using In-Built Methods 

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];

    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}
let array = [23, 31, 312, 12, 2, 321, 42];

console.log(quickSort(array));

/*
  Detailed Dry Run for Input Array: [453, 36, 241, 6774, 1414, 2, 5]

  Initial array: [453, 36, 241, 6774, 1414, 2, 5]

  Outer Call to quickSort(arr, left = 0, right = 6):
    - Step 1: Base condition - If left (0) is greater than or equal to right (6), continue (not true).
    
    - Step 2: Call partition(arr, left = 0, right = 6)
        - Set pivot = arr[6] = 5
        - Initialize i = -1 (to track the last position of smaller elements)

    Partition Loop:
        j = 0: arr[0] = 453, 453 > 5, no swap, i remains -1
        j = 1: arr[1] = 36, 36 > 5, no swap, i remains -1
        j = 2: arr[2] = 241, 241 > 5, no swap, i remains -1
        j = 3: arr[3] = 6774, 6774 > 5, no swap, i remains -1
        j = 4: arr[4] = 1414, 1414 > 5, no swap, i remains -1
        j = 5: arr[5] = 2, 2 < 5, increment i to 0, swap arr[0] and arr[5]
        - New array: [2, 36, 241, 6774, 1414, 453, 5]

    - Step 4: Place pivot in position by swapping arr[1] (36) and arr[6] (5)
        - New array: [2, 5, 241, 6774, 1414, 453, 36]
        - Pivot index = 1

  Recursive quickSort(arr, left = 0, right = 0):
    - Base case reached (0 >= 0), return.

  Recursive quickSort(arr, left = 2, right = 6):
    - Step 1: Base condition - If left (2) is greater than or equal to right (6), continue (not true).

    - Step 2: Call partition(arr, left = 2, right = 6)
        - Set pivot = arr[6] = 36
        - Initialize i = 1

    Partition Loop:
        j = 2: arr[2] = 241, 241 > 36, no swap, i remains 1
        j = 3: arr[3] = 6774, 6774 > 36, no swap, i remains 1
        j = 4: arr[4] = 1414, 1414 > 36, no swap, i remains 1
        j = 5: arr[5] = 453, 453 > 36, no swap, i remains 1

    - Step 4: Place pivot in position by swapping arr[2] (241) and arr[6] (36)
        - New array: [2, 5, 36, 6774, 1414, 453, 241]
        - Pivot index = 2

  Recursive quickSort(arr, left = 2, right = 1): 
    - Base case reached (2 >= 1), return.

  Recursive quickSort(arr, left = 3, right = 6):
    - Step 1: Base condition - If left (3) is greater than or equal to right (6), continue (not true).

    - Step 2: Call partition(arr, left = 3, right = 6)
        - Set pivot = arr[6] = 241
        - Initialize i = 2

    Partition Loop:
        j = 3: arr[3] = 6774, 6774 > 241, no swap, i remains 2
        j = 4: arr[4] = 1414, 1414 > 241, no swap, i remains 2
        j = 5: arr[5] = 453, 453 > 241, no swap, i remains 2

    - Step 4: Place pivot in position by swapping arr[3] (6774) and arr[6] (241)
        - New array: [2, 5, 36, 241, 1414, 453, 6774]
        - Pivot index = 3

  Recursive quickSort(arr, left = 3, right = 2): 
    - Base case reached (3 >= 2), return.

  Recursive quickSort(arr, left = 4, right = 6):
    - Step 1: Base condition - If left (4) is greater than or equal to right (6), continue (not true).

    - Step 2: Call partition(arr, left = 4, right = 6)
        - Set pivot = arr[6] = 6774
        - Initialize i = 3

    Partition Loop:
        j = 4: arr[4] = 1414, 1414 < 6774, increment i to 4, swap arr[4] and arr[4] (no change)
        j = 5: arr[5] = 453, 453 < 6774, increment i to 5, swap arr[5] and arr[5] (no change)

    - Step 4: Place pivot in position by swapping arr[6] and arr[6] (no change)
        - New array: [2, 5, 36, 241, 1414, 453, 6774]
        - Pivot index = 6

  Recursive quickSort(arr, left = 4, right = 5):
    - Step 1: Base condition - If left (4) is greater than or equal to right (5), continue (not true).

    - Step 2: Call partition(arr, left = 4, right = 5)
        - Set pivot = arr[5] = 453
        - Initialize i = 3

    Partition Loop:
        j = 4: arr[4] = 1414, 1414 > 453, no swap, i remains 3

    - Step 4: Place pivot in position by swapping arr[4] (1414) and arr[5] (453)
        - New array: [2, 5, 36, 241, 453, 1414, 6774]
        - Pivot index = 4

    Recursive quickSort(arr, left = 4, right = 3): 
        - Base case reached (4 >= 3), return.

    Recursive quickSort(arr, left = 5, right = 5): 
        - Base case reached (5 >= 5), return.

  Recursive quickSort(arr, left = 7, right = 6): 
    - Base case reached (7 >= 6), return.

  Final sorted array: [2, 5, 36, 241, 453, 1414, 6774]
*/
