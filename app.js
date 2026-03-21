const app = $('#app')[0];

function irParaLogin() {
    renderLogin(); 
}

function irParaConsulta() {
    renderConsulta();
}

function irParaCadastro() {
    renderCadastro();
}

function logout() {
    if (confirm('Deseja sair do sistema?')) {
        localStorage.removeItem('usuarioLogado');
        usuarioLogado = null;
        renderLogin();
    }
}

function carregarDados() {
    const salvos = localStorage.getItem('listaVoluntarios');
    if (salvos) {
        voluntarios = JSON.parse(salvos);
    } else {
        voluntarios = JSON.parse(JSON.stringify(VOLUNTARIOS_INICIAIS));
    }
}

function inicializar() {

    carregarDados();

    const usuarioSalvo = localStorage.getItem('usuarioLogado');

    if (usuarioSalvo) {
        
        usuarioLogado = usuarioSalvo;
        voluntarios = JSON.parse(JSON.stringify(VOLUNTARIOS_INICIAIS));
        renderDashboard();
    } else {
        renderLogin();
    }
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}
