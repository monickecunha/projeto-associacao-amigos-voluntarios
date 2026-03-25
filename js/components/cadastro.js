function getCadastroTemplate() {
    return `
        <div class="dashboard-layout">
            ${getSidebarTemplate('cadastro')}
            <div class="main-content">
                <div class="page-header">
                    <h1>Cadastrar Voluntário</h1>
                    <p>Preencha os dados para registrar um novo voluntário</p>
                </div>

                <div class="card border-0 shadow-sm">
                    <div class="card-body p-4">
                        <form id="formCadastro">

                            <h6 class="text-primary border-bottom pb-2 mb-3 fw-bold">Dados Pessoais</h6>
                            <div class="row g-3 mb-4">
                                <div class="col-12">
                                    <label class="form-label fw-bold">Nome Completo *</label>
                                    <input type="text" id="nome" class="form-control" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="form-label fw-bold">Telefone *</label>
                                    <input type="tel" id="telefone" class="form-control" placeholder="(00) 00000-0000" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="form-label fw-bold">Rede Social (@)</label>
                                    <input type="text" id="redeSocial" class="form-control" placeholder="@usuario">
                                </div>
                            </div>

                            <h6 class="text-primary border-bottom pb-2 mb-3 fw-bold">Endereço</h6>
                            <div class="row g-3 mb-4">
                                <div class="col-12 col-md-4">
                                    <label class="form-label fw-bold">CEP</label>
                                    <input type="text" id="cep" class="form-control" placeholder="00000-000">
                                </div>
                                <div class="col-12 col-md-8">
                                    <label class="form-label fw-bold">Rua</label>
                                    <input type="text" id="rua" class="form-control">
                                </div>
                                <div class="col-12 col-md-3">
                                    <label class="form-label fw-bold">Número</label>
                                    <input type="text" id="numero" class="form-control">
                                </div>
                                <div class="col-12 col-md-4">
                                    <label class="form-label fw-bold">Complemento</label>
                                    <input type="text" id="complemento" class="form-control">
                                </div>
                                <div class="col-12 col-md-5">
                                    <label class="form-label fw-bold">Bairro</label>
                                    <input type="text" id="bairro" class="form-control">
                                </div>
                                <div class="col-12 col-md-8">
                                    <label class="form-label fw-bold">Cidade</label>
                                    <input type="text" id="cidade" class="form-control">
                                </div>
                                <div class="col-12 col-md-4">
                                    <label class="form-label fw-bold">UF</label>
                                    <input type="text" id="uf" class="form-control text-uppercase" maxlength="2" placeholder="SP">
                                </div>
                            </div>

                            <h6 class="text-primary border-bottom pb-2 mb-3 fw-bold">Perfil Profissional</h6>
                            <div class="row g-3 mb-4">
                                <div class="col-12 col-md-6">
                                    <label class="form-label fw-bold">Escolaridade</label>
                                    <select id="escolaridade" class="form-select">
                                        <option value="">Selecione...</option>
                                        <option value="Fundamental Incompleto">Ensino Fundamental incompleto</option>
                                        <option value="Fundamental">Ensino Fundamental</option>
                                        <option value="Medio Incompleto">Ensino Médio incompleto</option>
                                        <option value="Medio">Ensino Médio</option>
                                        <option value="Superior Incompleto">Ensino Superior incompleto</option>
                                        <option value="Superior">Ensino Superior</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="form-label fw-bold">Profissão / Formação</label>
                                    <select id="profissao" class="form-select">
                                        <option value="">Nenhuma</option>
                                        <option value="Dentista">Dentista</option>
                                        <option value="Psicólogo">Psicólogo</option>
                                        <option value="Médico">Médico</option>
                                        <option value="Arquiteto">Arquiteto</option>
                                        <option value="Eletricista">Eletricista</option>
                                        <option value="Palestrante">Palestrante</option>
                                        <option value="Outro">Outro (especificar)</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-6 d-none" id="divProfissaoOutro">
                                    <label class="form-label fw-bold">Qual profissão/formação?</label>
                                    <input type="text" id="profissaoOutro" class="form-control">
                                </div>
                                <div class="col-12">
                                    <label class="form-label fw-bold">Área de Atuação na ONG *</label>
                                    <input type="text" id="areaAtuacao" class="form-control"
                                        placeholder="Ex: Recreação, Administrativo, Saúde..." required>
                                </div>
                            </div>

                            <h6 class="text-primary border-bottom pb-2 mb-3 fw-bold">Disponibilidade e Preferências</h6>
                            <div class="row g-3 mb-4">
                                <div class="col-12 col-md-4">
                                    <label class="form-label fw-bold">Tipo de Voluntário *</label>
                                    <select id="tipo" class="form-select" required>
                                        <option value="Pontual">Pontual (Eventos)</option>
                                        <option value="Sistemático">Sistemático (Semanal/Mensal)</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-4">
                                    <label class="form-label fw-bold">Horário Disponível</label>
                                    <input type="text" id="horarioDisponivel" class="form-control"
                                        placeholder="Ex: Sábados de manhã">
                                </div>
                                <div class="col-12 col-md-4">
                                    <label class="form-label fw-bold">Público de Preferência</label>
                                    <select id="publicoPreferencia" class="form-select">
                                        <option value="">Nenhuma</option>
                                        <option value="Crianças">Crianças</option>
                                        <option value="Adolescentes">Adolescentes</option>
                                        <option value="Idosos">Idosos</option>
                                        <option value="Famílias">Famílias</option>
                                        <option value="Comunidades">Comunidades</option>
                                        <option value="Todos">Todos</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="form-label fw-bold">Possui experiência em voluntariado?</label>
                                    <select id="temExperiencia" class="form-select">
                                        <option value="nao">Não</option>
                                        <option value="sim">Sim</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-6 d-none" id="divOndeExperiencia">
                                    <label class="form-label fw-bold">Onde?</label>
                                    <input type="text" id="localExperiencia" class="form-control">
                                </div>
                                <div class="col-12">
                                    <label class="form-label fw-bold">Hobby</label>
                                    <input type="text" id="hobby" class="form-control">
                                </div>
                            </div>

                            <div class="d-flex flex-wrap gap-2 pt-2">
                                <button type="submit" class="btn btn-primary btn-lg px-5">
                                    💾 Salvar Cadastro
                                </button>
                                <button type="button" class="btn btn-outline-secondary btn-lg px-4 btn-cancelar">
                                    Cancelar
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

                <footer class="mt-5 pt-3 border-top text-center text-muted small">
                    Associação Amigos Voluntários &mdash; Sistema de Gestão de Voluntários<br>
                    <span class="text-muted">Desenvolvido por: <strong>Monicke Oliveira da Cunha, Bruno Rigo Ghiggi, Bernardo Davi Pandolfo e Lucas Cutinaz</strong></span>
                </footer>
            </div>
        </div>
    `;
}

function configurarEventosCadastro() {
    $('#temExperiencia').on('change', function () {
        const temExperiencia = $(this).val() === 'sim';
        $('#divOndeExperiencia').toggleClass('d-none', !temExperiencia);
    });

    $('#profissao').on('change', function () {
        const mostrarOutro = $(this).val() === 'Outro';
        $('#divProfissaoOutro').toggleClass('d-none', !mostrarOutro);
    });
}

function salvarVoluntario(e) {
    e.preventDefault();

    const novoVoluntario = {
        id: voluntarios.length + 1,
        nome: $('#nome').val(),
        telefone: $('#telefone').val(),
        redeSocial: $('#redeSocial').val(),
        cep: $('#cep').val(),
        rua: $('#rua').val(),
        numero: $('#numero').val(),
        complemento: $('#complemento').val(),
        bairro: $('#bairro').val(),
        cidade: $('#cidade').val(),
        uf: $('#uf').val().toUpperCase(),
        escolaridade: $('#escolaridade').val(),
        profissao: $('#profissao').val() === 'Outro' ? $('#profissaoOutro').val() : $('#profissao').val(),
        areaAtuacao: $('#areaAtuacao').val(),
        tipo: $('#tipo').val(),
        horarioDisponivel: $('#horarioDisponivel').val(),
        publicoPreferencia: $('#publicoPreferencia').val(),
        temExperiencia: $('#temExperiencia').val() === 'sim',
        localExperiencia: $('#localExperiencia').val(),
        hobby: $('#hobby').val()
    };

    voluntarios.push(novoVoluntario);
    setItem('listaVoluntarios', JSON.stringify(voluntarios));

    alert('Voluntário cadastrado com sucesso!');
    renderDashboard();
}

function renderCadastro() {
    paginaAtual = 'cadastro';
    $('#app').html(getCadastroTemplate());
    configurarEventosCadastro();
    $('#formCadastro').on('submit', salvarVoluntario);

    $('.btn-cancelar').on('click', function () {
        if (confirm('Deseja descartar as alterações?')) {
            renderDashboard();
        }
    });
}
