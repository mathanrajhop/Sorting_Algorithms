// Bubble Sort Start
function bubbleSort(arr) {
    // this is first loop, it just only for a loop purpose
    for (var i = 0; i < arr.length; i++) {
        // this is for loop on each looping
        for (var j = 0; j < arr.length; j++) {
            // this is tell whether swipe or not
            if (arr[j] > arr[j + 1]) {
                // if swipe, then it will store the current value, 
                // update next value for current position
                // set current value for next position
                let temp = arr[j]; 
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // return  the same array value
    return arr;
};

// This is the input
const data = [1, 3, 5, 6, 8, 9, 3, 2, 5, 6, 7, 8, 4, 2, 6];
// invoke the function with input
console.log(bubbleSort(data));
// [ 1, 2, 2, 3, 3, 4,
// 5, 5, 6, 6, 6, 7,
// 8, 8, 9
// ]

// Bubble Sort End