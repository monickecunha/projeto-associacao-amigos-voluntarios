function getLoginTemplate() {
    return `
        <div class="login-container d-flex align-items-center justify-content-center min-vh-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
                        <div class="card border-0 shadow-lg">
                            <div class="card-body p-4 p-sm-5">
                                <div class="text-center mb-4">
                                    <div style="font-size: 48px;">🤝</div>
                                    <span class="d-block fw-light fs-6 text-muted">Associação</span>
                                    <span class="d-block fw-bold fs-4 text-primary">Amigos Voluntários</span>
                                    <p class="text-muted mt-1 mb-0 small">Sistema de Gestão de Voluntários</p>
                                </div>
                                <form id="loginForm">
                                    <div class="mb-3">
                                        <label class="form-label fw-bold" for="usuario">Usuário</label>
                                        <input type="text"
                                            id="usuario"
                                            class="form-control form-control-lg"
                                            placeholder="Digite seu usuário"
                                            required>
                                    </div>
                                    <div class="mb-4">
                                        <label for="senha" class="form-label fw-bold">Senha</label>
                                        <input type="password"
                                            id="senha"
                                            class="form-control form-control-lg"
                                            placeholder="Digite sua senha"
                                            required>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-lg w-100 fw-bold">
                                        Entrar
                                    </button>
                                    <div class="alert alert-info mt-3 mb-0 small py-2">
                                        <strong>Usuário:</strong> admin &nbsp;|&nbsp; <strong>Senha:</strong> 123456
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function handleLogin(e) {
    e.preventDefault();

    const usuario = $('#usuario').val().trim();
    const senha   = $('#senha').val();

    if (usuario === 'admin' && senha === '123456') {
        usuarioLogado = usuario;
        setItem('usuarioLogado', usuario);
        renderDashboard();
    } else {
        alert('Usuário ou senha inválidos!');
    }
}

function renderLogin() {
    paginaAtual = 'login';
    $('#app').html(getLoginTemplate());
    $('#loginForm').on('submit', handleLogin);
}
