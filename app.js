const app = $('#app')[0];

function irParaLogin() {
    renderLogin(); 
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

function inicializar() {
    console.log('Iniciando aplicação...');

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
