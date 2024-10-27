// Remove all the duplicate values from an array..

let array = [1,2,2,3,3,3,4,4,4,4,5,5]
let unique = []
let uLength = 0

for(let i = 0 ; i < array.length ; i++)
{
    let present = false
    for(let j = 0 ; j < uLength ; j++) {
        if(array[i] == unique[j]) {
            present = true
            break
        }
    }
    if(!present) {
        unique[uLength] = array[i]
        uLength++
    }
}
console.log(unique)

/*
array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5]
unique = []
uLength = 0

Outer Loop (i = 0):
    - array[i] = 1
    present = false
    Inner Loop (j = 0): (j < uLength, 0 < 0 is false)
    - unique = [1]
    - uLength = 1

Outer Loop (i = 1):
    - array[i] = 2
    present = false
    Inner Loop (j = 0): (j < uLength, 0 < 1 is true)
        - unique[0] = 1 (no match)
    - unique = [1, 2]
    - uLength = 2

Outer Loop (i = 2):
    - array[i] = 2
    present = false
    Inner Loop (j = 0): (j < uLength, 0 < 2 is true)
        - unique[0] = 1 (no match)
    Inner Loop (j = 1): (j < uLength, 1 < 2 is true)
        - unique[1] = 2 (match found)
        - present = true
        - break inner loop
    - (present is true, do not add 2 to unique)

Outer Loop (i = 3):
    - array[i] = 3
    present = false
    Inner Loop (j = 0): (j < uLength, 0 < 2 is true)
        - unique[0] = 1 (no match)
    Inner Loop (j = 1): (j < uLength, 1 < 2 is true)
        - unique[1] = 2 (no match)
    - unique = [1, 2, 3]
    - uLength = 3

Outer Loop (i = 4):
    - array[i] = 3
    present = false
    Inner Loop (j = 0): (j < uLength, 0 < 3 is true)
        - unique[0] = 1 (no match)
    Inner Loop (j = 1): (j < uLength, 1 < 3 is true)
        - unique[1] = 2 (no match)
    Inner Loop (j = 2): (j < uLength, 2 < 3 is true)
        - unique[2] = 3 (match found)
        - present = true
        - break inner loop
    - (present is true, do not add 3 to unique)

Outer Loop (i = 5):
    - array[i] = 3
    present = false
    Inner Loop (j = 0): (j < uLength, 0 < 3 is true)
        - unique[0] = 1 (no match)
    Inner Loop (j = 1): (j < uLength, 1 < 3 is true)
        - unique[1] = 2 (no match)
    Inner Loop (j = 2): (j < uLength, 2 < 3 is true)
        - unique[2] = 3 (match found)
        - present = true
        - break inner loop
    - (present is true, do not add 3 to unique)

Outer Loop (i = 6):
    - array[i] = 4
    present = false
    Inner Loop (j = 0): (j < uLength, 0 < 3 is true)
        - unique[0] = 1 (no match)
    Inner Loop (j = 1): (j < uLength, 1 < 3 is true)
        - unique[1] = 2 (no match)
    Inner Loop (j = 2): (j < uLength, 2 < 3 is true)
        - unique[2] = 3 (no match)
    - unique = [1, 2, 3, 4]
    - uLength = 4

Outer Loop (i = 7):
    - array[i] = 4
    present = false
    Inner Loop (j = 0): (j < uLength, 0 < 4 is true)
        - unique[0] = 1 (no match)
    Inner Loop (j = 1): (j < uLength, 1 < 4 is true)
        - unique[1] = 2 (no match)
    Inner Loop (j = 2): (j < uLength, 2 < 4 is true)
        - unique[2] = 3 (no match)
    Inner Loop (j = 3): (j < uLength, 3 < 4 is true)
        - unique[3] = 4 (match found)
        - present = true
        - break inner loop
    - (present is true, do not add 4 to unique)

Outer Loop (i = 8):
    - array[i] = 4
    present = false
    Inner Loop (j = 0): (j < uLength, 0 < 4 is true)
        - unique[0] = 1 (no match)
    Inner Loop (j = 1): (j < uLength, 1 < 4 is true)
        - unique[1] = 2 (no match)
    Inner Loop (j = 2): (j < uLength, 2 < 4 is true)
        - unique[2] = 3 (no match)
    Inner Loop (j = 3): (j < uLength, 3 < 4 is true)
        - unique[3] = 4 (match found)
        - present = true
        - break inner loop
    - (present is true, do not add 4 to unique)

Outer Loop (i = 9):
    - array[i] = 4
    present = false
    Inner Loop (j = 0): (j < uLength, 0 < 4 is true)
        - unique[0] = 1 (no match)
    Inner Loop (j = 1): (j < uLength, 1 < 4 is true)
        - unique[1] = 2 (no match)
    Inner Loop (j = 2): (j < uLength, 2 < 4 is true)
        - unique[2] = 3 (no match)
    Inner Loop (j = 3): (j < uLength, 3 < 4 is true)
        - unique[3] = 4 (match found)
        - present = true
        - break inner loop
    - (present is true, do not add 4 to unique)

Outer Loop (i = 10):
    - array[i] = 5
    present = false
    Inner Loop (j = 0): (j < uLength, 0 < 4 is true)
        - unique[0] = 1 (no match)
    Inner Loop (j = 1): (j < uLength, 1 < 4 is true)
        - unique[1] = 2 (no match)
    Inner Loop (j = 2): (j < uLength, 2 < 4 is true)
        - unique[2] = 3 (no match)
    Inner Loop (j = 3): (j < uLength, 3 < 4 is true)
        - unique[3] = 4 (no match)
    - unique = [1, 2, 3, 4, 5]
    - uLength = 5

Outer Loop (i = 11):
    - array[i] = 5
    present = false
    Inner Loop (j = 0): (j < uLength, 0 < 5 is true)
        - unique[0] = 1 (no match)
    Inner Loop (j = 1): (j < uLength, 1 < 5 is true)
        - unique[1] = 2 (no match)
    Inner Loop (j = 2): (j < uLength, 2 < 5 is true)
        - unique[2] = 3 (no match)
    Inner Loop (j = 3): (j < uLength, 3 < 5 is true)
        - unique[3] = 4 (no match)
    Inner Loop (j = 4): (j < uLength, 4 < 5 is true)
        - unique[4] = 5 (match found)
        - present = true
        - break inner loop
    - (present is true, do not add 5 to unique)

Final Output:
unique = [1, 2, 3, 4, 5]
*/