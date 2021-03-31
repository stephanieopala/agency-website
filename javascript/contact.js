const myForm = document.querySelector("form");
const button = document.querySelector(".contact-btn")


myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidate();  
})

function formValidate() {
    const fnameValue = document.querySelector("#fname").value;
    const lnameValue = document.querySelector("#lname").value;
    const emailValue = document.querySelector("#email").value;
    const messageValue = document.querySelector("#message").value;
    const fnameError = document.querySelector(".fname-error");
    const lnameError = document.querySelector(".lname-error");
    const emailError = document.querySelector(".email-error");
    const messageError = document.querySelector(".message-error");

    if (fnameValue === "") {
        fnameError.innerText = "First Name cannot be empty";
    }
    
    if (lnameValue === "") {
        lnameError.innerText = "Last Name cannot be empty";
    }
    
    if (emailValue === "") {
        emailError.innerText = "Email cannot be empty";
    }
    
    if (messageValue === "") {
        messageError.innerText = "Message cannot be empty";
    }
    
    
}
function success() {
    const icon = document.querySelector(".icon");
    icon.style.display = "flex";
}
