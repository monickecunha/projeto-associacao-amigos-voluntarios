// Elementos do DOM
const app = document.getElementById('app');

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
