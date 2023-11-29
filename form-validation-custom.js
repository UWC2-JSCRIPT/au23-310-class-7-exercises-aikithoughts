// TODO
const form = document.getElementById('connect-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const select = document.getElementById('contact-kind');
const os = document.getElementById('operating-system');
const employees = document.getElementById('number-of-employees');

const validateLength = (input, min) => {
    if (input.value.trim().length > min) {
        input.parentElement.classList.remove('invalid');
    } else {
        input.parentElement.classList.add('invalid');
    }
}

const validateEmail = (emailField) => {
    const re = /\w+@\w+\.\w+/;
    if (re.test(emailField.value.trim())) {
        emailField.parentElement.classList.remove('invalid');
    } else {
        emailField.parentElement.classList.add('invalid');
    }
}

const handleSelect = (select) => {
    const selectedValue = select.value;
    if (selectedValue === 'business') {
        employees.parentElement.classList.remove('hidden');
        os.parentElement.classList.add('hidden');
        // build and append to the DOM an input field for the number of employees
    } else if (selectedValue === 'technical') {
        // build and append to the DOM an input field for Operating system
        os.parentElement.classList.remove('hidden');
        employees.parentElement.classList.add('hidden');
    }
}

select.addEventListener('change', () => handleSelect(select));

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateLength(firstName, 3);
    validateLength(lastName, 3);
    validateEmail(email);

    const formGroups = document.querySelectorAll('.form-group');
    let valid = true; 

    formGroups.forEach(formGroup => {
        const invalidInputs = formGroup.querySelectorAll('.invalid');
        if (invalidInputs.length > 0) {
            valid = false;
        }
    });

    if (valid) {
        // Proceed with form submission logic
        console.log('Form is valid! Submitting...');
        form.submit(); // Manually trigger the form submission
    } else {
        console.log('Bad input.');
    }
});
