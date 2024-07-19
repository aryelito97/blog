document.getElementById('email').addEventListener('input', function() {
    const emailField = this;
    const emailValue = emailField.value;
    if (emailValue.includes('@')) {
        emailField.style.borderColor = 'green';
    } else {
        emailField.style.borderColor = 'red';
    }
});
