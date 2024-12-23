// Referência ao botão de nova consulta
const novaConsultaButton = document.getElementById('novaConsultaButton');
const consultasContainer = document.getElementById('consultasContainer');

// Redirecionar para a página de marcação de consultas ao clicar no botão
novaConsultaButton.addEventListener('click', () => {
    window.location.href = './consultasmarcar.html';
});

// Carregar consultas armazenadas no Local Storage
function carregarConsultas() {
    const consultas = JSON.parse(localStorage.getItem('consultasMarcadas')) || [];

    if (consultas.length === 0) {
        // Caso não haja consultas marcadas
        consultasContainer.innerHTML = `
            <p>Não há consultas marcadas no momento.</p>
            <p>Clique no botão abaixo para marcar uma nova consulta.</p>
        `;
    } else {
        // Exibir consultas marcadas
        consultas.forEach(consulta => {
            const consultaDiv = document.createElement('div');
            consultaDiv.classList.add('consulta-item');
            consultaDiv.innerHTML = `
                <h3>${consulta.tipoConsulta}</h3>
                <p><strong>Especialidade:</strong> ${consulta.especialidade}</p>
                <p><strong>Médico:</strong> ${consulta.medico}</p>
                <p><strong>Unidade:</strong> ${consulta.unidade}</p>
                <p><strong>Data:</strong> ${consulta.dataHora.split('T')[0]}</p>
                <p><strong>Hora:</strong> ${consulta.dataHora.split('T')[1]}</p>
                <p><strong>Motivo:</strong> ${consulta.motivo}</p>
            `;
            consultasContainer.appendChild(consultaDiv);
        });
    }
}

// Executar ao carregar a página
document.addEventListener('DOMContentLoaded', carregarConsultas);
