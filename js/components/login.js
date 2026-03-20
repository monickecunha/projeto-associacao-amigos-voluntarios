function renderLogin() {
    paginaAtual = 'login';
    app.innerHTML = `
        <div class="login-container">
            <div class="login-box">
                <h1>🤝 Voluntários</h1>
                <p>Sistema de Gestão de Voluntários - ONG</p>
                <form id="loginForm">
                    <div class="form-group">
                        <label for="usuario">Usuário:</label>
                        <input 
                            type="text" 
                            id="usuario" 
                            placeholder="Digite seu usuário"
                            required
                        >
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha:</label>
                        <input 
                            type="password" 
                            id="senha" 
                            placeholder="Digite sua senha"
                            required
                        >
                    </div>
                    <button type="submit" class="login-btn">Entrar</button>
                </form>
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                    <p><strong>Credenciais de teste:</strong></p>
                    <p>Usuário: <strong>admin</strong></p>
                    <p>Senha: <strong>123456</strong></p>
                </div>
            </div>
        </div>
    `;

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value.trim();
        const senha = document.getElementById('senha').value;

        if (usuario === 'admin' && senha === '123456') {
            usuarioLogado = usuario;
            voluntarios = JSON.parse(JSON.stringify(VOLUNTARIOS_INICIAIS));
            renderDashboard();
        } else {
            alert('Usuário ou senha inválidos!\n\nUse: admin / 123456');
        }
    });
}