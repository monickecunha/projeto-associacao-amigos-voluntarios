function renderCadastro() {
    paginaAtual = 'cadastro';
    app.innerHTML = `
        <div class="dashboard-layout">
            <div class="sidebar">
                <div class="sidebar-header">
                    <h2>🤝 ONG</h2>
                    <p>Sistema de Voluntários</p>
                </div>
                <ul class="sidebar-menu">
                    <li><a onclick="irParaCadastro()" class="menu-item active">📝 Cadastrar Voluntário</a></li>
                    <li><a onclick="irParaConsulta()" class="menu-item">🔍 Consultar Voluntários</a></li>
                </ul>
                <button class="logout-btn" onclick="logout()">Sair</button>
            </div>
            <div class="main-content">
                <div class="page-header">
                    <h1>Cadastrar Novo Voluntário</h1>
                    <p>Preencha o formulário abaixo com os dados do novo voluntário</p>
                </div>
                <div class="form-container">
                    <form id="formCadastro">
                        <div class="form-row">
                            <div class="form-group-full">
                                <label for="nome">Nome *</label>
                                <input type="text" id="nome" name="nome" required>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group-full">
                                <label for="telefone">Telefone *</label>
                                <input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999" required>
                            </div>
                            <div class="form-group-full">
                                <label for="redeSocial">Rede Social (@) *</label>
                                <input type="text" id="redeSocial" name="redeSocial" placeholder="@seu_usuario" required>
                            </div>
                        </div>

                        <div class="form-row full">
                            <div class="form-group-full">
                                <label for="endereco">Endereço *</label>
                                <input type="text" id="endereco" name="endereco" placeholder="Rua, número - Cidade, Estado" required>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group-full">
                                <label for="areaAtuacao">Área de Atuação *</label>
                                <select id="areaAtuacao" name="areaAtuacao" required>
                                    <option value="">Selecione uma área</option>
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
                            <div class="form-group-full">
                                <label for="areaFormacao">Grau de Formação *</label>
                                <select id="areaFormacao" name="areaFormacao" required>
                                    <option value="">Selecione uma opção</option>
                                    <option value="Ensino Fundamental">Ensino Fundamental</option>
                                    <option value="Ensino Médio">Ensino Médio</option>
                                    <option value="Técnico">Técnico</option>
                                    <option value="Graduação">Graduação</option>
                                    <option value="Pós-Graduação">Pós-Graduação</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-row full">
                            <div class="form-group-full">
                                <label for="horarioDisponivel">Horário Disponível *</label>
                                <input type="text" id="horarioDisponivel" name="horarioDisponivel" placeholder="Ex: Segundas e quartas à noite, Fins de semana, Eventos pontuais, etc" required>
                            </div>
                            <div class="form-group-full">
                                <label for="tipo">Tipo de Voluntário *</label>
                                <select id="tipo" name="tipo" required>
                                    <option value="">Selecione um tipo</option>
                                    <option value="Pontual">Pontual (eventos)</option>
                                    <option value="Sistemático">Sistemático (semanal ou mensal)</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-row full">
                            <div class="form-group-full">
                                <label>Tem experiência em voluntariado? *</label>
                                <div class="checkbox-group">
                                    <div class="checkbox-item">
                                        <input type="radio" id="expSim" name="experienciaVoluntariado" value="sim" required>
                                        <label for="expSim">Sim</label>
                                    </div>
                                    <div class="checkbox-item">
                                        <input type="radio" id="expNao" name="experienciaVoluntariado" value="nao" required>
                                        <label for="expNao">Não</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-row full" id="localExperienciaDiv" style="display: none;">
                            <div class="form-group-full">
                                <label for="localExperiencia">Se sim, onde?</label>
                                <input type="text" id="localExperiencia" name="localExperiencia" placeholder="Organização ou projeto">
                            </div>
                        </div>

                        <div class="form-row full" id="formacaoSuperiorDiv" style="display: none;">
                            <div class="form-group-full">
                                <label for="formacaoSuperior">Qual é sua formação superior?</label>
                                <input type="text" id="formacaoSuperior" name="formacaoSuperior" placeholder="Ex: Enfermagem, Psicologia, Engenharia Civil, etc">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group-full">
                                <label for="publicoPreferencia">Público de Preferência *</label>
                                <select id="publicoPreferencia" name="publicoPreferencia" required>
                                    <option value="">Selecione um público</option>
                                    <option value="Crianças">Crianças</option>
                                    <option value="Adolescentes">Adolescentes</option>
                                    <option value="Adultos">Adultos</option>
                                    <option value="Idosos">Idosos</option>
                                    <option value="Famílias">Famílias</option>
                                    <option value="Comunidades">Comunidades</option>
                                    <option value="Todos os públicos">Todos os públicos</option>
                                </select>
                            </div>
                            <div class="form-group-full">
                                <label for="hobby">Seu Hobby / Interesse *</label>
                                <input type="text" id="hobby" name="hobby" placeholder="Ex: Futebol, Leitura, etc" required>
                            </div>
                        </div>

                        <div class="form-row full">
                            <div class="form-group-full">
                                <label for="profissao">Profissão (opcional)</label>
                                <input type="text" id="profissao" name="profissao" placeholder="Ex: Dentista, Psicólogo, Médico, Eletricista, etc">
                            </div>
                        </div>

                        <div class="form-buttons">
                            <button type="submit" class="btn btn-primary">💾 Salvar Voluntário</button>
                            <button type="reset" class="btn btn-secondary">🔄 Limpar Formulário</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

    // Event listeners
    document.getElementById('formCadastro').addEventListener('submit', salvarVoluntario);
    
    document.querySelectorAll('input[name="experienciaVoluntariado"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const div = document.getElementById('localExperienciaDiv');
            if (this.value === 'sim') {
                div.style.display = 'grid';
            } else {
                div.style.display = 'none';
            }
        });
    });

    document.getElementById('areaFormacao').addEventListener('change', function() {
        const div = document.getElementById('formacaoSuperiorDiv');
        if (this.value === 'Graduação' || this.value === 'Pós-Graduação') {
            div.style.display = 'grid';
        } else {
            div.style.display = 'none';
        }
    });
}