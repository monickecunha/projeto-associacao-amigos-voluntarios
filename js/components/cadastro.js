function getCadastroTemplate() {
    return `
        <div class="container py-5">
            <div class="card shadow border-0">
                <div class="card-header bg-primary text-white p-3">
                    <h3 class="mb-0">Cadastro de Voluntário</h3>
                </div>
                <div class="card-body p-4">
                    <form id="formCadastro">
                        <h5 class="text-primary border-bottom pb-2 mb-3">Dados Pessoais</h5>
                        <div class="row g-3">
                            <div class="col-12">
                                <label class="form-label fw-bold">Nome Completo *</label>
                                <input type="text" id="nome" class="form-control" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Telefone *</label>
                                <input type="tel" id="telefone" class="form-control" placeholder="(00) 00000-0000" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Rede Social (@)</label>
                                <input type="text" id="redeSocial" class="form-control" placeholder="@usuario">
                            </div>
                        </div>

                        <h5 class="text-primary border-bottom pb-2 mt-4 mb-3">Endereço</h5>
                        <div class="row g-3">
                            <div class="col-4">
                                <label class="form-label fw-bold">CEP</label>
                                <input type="text" id="cep" class="form-control">
                            </div>
                            <div class="col-md-8">
                                <label class="form-label fw-bold">Rua</label>
                                <input type="text" id="rua" class="form-control">
                            </div>
                            <div class="col-md-2">
                                <label class="form-label fw-bold">Número</label>
                                <input type="text" id="numero" class="form-control">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label fw-bold">Complemento</label>
                                <input type="text" id="complemento" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Bairro</label>
                                <input type="text" id="bairro" class="form-control">
                            </div>
                            <div class="col-md-8">
                                <label class="form-label fw-bold">Cidade</label>
                                <input type="text" id="cidade" class="form-control">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label fw-bold">UF</label>
                                <input type="text" id="uf" class="form-control">
                            </div>

                        </div>

                        <h5 class="text-primary border-bottom pb-2 mt-4 mb-3">Perfil Profissional</h5>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Escolaridade</label>
                                <select id="escolaridade" class="form-select">
                                    <option value="">Selecione...</option>
                                    <option value="Fundamental">Ensino Fundamental incompleto</option>
                                    <option value="Fundamental">Ensino Fundamental</option>
                                    <option value="Medio">Ensino Médio incompleto</option>
                                    <option value="Medio">Ensino Médio</option>
                                    <option value="Superior">Ensino Superior incompleto</option>
                                    <option value="Superior">Ensino Superior</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Formação</label>
                                <select id="formacao" class="form-select">
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
                            <div class="col-md-4 d-none" id="divFormacaoOutro">
                                <label class="form-label fw-bold">Qual formação?</label>
                                <input type="text" id="formacaoOutro" class="form-control">
                            </div>
                            <div class="col-md-12">
                                <label class="form-label fw-bold">Área de Atuação na ONG *</label>
                                <input type="text" id="areaAtuacao" class="form-control" placeholder="Ex: Recreação, Administrativo..." required>
                            </div>
                        </div>

                        <h5 class="text-primary border-bottom pb-2 mt-4 mb-3">Disponibilidade e Preferências</h5>
                        <div class="row g-3">
                            <div class="col-md-4">
                                <label class="form-label fw-bold">Tipo de Voluntário *</label>
                                <select id="tipoVoluntario" class="form-select" required>
                                    <option value="Pontual">Pontual (Eventos)</option>
                                    <option value="Sistematico">Sistemático (Semanal/Mensal)</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label fw-bold">Horário Disponível</label>
                                <input type="text" id="horario" class="form-control" placeholder="Ex: Sábados de manhã">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label fw-bold">Público de Preferência</label>
                                <select id="publico" class="form-select">
                                    <option value="">Nenhuma</option>
                                    <option value="Crianças">Crianças</option>
                                    <option value="Adolescentes">Adolescentes</option>
                                    <option value="Idosos">Idosos</option>
                                    <option value="Todos">Todos</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Possui experiência em voluntariado?</label>
                                <select id="temExperiencia" class="form-select">
                                    <option value="nao">Não</option>
                                    <option value="sim">Sim</option>
                                </select>
                            </div>
                            <div class="col-md-6 d-none" id="divOndeExperiencia">
                                <label class="form-label fw-bold">Onde?</label>
                                <input type="text" id="ondeExperiencia" class="form-control">
                            </div>
                            <div class="col-md-12">
                                <label class="form-label fw-bold">Seu Hobby</label>
                                <input type="text" id="hobby" class="form-control">
                            </div>
                        </div>

                        <div class="mt-5">
                            <button type="submit" class="btn btn-primary btn-lg px-5">Salvar Cadastro</button>
                            <button type="button" class="btn btn-light btn-lg px-4 ms-2 btn-cancelar">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
}
function configurarEventosCadastro() {
    $('#temExperiencia').on('change', function() {
        const temExperiencia = $(this).val() === 'sim';
        $('#divOndeExperiencia').toggleClass('d-none', !temExperiencia);
    });

    $('#formacao').on('change', function() {
        const mostrarOutro = $(this).val() === 'Outro';
        $('#divFormacaoOutro').toggleClass('d-none', !mostrarOutro);
    });
}

function salvarVoluntario(e) {
    e.preventDefault();

    const novoVoluntario = {
        id: voluntarios.length + 1,
        nome: $('#nome').val(),
        telefone: $('#telefone').val(),
        redeSocial: $('#redeSocial').val(),
        areaAtuacao: $('#areaAtuacao').val(),
        cep: $('#cep').val(),
        rua: $('#rua').val(),
        numero: $('#numero').val(),
        complemento: $('#complemento').val(),
        bairro: $('#bairro').val(),
        cidade: $('#cidade').val(),
        uf: $('#uf').val(),
        escolaridade: $('#escolaridade').val(),
        formacao: $('#formacao').val() === 'Outro' ? $('#formacaoOutro').val() : $('#formacao').val(),
        tipoVoluntario: $('#tipoVoluntario').val(),
        horario: $('#horario').val(),
        publico: $('#publico').val(),
        temExperiencia: $('#temExperiencia').val() === 'sim',
        ondeExperiencia: $('#ondeExperiencia').val(),
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

    $('.btn-cancelar').on('click', function() {
        if(confirm('Deseja descartar as alterações?')) {
            renderDashboard();
        }
    });
}
