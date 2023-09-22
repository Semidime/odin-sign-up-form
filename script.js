const passwordInput = document.getElementById('password');
const passwordConfInput = document.getElementById('password_conf');
const passwordMsg = document.getElementById('password-message');
const passwordConfMsg = document.getElementById('password-conf-message');

passwordInput.addEventListener("input", (event) => {
    if(passwordInput.value.length < 6) {
        passwordInput.setCustomValidity("Password must be 6-12 characters");
        passwordMsg.textContent = "  Password must be 6-12 characters";
        passwordMsg.style.color = "darkgray";
    } else {
        passwordInput.setCustomValidity("");
        passwordMsg.textContent = "";
    }
})

passwordConfInput.addEventListener("input", (event) => {
    if(passwordConfInput.value.length >= 1 && passwordConfInput.value.length < passwordInput.value.length) {
        passwordConfInput.setCustomValidity("Passwords must be same length.");
        passwordConfMsg.textContent = "  Passwords must be same length.";
        passwordConfMsg.style.color = "darkgray";
    } else if (passwordConfInput.value.length >= passwordInput.value.length && passwordInput.value !== passwordConfInput.value) {
        passwordConfInput.setCustomValidity("Passwords do not match.");
        passwordConfMsg.textContent = "  Passwords do not match.";
        passwordConfMsg.style.color = "red";
    } else {
        passwordConfInput.setCustomValidity("");
        passwordConfMsg.textContent = "";
    }
})