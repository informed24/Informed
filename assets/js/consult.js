document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos campos
    const tipoConsulta = document.getElementById('tipoConsulta').value;
    const especialidade = document.getElementById('especialidade').value;
    const medico = document.getElementById('medico').value;
    const unidade = document.getElementById('unidade').value;
    const dataHora = document.getElementById('dataHora').value;
    const motivo = document.getElementById('motivo').value;

    // Validando se todos os campos foram preenchidos
    if (!tipoConsulta || !especialidade || !medico || !unidade || !dataHora || !motivo) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Preenchendo o resumo com as informações
    document.getElementById('summaryTipoConsulta').textContent = tipoConsulta;
    document.getElementById('summaryEspecialidade').textContent = especialidade;
    document.getElementById('summaryMedico').textContent = medico;
    document.getElementById('summaryUnidade').textContent = unidade;
    document.getElementById('summaryDataHora').textContent = dataHora;
    document.getElementById('summaryMotivo').textContent = motivo;

    // Exibindo o resumo e ocultando o formulário
    document.getElementById('consultaForm').style.display = 'none';
    document.getElementById('summaryContainer').style.display = 'block';
});

document.getElementById('cancelButton').addEventListener('click', function() {
    alert('Consulta cancelada!');
    // Redirecionando para a página principal
    window.location.href = window.location.href;
});

document.getElementById('confirmButton').addEventListener('click', function() {
    alert('Consulta marcada!');
    // Redirecionando para a página principal
    window.location.href = window.location.href;
});
