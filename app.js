const formPreview = document.querySelector(".container");
const emailValue = document.querySelector("input");
const button = document.querySelector("button");
const emailError = document.querySelector((".email-error"));
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


button.addEventListener('click', () => {
    if (emailValue.value === ''){
        emailError.innerHTML = "Enter your email";
        emailError.style.color ="hsl(4, 100%, 67%)";
    }
    else if (emailValue.value.match(regex)) {
        formPreview.style.display = "none";
    }
    else {
        emailError.innerHTML = "Valid email reauired";
        emailValue.style.backgroundColor = "hsl(4, 100%, 96%)";
        emailValue.style.borderColor = "hsla(4, 100%, 67%)"
        emailValue.style.color = "hsla(4, 100%, 67%)"
    }
})






