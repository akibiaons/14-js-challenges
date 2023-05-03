/*
Challenge 3 will have me use a function convertToBaby(), that takes in an array as an argument and using a 
loop returns a new array, with the string 'baby' prepended to each string in the array.
*/
// Below is the function

const convertToBaby = (arr, str) => {
    let convert = [];
    for (let i = 0; i < arr.length; i++) {
        convert.push(str + arr[i]);
    };
    return convert;
};

// Below is the offical challenge documentation...
/*
const convertToBaby = arr => {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++) {
          babyArray.push('baby ' + arr[i]);
    }
    return babyArray
};
*/

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals, 'baby ')); // Goal is to print baby ${animalIndex}

// The challenge says it is wrong but I am pretty sure it's not recognizing the different way of doing it..
