const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

const inputs = [
    nameInput,
    emailInput,
    passwordInput,
    confirmPasswordInput
];

inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.style.backgroundColor = "#eeeeee";
    });

    input.addEventListener("blur", () => {
        input.style.backgroundColor = "white";
        validateField(input);
    });

    input.addEventListener("input", () => {
        validateField(input);
    });
});

function validateField(input) {
    if (input === nameInput) {
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Введіть ім'я";
            return false;
        }

        nameError.textContent = "";
    }

    if (input === emailInput) {
        if (emailInput.value.trim() === "") {
            emailError.textContent = "Введіть email";
            return false;
        }

        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = "Введіть коректний email";
            return false;
        }

        emailError.textContent = "";
    }

    if (input === passwordInput) {
        if (!passwordRegex.test(passwordInput.value)) {
            passwordError.textContent = "Пароль має містити мінімум 6 символів, літеру та цифру";
            return false;
        }            

        passwordError.textContent = "";
    }

    if (input === confirmPasswordInput) {
        if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordError.textContent = "Паролі не збігаються";
            return false;
        }

        confirmPasswordError.textContent = "";
    }

    return true;
}


form.addEventListener("submit", event => {
    event.preventDefault();

    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    if (isValid) {
        alert("Реєстрація успішна!");
        form.reset();
    }
});

