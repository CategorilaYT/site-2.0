function signup() {
    var signupUsername = document.getElementById('signup-username').value;
    var signupPassword = document.getElementById('signup-password').value;

    // Verifica se o usuário já existe
    if (localStorage.getItem(signupUsername)) {
        alert('Usuário já cadastrado. Por favor, escolha outro nome de usuário.');
    } else {
        // Armazena os dados do usuário no localStorage
        localStorage.setItem(signupUsername, signupPassword);
        alert('Cadastro realizado com sucesso! Faça o login.');
    }
}

function login() {
    var loginUsername = document.getElementById('login-username').value;
    var loginPassword = document.getElementById('login-password').value;
    var errorMessage = document.getElementById('error-message');

    // Verifica se o usuário existe e se a senha está correta
    if (localStorage.getItem(loginUsername) === loginPassword) {
        alert('Login bem-sucedido!');
        // Aqui você pode redirecionar para outra página ou executar outras ações após o login.
        window.location.href = 'sucesso.html';
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos. Tente novamente.';
    }
}

