const passwordInput = document.getElementById('password');
const passwordConfInput = document.getElementById('password_conf');
const passwordMismatchMsg = document.getElementById('password-mismatch');



passwordConfInput.addEventListener("input", (event) => {
    if (passwordConfInput.value.length >= passwordInput.value.length && passwordInput.value !== passwordConfInput.value) {
        passwordConfInput.setCustomValidity("Passwords do not match.");
        passwordMismatchMsg.textContent = "  Passwords do not match.";
    } else {
        passwordConfInput.setCustomValidity("");
        passwordMismatchMsg.textContent = "";
    }
})