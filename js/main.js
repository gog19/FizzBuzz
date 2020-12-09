var formElement = document.querySelector('.form-elements');
var input = formElement.querySelector('.form-input');
var result = document.querySelector('.demo');

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();


    if (isNaN(input.value)) {
        result.textContent = 'YOU CAN WRITE ONLY NUMBERS';
        result.style.color = 'pink';
        result.style.padding = '10px';
        result.style.borderRadius = '20px';
        result.style.backgroundColor = 'blue';
    } else if (input.value === '') {
        result.textContent = 'WRITE SOMETHING';
        result.style.color = 'red';
        result.style.padding = '10px';
        result.style.borderRadius = '20px';
        result.style.backgroundColor = 'yellow';
        input.value = '';
    } else if ((input.value % 3 === 0) && (input.value % 5 === 0)) {
        result.textContent = 'FizzBuzz';
        result.style.color = 'blue';
        result.style.padding = '10px';
        result.style.borderRadius = '20px';
        result.style.backgroundColor = 'pink';
        input.value = '';
    } else if (input.value % 3 === 0) {
        result.textContent = 'Fizz';
        result.style.color = 'orange';
        result.style.padding = '10px';
        result.style.borderRadius = '20px';
        result.style.backgroundColor = 'green';
        input.value = '';
    } else if (input.value % 5 === 0) {
        result.textContent = 'Buzz';
        result.style.color = 'brown';
        result.style.padding = '10px';
        result.style.borderRadius = '20px';
        result.style.backgroundColor = 'lightblue';
        input.value = '';
    } else if ((input.value % 3 !== 0) && (input.value % 5 !== 0)) {
        result.textContent = input.value;
        result.style.color = 'white';
        result.style.padding = '10px';
        result.style.borderRadius = '20px';
        result.style.backgroundColor = 'brown';
        input.value = '';
    }
})
