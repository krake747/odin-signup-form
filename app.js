const passwordBtn = document.querySelector("#password");
const confirmPasswordBtn = document.querySelector("#confirmPassword");
const submitFormBtn = document.querySelector("#submit-form");
const errorDiv = document.querySelector(".error");

submitFormBtn.onclick = (e) => {
    if (passwordBtn.value === "" || confirmPasswordBtn.value === "") return;

    if (passwordBtn.value !== confirmPasswordBtn.value) {
        e.preventDefault();
        errorDiv.classList.add("password-invalid");
        errorDiv.textContent = "Password mismatch! Please try again.";
    }
}