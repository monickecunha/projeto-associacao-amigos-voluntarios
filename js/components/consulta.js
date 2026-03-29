function renderConsulta() {
    paginaAtual = 'consulta';

    $('#app').html(`
        <div class="dashboard-layout">
            ${getSidebarTemplate('consulta')}
            <div class="main-content">
                <div class="page-header">
                    <h1>Consultar Voluntários</h1>
                    <p>Filtre os voluntários por tipo, profissão ou área de atuação</p>
                </div>

                <div class="card border-0 shadow-sm mb-4">
                    <div class="card-body p-4">
                        <h6 class="fw-bold mb-3">Filtros</h6>
                        <div class="row g-3">
                            <div class="col-12 col-md-4">
                                <label class="form-label fw-bold small">Tipo de Voluntário</label>
                                <select id="filtroTipo" class="form-select">
                                    <option value="">Todos</option>
                                    <option value="Pontual">Pontual (eventos)</option>
                                    <option value="Sistemático">Sistemático (semanal ou mensal)</option>
                                </select>
                            </div>
                            <div class="col-12 col-md-4">
                                <label class="form-label fw-bold small">Profissão/Especialidade</label>
                                <select id="filtroProfissao" class="form-select">
                                    <option value="">Todas</option>
                                    <option value="Dentista">Dentista</option>
                                    <option value="Psicólogo">Psicólogo</option>
                                    <option value="Médico">Médico</option>
                                    <option value="Arquiteto">Arquiteto</option>
                                    <option value="Eletricista">Eletricista</option>
                                    <option value="Palestrante">Palestrante</option>
                                </select>
                            </div>
                            <div class="col-12 col-md-4">
                                <label class="form-label fw-bold small">Área de Atuação</label>
                                <select id="filtroArea" class="form-select">
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
                        <div class="d-flex gap-2 mt-3">
                            <button class="btn btn-primary" onclick="aplicarFiltros()">🔎 Filtrar</button>
                            <button class="btn btn-outline-secondary" onclick="limparFiltros()">↻ Limpar</button>
                        </div>
                    </div>
                </div>

                <div id="tabelaResultados"></div>

                <footer class="mt-5 pt-3 border-top text-center text-muted small">
                    Associação Amigos Voluntários &mdash; Sistema de Gestão de Voluntários<br>
                    <span class="text-muted">Desenvolvido por: <strong>Monicke Oliveira da Cunha, Bruno Rigo Ghiggi, Bernardo Davi Pandolfo e Lucas Cutinaz</strong></span>
                </footer>
            </div>
        </div>
    `);

    $('#filtroTipo').on('change', aplicarFiltros);
    $('#filtroProfissao').on('change', aplicarFiltros);
    $('#filtroArea').on('change', aplicarFiltros);

    exibirTabela(voluntarios);
}

function exibirTabela(lista) {
    if (lista.length === 0) {
        $('#tabelaResultados').html(`
            <div class="card border-0 shadow-sm">
                <div class="card-body text-center py-5">
                    <div style="font-size: 48px;">📭</div>
                    <h5 class="mt-3">Nenhum voluntário encontrado</h5>
                    <p class="text-muted">Tente ajustar os filtros ou cadastre novos voluntários</p>
                </div>
            </div>
        `);
        return;
    }

    let linhas = '';

    $.each(lista, function (index, vol) {
        const tipoBadge = vol.tipo === 'Pontual'
            ? '<span class="badge bg-warning text-dark">Pontual</span>'
            : '<span class="badge bg-success">Sistemático</span>';

        const profissao = vol.profissao
            ? vol.profissao
            : '<span class="text-muted">-</span>';

        const horario = vol.horarioDisponivel ? vol.horarioDisponivel : '-';

        linhas += `
            <tr>
                <td class="fw-bold">${vol.nome}</td>
                <td>${vol.telefone}</td>
                <td>${tipoBadge}</td>
                <td>${vol.areaAtuacao}</td>
                <td>${profissao}</td>
                <td>${horario}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" onclick="verDetalhes(${vol.id})">
                        Ver Detalhes
                    </button>
                </td>
            </tr>
        `;
    });

    $('#tabelaResultados').html(`
        <div class="card border-0 shadow-sm">
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover mb-0">
                        <thead class="table-light">
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
                        <tbody>${linhas}</tbody>
                    </table>
                </div>
                <div class="px-3 py-2 text-muted small border-top">
                    ${lista.length} voluntário(s) encontrado(s)
                </div>
            </div>
        </div>
    `);
}

function aplicarFiltros() {
    const tipo      = $('#filtroTipo').val();
    const profissao = $('#filtroProfissao').val();
    const area      = $('#filtroArea').val();

    let filtrados = voluntarios;

    if (tipo) {
        filtrados = $.grep(filtrados, function (v) { return v.tipo === tipo; });
    }
    if (profissao) {
        filtrados = $.grep(filtrados, function (v) { return v.profissao === profissao; });
    }
    if (area) {
        filtrados = $.grep(filtrados, function (v) { return v.areaAtuacao === area; });
    }

    exibirTabela(filtrados);
}

function limparFiltros() {
    $('#filtroTipo').val('');
    $('#filtroProfissao').val('');
    $('#filtroArea').val('');
    exibirTabela(voluntarios);
}
