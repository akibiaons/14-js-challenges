// In this challenge I will write a function reverseArray() that takes in an array as an argument and returns a new array with the elements in reverse order.

// To do this I will first declare a function with an arr argument.

/*
In the first attempt below I did perfectly fine when declaring the function. I also did great knowing that I
had to use the for loop in reverse. I did however forget a few things...
================================================
const reverseArray = arr => {
    // I will use a reverse for loop...
    for (let i = arr.length - 1; i >= 0; i--) {

    }
};
Below is the revised complete solution for creating a function to output an array in reverse:
*/
// 1 is to declare the function:
const reverseArray = arr => {
    // Step 2: is to declare an empty array
    let reversed = [];
    for (let i = arr.length -1; i >= 0; i--) {
        reversed.push(arr[i]);
    }; // Step 3: is to make the negative for loop.
    return reversed; 
};
// When you're ready to test your code, uncomment the below and run:
const sentence = ['sense.','make', 'all', 'will', 'This'];
// Should print ['This', 'will', 'all', 'make', 'sense.'];
console.log(reverseArray(sentence));