// TODO
const form = document.getElementById('connect-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const select = document.getElementById('contact-kind');
const employment = document.getElementById('employment');
const code = document.getElementById('code');
const jobOpportunityFields = document.getElementById('job-opportunity-fields')
const jobTitle = document.getElementById('job-title');
const companyWebsite = document.getElementById('company-website');
const talkCodeFields = document.getElementById('talk-code-fields');
const codingLanguageSelect = document.getElementById('coding-language');
const message = document.getElementById('message');

const validateRequired = (input) => {
    const value = input.value.trim();
    if (value === '') {
        input.parentElement.classList.add('invalid');
        return false;
    }
    input.parentElement.classList.remove('invalid');
    return true;
}

const validateLength = (input, min) => {
    const value = input.value.trim();
    if (value.length >= min) {
        input.parentElement.classList.remove('invalid');
        return true;
    }
    input.parentElement.classList.add('invalid');
    return false;
}

const validateEmail = (input) => {
    const re = /\w+@\w+\.\w+/;
    if (re.test(input.value.trim())) {
        input.parentElement.classList.remove('invalid');
        return true;
    }
    input.parentElement.classList.add('invalid');
    return false;
}

const validateURL = (input) => {
    const urlPattern = /https?\:\/\/.+\..+/;
    if (urlPattern.test(input.value.trim())) {
        input.parentElement.classList.remove('invalid');
        return true;
    }
    input.parentElement.classList.add('invalid');
    return false;
}

const validateJobOpportunityFields = () => {
    const isJobTitleValid = validateRequired(jobTitle);
    const isCompanyWebsiteValid = validateRequired(companyWebsite) && validateURL(companyWebsite);

    return isJobTitleValid && isCompanyWebsiteValid;
}

const validateTalkCodeFields = () => {
    const selectedValue = codingLanguageSelect.value;
    if (selectedValue === 'choose') {
        codingLanguageSelect.parentElement.classList.add('invalid');
        return false;
    }
    codingLanguageSelect.parentElement.classList.remove('invalid');
    return true;
}

const showError = (input, message) => {
    const errorElement = input.parentElement.querySelector('.error');
    const label = input.parentElement.querySelector('label');
    label.classList.add('invalid-label');
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

const hideError = (input) => {
    const errorElement = input.parentElement.querySelector('.error');
    const label = input.parentElement.querySelector('label');
    label.classList.remove('invalid-label');
    errorElement.innerText = '';
    errorElement.style.display = 'none';
}

select.addEventListener('change', () => {
    if (select.value === 'employment') {
        jobOpportunityFields.classList.remove('hidden');
        talkCodeFields.classList.add('hidden');
    } else if (select.value === 'code') {
       talkCodeFields.classList.remove('hidden');
       jobOpportunityFields.classList.add('hidden');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateRequired(firstName) && validateLength(firstName, 3);
    const isLastNameValid = validateRequired(lastName) && validateLength(lastName, 3);
    const isEmailValid = validateRequired(email) && validateEmail(email);
    const isMessageValid = validateRequired(message) && validateLength(message, 10);
    
    let isJobOpportunityValid = true;
    if (select.value === 'employment') {
        isJobOpportunityValid = validateJobOpportunityFields();
    }

    let isTalkCodeValid = true;
    if (select.value === 'code') {
        isTalkCodeValid = validateTalkCodeFields();
    }

    if (isNameValid && isLastNameValid && isEmailValid && isMessageValid && isJobOpportunityValid && isTalkCodeValid) {
        // Proceed with form submission logic
        console.log('Form is valid! Submitting...');
        form.submit(); // Manually trigger the form submission
    } else {
        console.log('Bad input.');
        showError(firstName, 'First Name is required, must be 3 or more characters');
        showError(lastName, 'Last Name is required, must be 3 or more characters');
        showError(email, 'Email is required, must be in the format user@example.com');
        showError(message, 'Message is required, must be 10 or more characters');

        if (select.value === 'employment') {
            if (!isJobOpportunityValid) {
                showError(jobTitle, 'Job Title is required');
                showError(companyWebsite, 'Company website is required and must be a valid URL');
            }
        } else if (select.value === 'code') {
            if (!isTalkCodeValid) {
                showError(codingLanguageSelect, 'Please choose a coding language');
            }
        }
    }
});
