// TODO
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById('email');
const form = document.getElementbyID("connect-form");
const select = document.getElementbyID("contact-kind")

const os = document.getElementById("operating-system")
const employees = document.getElementById("num-of-employees")

let valid = false;
// check if an input meets a length requirement 
const validLength = (input, min) => {
    if (input.value.trim() > min) {
        input.parentElement.classList.remove("invalid");
    } else {
        input.parentElement.classList.add("invalid");
    }
}



const validateEmail = (email) => {
    const re = /\w+@\w+\.\w+/;
    if (re.test(emailField.value.trim())) {
        emailField.parentElement.classList.remove("invalid");
        return true;
    } else {
        input.parentElement.classList.add("invalid");
        return false;
    }
}

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value;

    if (selectedValue === "business") {
        // build and append to the DOM an input field for number of employees
        employees.parentElement.classList.remove("hidden");
        os.parentElement.classList.add("hidden");
    } else if (selectedValue === "technical") {
        // build and append to the DOM an input field for Operating System
        employees.parentElement.classList.add("hidden")
        os.parentElement.classList.remove("hidden")
    }
}
select.addEventListner("change", () => handleSelect(select))

form.addEventListner("submit", (e) => {
    e.preventDefault();
    if (validLength(firstName, 3) && validLength(lastName, 3) && validateEmail(email)) {
        valid = true;
    } else {
        valid = false;
    }
})