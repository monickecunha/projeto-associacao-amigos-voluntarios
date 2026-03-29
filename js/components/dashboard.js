// js/components/dashboard.js

function getSidebarTemplate(paginaAtiva) {
    return `
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary d-lg-none px-3">
            <span class="navbar-brand fw-bold">🤝 Amigos Voluntários</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuMobile">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menuMobile">
                <ul class="navbar-nav me-auto mt-2">
                    <li class="nav-item">
                        <a class="nav-link ${paginaAtiva === 'dashboard' ? 'active fw-bold' : ''}" onclick="irParaDashboard()">🏠 Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${paginaAtiva === 'cadastro' ? 'active fw-bold' : ''}" onclick="irParaCadastro()">📝 Cadastrar Voluntário</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${paginaAtiva === 'consulta' ? 'active fw-bold' : ''}" onclick="irParaConsulta()">🔍 Consultar Voluntários</a>
                    </li>
                </ul>
                <button class="btn btn-danger btn-sm my-2" onclick="logout()">Sair</button>
            </div>
        </nav>

        <div class="sidebar d-none d-lg-flex flex-column">
            <div class="sidebar-header">
                <div class="d-flex align-items-center gap-2 mb-1">
                    <span style="font-size: 28px;">🤝</span>
                    <div>
                        <div class="fw-bold" style="font-size: 15px; line-height: 1.2;">Amigos Voluntários</div>
                        <div style="font-size: 11px; opacity: 0.7;">Sistema de Voluntários</div>
                    </div>
                </div>
            </div>
            <ul class="sidebar-menu flex-grow-1">
                <li>
                    <a onclick="irParaDashboard()" class="menu-item ${paginaAtiva === 'dashboard' ? 'active' : ''}">
                        🏠 Dashboard
                    </a>
                </li>
                <li>
                    <a onclick="irParaCadastro()" class="menu-item ${paginaAtiva === 'cadastro' ? 'active' : ''}">
                        📝 Cadastrar Voluntário
                    </a>
                </li>
                <li>
                    <a onclick="irParaConsulta()" class="menu-item ${paginaAtiva === 'consulta' ? 'active' : ''}">
                        🔍 Consultar Voluntários
                    </a>
                </li>
            </ul>
            <div class="p-2">
                <div class="text-white-50 mb-2" style="font-size: 12px;">
                    Logado como: <strong class="text-white">${usuarioLogado}</strong>
                </div>
                <button class="logout-btn w-100" onclick="logout()">Sair</button>
            </div>
        </div>
    `;
}

function renderDashboard() {
    paginaAtual = 'dashboard';

    const total = voluntarios.length;
    const sistematicos = $.grep(voluntarios, function(v) { return v.tipo === 'Sistemático'; }).length;
    const pontuais     = $.grep(voluntarios, function(v) { return v.tipo === 'Pontual'; }).length;
    const comProfissao = $.grep(voluntarios, function(v) { return v.profissao && v.profissao !== ''; }).length;

    $('#app').html(`
        <div class="dashboard-layout">
            ${getSidebarTemplate('dashboard')}
            <div class="main-content">
                <div class="page-header">
                    <h1>Dashboard</h1>
                    <p>Bem-vindo ao sistema de gestão de voluntários</p>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-12 col-sm-6 col-xl-3">
                        <div class="card border-0 shadow-sm h-100">
                            <div class="card-body d-flex align-items-center gap-3">
                                <div class="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center" style="width:56px;height:56px;font-size:24px;">🙋</div>
                                <div>
                                    <div class="fw-bold fs-3 text-primary">${total}</div>
                                    <div class="text-muted small">Total de Voluntários</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-xl-3">
                        <div class="card border-0 shadow-sm h-100">
                            <div class="card-body d-flex align-items-center gap-3">
                                <div class="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center" style="width:56px;height:56px;font-size:24px;">📅</div>
                                <div>
                                    <div class="fw-bold fs-3 text-success">${sistematicos}</div>
                                    <div class="text-muted small">Sistemáticos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-xl-3">
                        <div class="card border-0 shadow-sm h-100">
                            <div class="card-body d-flex align-items-center gap-3">
                                <div class="rounded-circle bg-warning bg-opacity-10 d-flex align-items-center justify-content-center" style="width:56px;height:56px;font-size:24px;">⚡</div>
                                <div>
                                    <div class="fw-bold fs-3 text-warning">${pontuais}</div>
                                    <div class="text-muted small">Pontuais</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-xl-3">
                        <div class="card border-0 shadow-sm h-100">
                            <div class="card-body d-flex align-items-center gap-3">
                                <div class="rounded-circle bg-info bg-opacity-10 d-flex align-items-center justify-content-center" style="width:56px;height:56px;font-size:24px;">🎓</div>
                                <div>
                                    <div class="fw-bold fs-3 text-info">${comProfissao}</div>
                                    <div class="text-muted small">Com Profissão</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card border-0 shadow-sm">
                    <div class="card-body p-4">
                        <h5 class="card-title mb-3">Acesso Rápido</h5>
                        <div class="d-flex flex-wrap gap-3">
                            <button class="btn btn-primary px-4" onclick="irParaCadastro()">
                                📝 Cadastrar Novo Voluntário
                            </button>
                            <button class="btn btn-outline-primary px-4" onclick="irParaConsulta()">
                                🔍 Consultar Voluntários
                            </button>
                        </div>
                    </div>
                </div>

                <footer class="mt-5 pt-3 border-top text-center text-muted small">
                    Associação Amigos Voluntários &mdash; Sistema de Gestão de Voluntários<br>
                    <span class="text-muted">Desenvolvido por: <strong>Monicke Oliveira da Cunha, Bruno Rigo Ghiggi, Bernardo Davi Pandolfo e Lucas Curtinaz</strong></span>
                </footer>
            </div>
        </div>
    `);
}
