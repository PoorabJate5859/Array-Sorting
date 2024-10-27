// Selection Sorting

const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }
    return array
}

console.log(selectionSort([5, 4, 3, 2, 1]))

/*
        Outer Loop (1st pass):
  Step 1: i = 0, minIndex = 0 (assume the first element is the smallest)
  
  Inner Loop (1st pass):
    Loop 1:
      Step 1: j = 1, array[1] < array[0] => 4 < 5 => true
              minIndex = 1 (update minIndex)
    
    Loop 2:
      Step 1: j = 2, array[2] < array[1] => 3 < 4 => true
              minIndex = 2 (update minIndex)
    
    Loop 3:
      Step 1: j = 3, array[3] < array[2] => 2 < 3 => true
              minIndex = 3 (update minIndex)
    
    Loop 4:
      Step 1: j = 4, array[4] < array[3] => 1 < 2 => true
              minIndex = 4 (update minIndex)
    
    Exit inner loop, minIndex = 4

  Swap array[0] with array[4]:
    array = [1, 4, 3, 2, 5]

Outer Loop (2nd pass):
  Step 1: i = 1, minIndex = 1 (assume the second element is the smallest)
  
  Inner Loop (2nd pass):
    Loop 1:
      Step 1: j = 2, array[2] < array[1] => 3 < 4 => true
              minIndex = 2 (update minIndex)

    Loop 2:
      Step 1: j = 3, array[3] < array[2] => 2 < 3 => true
              minIndex = 3 (update minIndex)

    Loop 3:
      Step 1: j = 4, array[4] < array[3] => 5 < 2 => false
              minIndex stays 3
    
    Exit inner loop, minIndex = 3

  Swap array[1] with array[3]:
    array = [1, 2, 3, 4, 5]

Outer Loop (3rd pass):
  Step 1: i = 2, minIndex = 2 (assume the third element is the smallest)

  Inner Loop (3rd pass):
    Loop 1:
      Step 1: j = 3, array[3] < array[2] => 4 < 3 => false
              minIndex stays 2

    Loop 2:
      Step 1: j = 4, array[4] < array[2] => 5 < 3 => false
              minIndex stays 2
    
    Exit inner loop, minIndex = 2 (no swap needed)

Outer Loop (4th pass):
  Step 1: i = 3, minIndex = 3 (assume the fourth element is the smallest)

  Inner Loop (4th pass):
    Loop 1:
      Step 1: j = 4, array[4] < array[3] => 5 < 4 => false
              minIndex stays 3
    
    Exit inner loop, minIndex = 3 (no swap needed)

Exit outer loop

Final sorted array: [1, 2, 3, 4, 5]
*/