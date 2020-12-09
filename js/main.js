var formElement = document.querySelector('.form-elements');
var input = formElement.querySelector('.form-input');
var result = document.querySelector('.demo');

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if ((input.value % 3 === 0) && (input.value % 5 === 0)) {
        result.textContent = 'FizzBuzz';
    } else if (input.value % 3 === 0) {
        result.textContent = 'Fizz';
    } else if (input.value % 5 === 0) {
        result.textContent = 'Buzz';
    } else if ((input.value % 3 !== 0) && (input.value % 5 !== 0)) {
        result.textContent = input.value
    }
})
