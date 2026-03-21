function getLoginTemplate() {
    return `
        <div class="login-container">
            <div class="login-box">
                <h1>Associação<br> Amigos Voluntários</h1>
                <p>Sistema de Gestão de Voluntários - ONG</p>
                <form id="loginForm">
                    <div class="form-group">
                        <label for="usuario">Usuário:</label>
                        <input type="text" id="usuario" placeholder="Digite seu usuário" required>
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha" placeholder="Digite sua senha" required>
                    </div>
                    <button type="submit" class="login-btn">Entrar</button>
                </form>
            </div>
        </div>
    `;
}

function handleLogin(e) {
    e.preventDefault();

    const usuario = $('#usuario').val().trim();
    const senha = $('#senha').val();

    if (usuario === "admin" && senha === "123456") {
        usuarioLogado = usuario;

        localStorage.setItem('usuarioLogado', usuario);
       
        voluntarios = JSON.parse(JSON.stringify(VOLUNTARIOS_INICIAIS));
        renderDashboard(); 
    } else {
        alert("Usuário ou senha inválidos!");
    }
}

function renderLogin() {
    paginaAtual = "login";
    $('#app').html(getLoginTemplate());
    $('#loginForm').on('submit', handleLogin);
}