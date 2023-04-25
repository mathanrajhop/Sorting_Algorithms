// This function will sort by order asc
function QuickSort(arr) {

    // This is main Base value
    if (arr.length <= 0) {
        return arr;
    }

    // we can choose any value for pivot value 
    const pivotValue = arr[0];
    const leftArr = [];
    const rightArr = [];

    // We can split the value based on the pivot value
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > pivotValue) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i]);
        }
    }

    // we can call recursively to get the right and left positions
    return [ ...QuickSort(leftArr), pivotValue, ...QuickSort(rightArr)]
}

// This is our Inputs
console.log(QuickSort([8, 6, 3, 1, 7, 3, 7, 3, 7, 8, 12, 45, 67, 55, 57, 45, 24, 765, 75, 23, 24, 47, 78, 34, 6, 4, 2, 1, 6, 7]));

// This is our output

// [
//     1,  1,   2,  3,  3,  3,  4,  6,  6,
//     6,  7,   7,  7,  7,  8,  8, 12, 23,
//    24, 24,  34, 45, 45, 47, 55, 57, 67,
//    75, 78, 765
//  ]