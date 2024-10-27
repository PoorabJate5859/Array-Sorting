// Merge Sort

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);

    const left = new Array();
    const right = new Array(array.length - mid);

    for (let i = 0; i < mid; i++) {
        left[i] = array[i];
    }

    for (let i = mid; i < array.length; i++) {
        right[i - mid] = array[i];
    }

    const sortLeft = mergeSort(left);
    const sortRight = mergeSort(right);

    return merge(sortLeft, sortRight);
}

function merge(left, right) {
    const result = new Array(left.length + right.length);

    let i = 0,
        j = 0,
        k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result[k++] = left[i++];
        } else {
            result[k++] = right[j++];
        }
    }
    while (i < left.length) {
        result[k++] = left[i++];
    }
    while (j < right.length) {
        result[k++] = right[j++];
    }

    return result;
}

let array = [453, 36, 241, 6774, 1414, 2, 5];
const sortedArray = mergeSort(array);

console.log(sortedArray);

/*
 Array: [453, 36, 241, 6774, 1414, 2, 5]

Outer block to mergeSort:
    - Step 1: Midpoint = 3
    - Step 2: Split into Left = [453, 36, 241] and Right = [6774, 1414, 2, 5]

    Left Subarray: [453, 36, 241]
        - Step 1: Midpoint = 1
        - Step 2: Split into Left = [453] and Right = [36, 241]

        Left Subarray: [453]
            - Array has 1 element; returns [453] as sorted

        Right Subarray: [36, 241]
            - Step 1: Midpoint = 1
            - Step 2: Split into Left = [36] and Right = [241]

            Left Subarray: [36]
                - Array has 1 element; returns [36] as sorted

            Right Subarray: [241]
                - Array has 1 element; returns [241] as sorted

            Merge of [36] and [241]:
                - Step 1: Compare left[0] = 36 and right[0] = 241
                    => 36 < 241, add 36 to result
                - Step 2: Add remaining element from right (241) to result
                - Merged array = [36, 241]

        Merge of [453] and [36, 241]:
            - Step 1: Compare left[0] = 453 and right[0] = 36
                => 36 < 453, add 36 to result
            - Step 2: Compare left[0] = 453 and right[1] = 241
                => 241 < 453, add 241 to result
            - Step 3: Add remaining element from left (453) to result
            - Merged array = [36, 241, 453]

    Right Subarray: [6774, 1414, 2, 5]
        - Step 1: Midpoint = 2
        - Step 2: Split into Left = [6774, 1414] and Right = [2, 5]

        Left Subarray: [6774, 1414]
            - Step 1: Midpoint = 1
            - Step 2: Split into Left = [6774] and Right = [1414]

            Left Subarray: [6774]
                - Array has 1 element; returns [6774] as sorted

            Right Subarray: [1414]
                - Array has 1 element; returns [1414] as sorted

            Merge of [6774] and [1414]:
                - Step 1: Compare left[0] = 6774 and right[0] = 1414
                    => 1414 < 6774, add 1414 to result
                - Step 2: Add remaining element from left (6774) to result
                - Merged array = [1414, 6774]

        Right Subarray: [2, 5]
            - Step 1: Midpoint = 1
            - Step 2: Split into Left = [2] and Right = [5]

            Left Subarray: [2]
                - Array has 1 element; returns [2] as sorted

            Right Subarray: [5]
                - Array has 1 element; returns [5] as sorted

            Merge of [2] and [5]:
                - Step 1: Compare left[0] = 2 and right[0] = 5
                    => 2 < 5, add 2 to result
                - Step 2: Add remaining element from right (5) to result
                - Merged array = [2, 5]

        Merge of [1414, 6774] and [2, 5]:
            - Step 1: Compare left[0] = 1414 and right[0] = 2
                => 2 < 1414, add 2 to result
            - Step 2: Compare left[0] = 1414 and right[1] = 5
                => 5 < 1414, add 5 to result
            - Step 3: Add remaining elements from left (1414, 6774) to result
            - Merged array = [2, 5, 1414, 6774]

    Final Merge of [36, 241, 453] and [2, 5, 1414, 6774]:
        - Step 1: Compare left[0] = 36 and right[0] = 2
            => 2 < 36, add 2 to result
        - Step 2: Compare left[0] = 36 and right[1] = 5
            => 5 < 36, add 5 to result
        - Step 3: Compare left[0] = 36 and right[2] = 1414
            => 36 < 1414, add 36 to result
        - Step 4: Compare left[1] = 241 and right[2] = 1414
            => 241 < 1414, add 241 to result
        - Step 5: Compare left[2] = 453 and right[2] = 1414
            => 453 < 1414, add 453 to result
        - Step 6: Add remaining elements from right (1414, 6774) to result
        - Merged array = [2, 5, 36, 241, 453, 1414, 6774]

Final sorted array: [2, 5, 36, 241, 453, 1414, 6774]
*/
