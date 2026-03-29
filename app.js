const app = $('#app')[0];

function irParaLogin() {
    renderLogin(); 
}

function irParaDashboard() {
    renderDashboard();
}

function irParaConsulta() {
    renderConsulta();
}

function irParaCadastro() {
    renderCadastro();
}

function logout() {
    if (confirm('Deseja sair do sistema?')) {
        clear();
        usuarioLogado = null;
        renderLogin();
    }
}

function carregarDados() {
    const salvos = getItem('listaVoluntarios');
    if (salvos) {
        voluntarios = JSON.parse(salvos);
    } else {
        voluntarios = JSON.parse(JSON.stringify(VOLUNTARIOS_INICIAIS));
    }
}

function inicializar() {

    carregarDados();

    const usuarioSalvo = getItem('usuarioLogado');

    if (usuarioSalvo) {
        usuarioLogado = usuarioSalvo;
        renderDashboard();
    } else {
        renderLogin();
    }
}


$(document).ready(inicializar);

