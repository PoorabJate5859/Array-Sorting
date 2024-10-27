// Bubble sort

const bubbleSort = (array) => {
  let isSwapped 
  do {
    isSwapped = false
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        isSwapped = true
      }
    }
  } while (isSwapped)
  return array
}

console.log(bubbleSort([5, 4, 3, 2, 1]))

/*
        Outer Loop (1st pass):
  Step 1: isSwapped = false

  Inner Loop (1st pass):
    Loop 1:
      Step 1: i = 0
      Step 2: 5 > 4 => true, swap
              array = [4, 5, 3, 2, 1]
              isSwapped = true
      Step 3: i++

    Loop 2:
      Step 1: i = 1
      Step 2: 5 > 3 => true, swap
              array = [4, 3, 5, 2, 1]
              isSwapped = true
      Step 3: i++

    Loop 3:
      Step 1: i = 2
      Step 2: 5 > 2 => true, swap
              array = [4, 3, 2, 5, 1]
              isSwapped = true
      Step 3: i++

    Loop 4:
      Step 1: i = 3
      Step 2: 5 > 1 => true, swap
              array = [4, 3, 2, 1, 5]
              isSwapped = true
      Step 3: i++
    
    Exit inner loop, no more elements to compare (i = 4)

Outer Loop (2nd pass):
  Step 1: isSwapped = true
  Step 2: Reset isSwapped to false at the start of the iteration

  Inner Loop (2nd pass):
    Loop 1:
      Step 1: i = 0
      Step 2: 4 > 3 => true, swap
              array = [3, 4, 2, 1, 5]
              isSwapped = true
      Step 3: i++

    Loop 2:
      Step 1: i = 1
      Step 2: 4 > 2 => true, swap
              array = [3, 2, 4, 1, 5]
              isSwapped = true
      Step 3: i++

    Loop 3:
      Step 1: i = 2
      Step 2: 4 > 1 => true, swap
              array = [3, 2, 1, 4, 5]
              isSwapped = true
      Step 3: i++

    Loop 4:
      Step 1: i = 3
      Step 2: 4 > 5 => false, no swap
      Step 3: i++
    
    Exit inner loop (i = 4)

Outer Loop (3rd pass):
  Step 1: isSwapped = true
  Step 2: Reset isSwapped to false at the start of the iteration

  Inner Loop (3rd pass):
    Loop 1:
      Step 1: i = 0
      Step 2: 3 > 2 => true, swap
              array = [2, 3, 1, 4, 5]
              isSwapped = true
      Step 3: i++

    Loop 2:
      Step 1: i = 1
      Step 2: 3 > 1 => true, swap
              array = [2, 1, 3, 4, 5]
              isSwapped = true
      Step 3: i++

    Loop 3:
      Step 1: i = 2
      Step 2: 3 > 4 => false, no swap
      Step 3: i++

    Loop 4:
      Step 1: i = 3
      Step 2: 4 > 5 => false, no swap
      Step 3: i++
    
    Exit inner loop (i = 4)

Outer Loop (4th pass):
  Step 1: isSwapped = true
  Step 2: Reset isSwapped to false at the start of the iteration

  Inner Loop (4th pass):
    Loop 1:
      Step 1: i = 0
      Step 2: 2 > 1 => true, swap
              array = [1, 2, 3, 4, 5]
              isSwapped = true
      Step 3: i++

    Loop 2:
      Step 1: i = 1
      Step 2: 2 > 3 => false, no swap
      Step 3: i++

    Loop 3:
      Step 1: i = 2
      Step 2: 3 > 4 => false, no swap
      Step 3: i++

    Loop 4:
      Step 1: i = 3
      Step 2: 4 > 5 => false, no swap
      Step 3: i++
    
    Exit inner loop (i = 4)

Outer Loop (5th pass):
  Step 1: isSwapped = true
  Step 2: No swaps are made in this pass, so isSwapped stays false and the loop ends

Final Sorted Array: [1, 2, 3, 4, 5]
*/