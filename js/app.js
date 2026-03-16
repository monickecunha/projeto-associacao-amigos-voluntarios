/* ============================================
   SISTEMA DE VOLUNTÁRIOS - ONG
   Lógica Principal da Aplicação
   ============================================ */

// ============================================
// DADOS GLOBAIS
// ============================================

let usuarioLogado = null;
let paginaAtual = 'login';
let voluntarios = [];

// Dados iniciais de exemplo
const VOLUNTARIOS_INICIAIS = [
    {
        id: 1,
        nome: "João Silva",
        telefone: "(11) 98765-4321",
        endereco: "Rua A, 123 - São Paulo, SP",
        redeSocial: "@joaosilva",
        areaAtuacao: "Logística",
        areaFormacao: "Administração",
        experienciaVoluntariado: true,
        localExperiencia: "Cruz Vermelha",
        horarioDisponivel: "Fins de semana",
        publicoPreferencia: "Crianças",
        hobby: "Futebol",
        tipo: "Sistemático"
    },
    {
        id: 2,
        nome: "Maria Santos",
        telefone: "(11) 99876-5432",
        endereco: "Av. B, 456 - São Paulo, SP",
        redeSocial: "@mariasantos",
        areaAtuacao: "Saúde",
        areaFormacao: "Enfermagem",
        experienciaVoluntariado: true,
        localExperiencia: "Hospital Beneficente",
        horarioDisponivel: "Terças e quintas",
        publicoPreferencia: "Idosos",
        hobby: "Leitura",
        tipo: "Sistemático",
        profissao: "Dentista"
    },
    {
        id: 3,
        nome: "Pedro Costa",
        telefone: "(11) 97654-3210",
        endereco: "Rua C, 789 - São Paulo, SP",
        redeSocial: "@pedrocosta",
        areaAtuacao: "Construção",
        areaFormacao: "Engenharia Civil",
        experienciaVoluntariado: false,
        localExperiencia: "",
        horarioDisponivel: "Eventos pontuais",
        publicoPreferencia: "Famílias",
        hobby: "Arquitetura",
        tipo: "Pontual",
        profissao: "Arquiteto"
    },
    {
        id: 4,
        nome: "Ana Paula",
        telefone: "(11) 96543-2109",
        endereco: "Rua D, 321 - São Paulo, SP",
        redeSocial: "@anapaulapsico",
        areaAtuacao: "Saúde Mental",
        areaFormacao: "Psicologia",
        experienciaVoluntariado: true,
        localExperiencia: "Centro de Acolhimento",
        horarioDisponivel: "Fins de semana",
        publicoPreferencia: "Adolescentes",
        hobby: "Meditação",
        tipo: "Sistemático",
        profissao: "Psicólogo"
    },
    {
        id: 5,
        nome: "Carlos Mendes",
        telefone: "(11) 95432-1098",
        endereco: "Rua E, 654 - São Paulo, SP",
        redeSocial: "@carlosmendes",
        areaAtuacao: "Manutenção",
        areaFormacao: "Eletricista",
        experienciaVoluntariado: true,
        localExperiencia: "Projeto Luz para Todos",
        horarioDisponivel: "Sábados",
        publicoPreferencia: "Comunidades",
        hobby: "Eletrônica",
        tipo: "Pontual",
        profissao: "Eletricista"
    }
];

// Elementos do DOM
const app = document.getElementById('app');

// ============================================
// FUNÇÕES DE RENDERIZAÇÃO
// ============================================

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

// ============================================
// FUNÇÕES DE FILTRO
// ============================================

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

function limparFiltros() {
    document.getElementById('filtroTipo').value = '';
    document.getElementById('filtroProfissao').value = '';
    document.getElementById('filtroArea').value = '';
    exibirTabela(voluntarios);
}

// ============================================
// FUNÇÕES DE AÇÃO
// ============================================

function salvarVoluntario(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const redeSocial = document.getElementById('redeSocial').value;
    const areaAtuacao = document.getElementById('areaAtuacao').value;
    const areaFormacao = document.getElementById('areaFormacao').value;
    const formacaoSuperior = document.getElementById('formacaoSuperior').value || null;
    const experienciaVoluntariado = document.querySelector('input[name="experienciaVoluntariado"]:checked').value === 'sim';
    const localExperiencia = document.getElementById('localExperiencia').value;
    const horarioDisponivel = document.getElementById('horarioDisponivel').value;
    const tipo = document.getElementById('tipo').value;
    const publicoPreferencia = document.getElementById('publicoPreferencia').value;
    const hobby = document.getElementById('hobby').value;
    const profissao = document.getElementById('profissao').value || null;

    const novoVoluntario = {
        id: voluntarios.length + 1,
        nome,
        telefone,
        endereco,
        redeSocial,
        areaAtuacao,
        areaFormacao,
        formacaoSuperior,
        experienciaVoluntariado,
        localExperiencia,
        horarioDisponivel,
        tipo,
        publicoPreferencia,
        hobby,
        profissao
    };

    voluntarios.push(novoVoluntario);
    alert('Voluntário cadastrado com sucesso!');
    document.getElementById('formCadastro').reset();
    document.getElementById('localExperienciaDiv').style.display = 'none';
}

function verDetalhes(id) {
    const voluntario = voluntarios.find(v => v.id === id);
    if (!voluntario) return;

    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 1000;';
    
    let detalhesHTML = `
        <p><strong>Nome:</strong> ${voluntario.nome}</p>
        <p><strong>Telefone:</strong> ${voluntario.telefone}</p>
        <p><strong>Endereço:</strong> ${voluntario.endereco}</p>
        <p><strong>Rede Social:</strong> ${voluntario.redeSocial}</p>
        <p><strong>Área de Atuação:</strong> ${voluntario.areaAtuacao}</p>
        <p><strong>Grau de Formação:</strong> ${voluntario.areaFormacao}</p>
        ${voluntario.formacaoSuperior ? `<p><strong>Formação Superior:</strong> ${voluntario.formacaoSuperior}</p>` : ''}
        <p><strong>Experiência em Voluntariado:</strong> ${voluntario.experienciaVoluntariado ? 'Sim' : 'Não'}</p>
        ${voluntario.experienciaVoluntariado ? `<p><strong>Local:</strong> ${voluntario.localExperiencia}</p>` : ''}
        <p><strong>Horário Disponível:</strong> ${voluntario.horarioDisponivel}</p>
        <p><strong>Tipo:</strong> ${voluntario.tipo}</p>
        <p><strong>Público de Preferência:</strong> ${voluntario.publicoPreferencia}</p>
        <p><strong>Hobby:</strong> ${voluntario.hobby}</p>
        ${voluntario.profissao ? `<p><strong>Profissão:</strong> ${voluntario.profissao}</p>` : ''}
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 10px; padding: 0; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
            <div style="padding: 20px; border-bottom: 1px solid #ddd; display: flex; justify-content: space-between; align-items: center;">
                <h2 style="margin: 0; color: #0052cc;">${voluntario.nome}</h2>
                <button onclick="this.closest('div').parentElement.remove()" style="background: none; border: none; font-size: 24px; cursor: pointer; color: #999;">&times;</button>
            </div>
            <div style="padding: 20px;">
                ${detalhesHTML}
            </div>
            <div style="padding: 20px; border-top: 1px solid #ddd; text-align: right;">
                <button onclick="this.closest('div').parentElement.remove()" style="padding: 10px 20px; background: #0052cc; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">Fechar</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function irParaCadastro() {
    renderCadastro();
}

function irParaConsulta() {
    renderConsulta();
}

function logout() {
    if (confirm('Deseja sair do sistema?')) {
        usuarioLogado = null;
        renderLogin();
    }
}

// ============================================
// INICIALIZAÇÃO
// ============================================

function inicializar() {
    console.log('Iniciando aplicação...');
    renderLogin();
}

// Inicia a aplicação quando o DOM está pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}
