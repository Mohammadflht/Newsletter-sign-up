const formPreview = document.querySelector(".container");
const emailValue = document.querySelector("input");
const confirmBtn = document.querySelector("button");
const dismissBtn = document.querySelector("#dismiss-btn");
const emailError = document.querySelector((".email-error"));
const validUserEmail = document.querySelector('#valid-email')
const successPart = document.querySelector(".success-part");
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


confirmBtn.addEventListener('click', () => {
    if (emailValue.value === ''){
        emailError.innerHTML = "Enter your email";
        emailError.style.color ="hsl(4, 100%, 67%)";
    }
    else if (emailValue.value.match(regex)) {
        formPreview.style.display = "none";
        successPart.style.display = "block";
        validUserEmail.innerHTML = emailValue.value;
        emailError.innerHTML = "";
        emailValue.style.backgroundColor = "transparent";
        emailValue.style.borderColor = "hsla(231, 7%, 60%, 0.74)"
        emailValue.style.color = "#000"
        emailValue.value = ""
    }
    else {
        emailError.innerHTML = "Valid email required";
        emailValue.style.backgroundColor = "hsl(4, 100%, 96%)";
        emailValue.style.borderColor = "hsla(4, 100%, 67%)"
        emailValue.style.color = "hsla(4, 100%, 67%)"
    }
});

dismissBtn.addEventListener("click", () => {
    formPreview.style.display = "";
    successPart.style.display = "none";
});






