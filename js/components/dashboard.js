function renderDashboard() {
    paginaAtual = 'dashboard';
    app.innerHTML = `
        <div class="dashboard-layout">
            <div class="sidebar">
                <div class="sidebar-header">
                    <h2>🤝 ONG</h2>
                    <p>Sistema de Voluntários</p>
                </div>
                <ul class="sidebar-menu">
                    <li><a onclick="irParaCadastro()" class="menu-item">📝 Cadastrar Voluntário</a></li>
                    <li><a onclick="irParaConsulta()" class="menu-item">🔍 Consultar Voluntários</a></li>
                </ul>
                <button class="logout-btn" onclick="logout()">Sair</button>
            </div>
            <div class="main-content">
                <div class="page-header">
                    <h1>Bem-vindo ao Sistema</h1>
                    <p>Gerencie os voluntários da ONG de forma simples e eficiente</p>
                </div>
                <div class="form-container">
                    <h2>Dashboard</h2>
                    <p>Total de voluntários cadastrados: <strong>${voluntarios.length}</strong></p>
                    <p style="margin-top: 20px; color: #666;">Use o menu lateral para cadastrar novos voluntários ou consultar os existentes.</p>
                </div>
            </div>
        </div>
    `;
}