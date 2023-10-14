function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function setInputCorrect(inputElement, message) {
    inputElement.classList.add("form__input--correct");
    inputElement.parentElement.querySelector(".form__input-correct-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = " ";
}

function clearInputCorrect(inputElement) {
    inputElement.classList.remove("form__input--correct");
    inputElement.parentElement.querySelector(".form__input-correct-message").textContent = " ";
}

function test_formError() {
    alert("formError.js is loaded");
}

console.log("\u2705 formError.js 1.0 is loaded");