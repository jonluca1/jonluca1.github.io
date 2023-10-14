var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".form__input").forEach(inputElement => {
        //Email Check
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "Email" && e.target.value.match(mailformat)) {
                console.log("Email Correct");
                return;
            };
            if (e.target.id === "signupEmail") {
                setInputError(inputElement, "Invalid Email");
                return;
            };
        });


    })
})
