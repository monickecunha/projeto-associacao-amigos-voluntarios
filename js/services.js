// js/services.js

function verDetalhes(id) {
    const voluntario = $.grep(voluntarios, function (v) { return v.id === id; })[0];
    if (!voluntario) return;

    const enderecoParts = $.grep([
        voluntario.rua,
        voluntario.numero,
        voluntario.complemento,
        voluntario.bairro,
        voluntario.cidade && voluntario.uf
            ? voluntario.cidade + ' - ' + voluntario.uf
            : (voluntario.cidade || voluntario.uf),
        voluntario.cep
    ], function (p) { return p && $.trim(p) !== ''; });

    const enderecoFormatado = enderecoParts.length > 0 ? enderecoParts.join(', ') : 'Não informado';

    const $modal = $('<div>').addClass('modal-overlay active');

    $modal.html(`
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-primary fw-bold">${voluntario.nome}</h5>
                <button class="btn-close modal-close"></button>
            </div>
            <div class="modal-body">
                <h6 class="text-primary border-bottom pb-1 mb-2 small fw-bold">Dados Pessoais</h6>
                <div class="row g-2 mb-3">
                    <div class="col-12 col-sm-6">
                        <span class="text-muted small">Telefone</span>
                        <div class="fw-bold">${voluntario.telefone}</div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <span class="text-muted small">Rede Social</span>
                        <div class="fw-bold">${voluntario.redeSocial || 'Não informado'}</div>
                    </div>
                    <div class="col-12">
                        <span class="text-muted small">Endereço</span>
                        <div class="fw-bold">${enderecoFormatado}</div>
                    </div>
                </div>

                <h6 class="text-primary border-bottom pb-1 mb-2 small fw-bold">Perfil Profissional</h6>
                <div class="row g-2 mb-3">
                    <div class="col-12 col-sm-6">
                        <span class="text-muted small">Escolaridade</span>
                        <div class="fw-bold">${voluntario.escolaridade || 'Não informado'}</div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <span class="text-muted small">Profissão/Formação</span>
                        <div class="fw-bold">${voluntario.profissao || 'Não informado'}</div>
                    </div>
                    <div class="col-12">
                        <span class="text-muted small">Área de Atuação na ONG</span>
                        <div class="fw-bold">${voluntario.areaAtuacao}</div>
                    </div>
                </div>

                <h6 class="text-primary border-bottom pb-1 mb-2 small fw-bold">Disponibilidade</h6>
                <div class="row g-2 mb-3">
                    <div class="col-12 col-sm-6">
                        <span class="text-muted small">Tipo</span>
                        <div>
                            ${voluntario.tipo === 'Pontual'
                                ? '<span class="badge bg-warning text-dark">Pontual</span>'
                                : '<span class="badge bg-success">Sistemático</span>'}
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <span class="text-muted small">Horário Disponível</span>
                        <div class="fw-bold">${voluntario.horarioDisponivel || 'Não informado'}</div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <span class="text-muted small">Público de Preferência</span>
                        <div class="fw-bold">${voluntario.publicoPreferencia || 'Não informado'}</div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <span class="text-muted small">Hobby</span>
                        <div class="fw-bold">${voluntario.hobby || 'Não informado'}</div>
                    </div>
                </div>

                <h6 class="text-primary border-bottom pb-1 mb-2 small fw-bold">Experiência em Voluntariado</h6>
                <div class="row g-2">
                    <div class="col-12 col-sm-6">
                        <span class="text-muted small">Possui experiência?</span>
                        <div>
                            ${voluntario.temExperiencia
                                ? '<span class="badge bg-success">Sim</span>'
                                : '<span class="badge bg-secondary">Não</span>'}
                        </div>
                    </div>
                    ${voluntario.temExperiencia ? `
                    <div class="col-12 col-sm-6">
                        <span class="text-muted small">Onde?</span>
                        <div class="fw-bold">${voluntario.localExperiencia || 'Não informado'}</div>
                    </div>` : ''}
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-fechar-modal">Fechar</button>
            </div>
        </div>
    `);

    $modal.on('click', '.modal-close, .btn-fechar-modal', function () {
        $modal.remove();
    });

    $modal.on('click', function (e) {
        if ($(e.target).is($modal)) {
            $modal.remove();
        }
    });

    $('body').append($modal);
}