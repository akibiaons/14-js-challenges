/*
In challenge two I will make use of variables, arrays, methods and loops to print custom stirngs
to the console..
*/
const greetAliens = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
    }
};

const aliens = ['Beowoulf', 'Zorgip', 'Fripath', 'Freyaht', 'Zennith']; // an array with 4 indexes
greetAliens(aliens); // will execute the greetAliens() function and return the console as the function intends...