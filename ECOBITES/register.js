
function register() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('createpw').value;
    var confirmPassword = document.getElementById('confirmpw').value;
    var dob = document.getElementById('dob').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var pwError = document.getElementById('pwError');
    var confirmPwError = document.getElementById('confirmPwError');
    var dobError = document.getElementById('dobError');

    nameError.textContent = '';
    emailError.textContent = '';
    pwError.textContent = '';
    confirmPwError.textContent = '';
    dobError.textContent = '';

    if (!name || !email || !password || !confirmPassword || !dob) {
        if (!name) nameError.textContent = 'Please enter your full name.';
        if (!email) emailError.textContent = 'Please enter your username.';
        if (!password) pwError.textContent = 'Please enter a password.';
        if (!confirmPassword) confirmPwError.textContent = 'Please confirm your password.';
        if (!dob) dobError.textContent = 'Please enter your date of birth.';
        return;
    }

    if (password.length < 8) {
        pwError.textContent = 'Password must be at least 8 characters long.';
        return;
    }

    if (password !== confirmPassword) {
        confirmPwError.textContent = 'Passwords do not match.';
        return;
    }

    console.log('Registration successful!');
}
