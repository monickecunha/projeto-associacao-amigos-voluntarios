function getLoginTemplate() {
  return `
        <div class="login-container d-flex align-items-center justify-content-center bg-primary">
            <div class="card login-box shadow-lg border-0" style="width: 100%; max-width: 400px;">
                <div class="card-body p-5">
                    <h1 class="text-center text-primary mb-2">
                    <span class="d-block fw-light fs-5 text-muted">Associação</span>
    
                    <span class="d-block fw-bold fs-4">Amigos Voluntários</span>
                    </h1>
                    <p class="text-center text-muted mb-4">Sistema de Gestão de Voluntários</p>
                    <form id="loginForm">
                        <div class="form-group mb-3">
                            <label class="form-label fw-bold" for="usuario" >Usuário:</label>
                            <input type="text" 
                            id="usuario" 
                            class="form-control form-control-lg"
                            placeholder="Digite seu usuário" 
                            required
                            >
                            
                        </div>
                        <div class="form-group mb-4">
                            <label for="senha" class="form-label fw-bold">Senha:</label>
                            <input type="password" 
                            id="senha" 
                            class="form-control form-control-lg"
                            placeholder="Digite sua senha" 
                            required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg w-100 fw-bold">Entrar</button>
                        <div style ="margin-top: 20px; color: #666;">
                            <p><strong>Usuário:</strong> admin<br><strong>Senha:</strong> 123456</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function handleLogin(e) {
  e.preventDefault();

  const usuario = $("#usuario").val().trim();
  const senha = $("#senha").val();

  if (usuario === "admin" && senha === "123456") {
    usuarioLogado = usuario;

    setItem("usuarioLogado", usuario);

    voluntarios = JSON.parse(JSON.stringify(VOLUNTARIOS_INICIAIS));
    renderDashboard();
  } else {
    alert("Usuário ou senha inválidos!");
  }
}

function renderLogin() {
  paginaAtual = "login";
  $("#app").html(getLoginTemplate());
  $("#loginForm").on("submit", handleLogin);
}
