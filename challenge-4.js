/*FIX the Broken Code!!*/

// Below is the broken code:
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
  // Was not originally working because j was i in the nested loop below..
            j = 1; 
            while (j < number) {
                  i = i * 2;
            }
            results.push(i);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]