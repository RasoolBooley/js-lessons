//  Dont trust user input

// It is vital to vaildate user input before sending it to a sever and again once it arrives there, but lets take things one step at a time

// Validation can be used as a simple as making sure that the type of data is correct (number vs string,, valid email address, etc.) It can also be more complex - checking for password strength, or oarsing a comment to make sure it contains no url's

// during input

const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');

passwordInput.addEventListener('input', ($event) => {
    if ($event.target.value.length >= 6 && $event.target.value.length <= 12) {
        submitButton.removeAttribute('disabled');
    }
    else {
        submitButton.setAttribute('disabled', 'true');
    }
});

const errorMsg = document.getElementById('error-message');
const confirmPassword = document.getElementById('confirm-password');

confirmPassword.addEventListener('blur', () => {
    if (passwordInput.value === confirmPassword.value) {
        passwordInput.style.border = 'solid blue';
        confirmPassword.style.border = 'solid blue';
        errorMsg.style.display = 'none';
    }
    else {
        passwordInput.style.border = 'solid red';
        confirmPassword.style.border = 'solid red';
        errorMsg.style.display = 'inline';
    }
});
