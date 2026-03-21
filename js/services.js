function limparFiltros() {
    document.getElementById('filtroTipo').value = '';
    document.getElementById('filtroProfissao').value = '';
    document.getElementById('filtroArea').value = '';
    exibirTabela(voluntarios);
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