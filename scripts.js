const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const textarea = document.getElementById('message');
const form = document.getElementById('form');
const checkbox = document.querySelector('input[type="checkbox"]');

const errorF = document.getElementById('error-f');
const errorL = document.getElementById('error-l');
const errorE = document.getElementById('error-e');
const errorR = document.getElementById('error-r');
const errorTX = document.getElementById('error-tx');
const errorC = document.getElementById('error-c');

form.addEventListener('submit', (event) => {
    if (!firstName.validity.valid) {
        firstError();
        event.preventDefault();
    }
    if (!lastName.validity.valid) {
        lastError();
        event.preventDefault();
    }
    if (!email.validity.valid) {
        emailError();
        event.preventDefault();
    }
    if (!textarea.validity.valid) {
        textareaError();
        event.preventDefault();
        }
    const radio = document.querySelector('input[type="radio"]:checked');
    if (!radio) {
        radioError();
        event.preventDefault();
    }
    const checkbox = document.querySelector('input[type="checkbox"]:checked');
    if (!checkbox) {
        checkBoxError();
        event.preventDefault();
    }
})

firstName.addEventListener('input', () => {
    if (firstName.validity.valid) {
        errorF.textContent = '';
        errorF.className = 'error';
    }
    else {
        firstError();
    }
})

lastName.addEventListener('input', () => {
    if (lastName.validity.valid) {
        errorL.textContent = '';
        errorL.className = 'error';
    }
    else {
        lastError();
    }
})

email.addEventListener('input', () => {
    if (email.validity.valid) {
        errorE.textContent = '';
        errorE.className = 'error';
    }
    else {
        emailError();
    }
})

textarea.addEventListener('input', () => {
    if (textarea.validity.valid) {
        errorTX.textContent = '';
        errorTX.className = 'error';
    }
    else {
        textareaError();
    }
})

function firstError() {
    // First Name
    if (firstName.validity.valueMissing) {
        errorF.textContent = 'First Name cannot be empty';
        errorF.className = 'error active';
    } else if (firstName.validity.tooShort) {
        errorF.textContent = `At least ${firstName.minLength} characters; you entered ${firstName.value.length}`;
        errorF.className = 'error active';
    }
}

function lastError() {
    // Last Name
    if (lastName.validity.valueMissing) {
        errorL.textContent = 'Last Name cannot be empty';
        errorL.className = 'error active';
    }
    else if (lastName.validity.tooShort) {
        errorL.textContent = `At least ${lastName.minLength} characters; you entered ${lastName.value.length}`;
        errorL.className = 'error active';
    }
}

function emailError() {
    // Email
    if (email.validity.valueMissing) {
        errorE.textContent = 'Email cannot be empty';
        errorE.className = 'error active';
    }
    else if (email.validity.typeMismatch) {
        errorE.textContent = 'Invalid email address';
        errorE.className = 'error active';
    }
}

function textareaError() {
    if (textarea.validity.tooLong) {
        errorTX.textContent = `At most ${textarea.maxLength} characters; you entered ${textarea.value.length}`;
        errorTX.className = 'error active';
    }
    else if (textarea.validity.valueMissing) {
        errorTX.textContent = 'Message cannot be empty';
        errorTX.className = 'error active';
    }
}

function radioError() {
    const radio = document.querySelector('input[type="radio"]:checked');
    if (!radio) {
        errorR.textContent = 'Please select an option';
        errorR.className = 'error active';
    }
    else {
        errorR.textContent = '';
        errorR.className = 'error';
    }
}
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
        radioError();
    });
});

function checkBoxError() {
    if (!checkbox.checked) {
        errorC.textContent = 'Please select an option';
        errorC.className = 'error active';
    }
    else {
        errorC.textContent = '';
        errorC.className = 'error';
    }
}


checkbox.addEventListener('change', () => {
    checkBoxError();
});