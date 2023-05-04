const button = document.getElementById('button');
const input = document.getElementById('textElement'); // was textElem

console.log(input);

button.addEventListener('click', () => {
    console.log(input.value);
});