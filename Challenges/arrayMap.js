function checkforSubarraySum(arr, target) {
    let arrSize = arr.length;

  
    for (let start = 0; start < arrSize; start++) {
        let currentSum = 0;

        
        for (let end = start; end < arrSize; end++) {
            currentSum += arr[end];

          
            if (currentSum === target) {
                return true;
            }

            if (currentSum > target) {
                break;
            }
        }
    }

 
    return false;
}

//Example
const arr = [4, 3, 7, 1, 9, 2];
const target = 12;

if (checkforSubarraySum(arr, target)) {
    console.log("Subarray with the target sum exists");
} else {
    console.log("Subarray with the target sum could not be found.");
}
