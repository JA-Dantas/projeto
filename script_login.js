            $(document).ready(function() {
            $('#login-form').submit(function(event) {
                event.preventDefault();
                clearErrors();

                let username = $('#username').val();
                let password = $('#password').val();
                let isValid = true;

                if (!username || !validateEmail(username)) {
                    showError('username', 'Por favor, insira um e-mail válido.');
                    isValid = false;
                }

                if (!password || password.length < 6) {
                    showError('password', 'A senha deve ter pelo menos 6 caracteres.');
                    isValid = false;
                }

                if (isValid) {
                    localStorage.setItem('userEmail', username);
                    alert('Login realizado com sucesso!');
                }
            });

            function showError(element, message) {
                $(`#${element}-error`).text(message);
            }

            function clearErrors() {
                $('.error-message').text('');
            }

            function validateEmail(email) {
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                return emailRegex.test(email);
            }
        });