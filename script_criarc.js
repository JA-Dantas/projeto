const form = document.getElementById('createAccountForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const country = document.getElementById('country');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    clearErrors();
    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(username.value)) {
        isValid = false;
        showError('usernameError', 'Por favor, insira um e-mail válido.');
    }

    if (password.value.length < 6) {
        isValid = false;
        showError('passwordError', 'A senha deve ter pelo menos 6 caracteres.');
    }

    if (password.value !== confirmPassword.value) {
        isValid = false;
        showError('confirmPasswordError', 'As senhas não coincidem.');
    }

    if (country.value === "") {
        isValid = false;
        showError('countryError', 'Por favor, selecione um país.');
    }

    if (isValid) {
        const formData = {
            username: username.value,
            password: password.value,
            country: country.value
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('username', username.value);
            alert("Conta criada com sucesso!");
            form.submit();
        })
        .catch((error) => {
            console.error('Erro ao criar conta:', error);
        });
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearErrors() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('countryError').textContent = '';
}
