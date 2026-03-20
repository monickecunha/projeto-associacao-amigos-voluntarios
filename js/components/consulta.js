
function renderConsulta() {
    paginaAtual = 'consulta';
    app.innerHTML = `
        <div class="dashboard-layout">
            <div class="sidebar">
                <div class="sidebar-header">
                    <h2>🤝 ONG</h2>
                    <p>Sistema de Voluntários</p>
                </div>
                <ul class="sidebar-menu">
                    <li><a onclick="irParaCadastro()" class="menu-item">📝 Cadastrar Voluntário</a></li>
                    <li><a onclick="irParaConsulta()" class="menu-item active">🔍 Consultar Voluntários</a></li>
                </ul>
                <button class="logout-btn" onclick="logout()">Sair</button>
            </div>
            <div class="main-content">
                <div class="page-header">
                    <h1>Consultar Voluntários</h1>
                    <p>Filtre os voluntários por tipo, profissão ou especialidade</p>
                </div>

                <div class="filters-section">
                    <div class="filters-grid">
                        <div class="filter-group">
                            <label for="filtroTipo">Tipo de Voluntário</label>
                            <select id="filtroTipo">
                                <option value="">Todos</option>
                                <option value="Pontual">Pontual (eventos)</option>
                                <option value="Sistemático">Sistemático (semanal ou mensal)</option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label for="filtroProfissao">Profissão/Especialidade</label>
                            <select id="filtroProfissao">
                                <option value="">Todas</option>
                                <option value="Dentista">Dentista</option>
                                <option value="Psicólogo">Psicólogo</option>
                                <option value="Médico">Médico</option>
                                <option value="Arquiteto">Arquiteto</option>
                                <option value="Eletricista">Eletricista</option>
                                <option value="Palestrante">Palestrante</option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label for="filtroArea">Área de Atuação</label>
                            <select id="filtroArea">
                                <option value="">Todas</option>
                                <option value="Logística">Logística</option>
                                <option value="Saúde">Saúde</option>
                                <option value="Construção">Construção</option>
                                <option value="Saúde Mental">Saúde Mental</option>
                                <option value="Manutenção">Manutenção</option>
                                <option value="Comunicação">Comunicação</option>
                                <option value="Educação">Educação</option>
                                <option value="Alimentação">Alimentação</option>
                            </select>
                        </div>
                    </div>
                    <div class="filter-actions">
                        <button class="btn-filter" onclick="aplicarFiltros()">🔎 Filtrar</button>
                        <button class="btn-reset" onclick="limparFiltros()">↻ Limpar</button>
                    </div>
                </div>

                <div class="table-container" id="tabelaResultados">
                    <!-- Tabela será inserida aqui -->
                </div>
            </div>
        </div>
    `;

    // Event listeners
    document.getElementById('filtroTipo').addEventListener('change', aplicarFiltros);
    document.getElementById('filtroProfissao').addEventListener('change', aplicarFiltros);
    document.getElementById('filtroArea').addEventListener('change', aplicarFiltros);

    // Mostra todos os voluntários inicialmente
    exibirTabela(voluntarios);
}

function exibirTabela(lista) {
    const container = document.getElementById('tabelaResultados');

    if (lista.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <h3>Nenhum voluntário encontrado</h3>
                <p>Tente ajustar os filtros ou cadastre novos voluntários</p>
            </div>
        `;
        return;
    }

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Tipo</th>
                    <th>Área de Atuação</th>
                    <th>Profissão</th>
                    <th>Horário</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
    `;

    lista.forEach(vol => {
        const tipoBadge = vol.tipo === 'Pontual' 
            ? '<span class="badge badge-warning">Pontual</span>' 
            : '<span class="badge badge-success">Sistemático</span>';
        
        const profissao = vol.profissao ? vol.profissao : '<span style="color: #999;">-</span>';

        html += `
            <tr>
                <td><strong>${vol.nome}</strong></td>
                <td>${vol.telefone}</td>
                <td>${tipoBadge}</td>
                <td>${vol.areaAtuacao}</td>
                <td>${profissao}</td>
                <td>${vol.horarioDisponivel}</td>
                <td>
                    <button class="btn btn-primary" style="padding: 5px 10px; font-size: 12px;" onclick="verDetalhes(${vol.id})">Ver Detalhes</button>
                </td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    container.innerHTML = html;
}

function aplicarFiltros() {
    const tipo = document.getElementById('filtroTipo').value;
    const profissao = document.getElementById('filtroProfissao').value;
    const area = document.getElementById('filtroArea').value;

    let filtrados = voluntarios;

    if (tipo) {
        filtrados = filtrados.filter(v => v.tipo === tipo);
    }

    if (profissao) {
        filtrados = filtrados.filter(v => v.profissao === profissao);
    }

    if (area) {
        filtrados = filtrados.filter(v => v.areaAtuacao === area);
    }

    exibirTabela(filtrados);
}