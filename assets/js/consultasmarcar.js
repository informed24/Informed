document.addEventListener('DOMContentLoaded', function () {
  // Adicionar o listener para o envio do formulário
  document.getElementById('consultaForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Obtendo os valores dos campos do formulário
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

    // Separando data e hora
    const [data, hora] = dataHora.split('T'); // Separando a data e a hora

    // Verificar se o médico já tem consulta nesse horário
    const consultasSalvas = JSON.parse(localStorage.getItem('consultas')) || [];
    const consultaExistente = consultasSalvas.find(consulta => {
      return consulta.medico === medico && consulta.data === data.split('-').reverse().join('/') && consulta.hora === hora;
    });

    if (consultaExistente) {
      alert('Este médico já tem uma consulta marcada para o horário selecionado. Por favor, escolha outro horário.');
      return;
    }

    // Criando um objeto de consulta com os dados
    const consulta = {
      tipoConsulta: tipoConsulta,
      especialidade: especialidade,
      medico: medico,
      unidade: unidade,
      data: data.split('-').reverse().join('/'), // Formato DD/MM/YYYY
      hora: hora,
      motivo: motivo
    };

    // Exibe o resumo da consulta
    exibirResumoConsulta(consulta);

    // Ocultar o formulário e mostrar o resumo
    document.getElementById('consultaForm').style.display = 'none';
    document.getElementById('summaryContainer').style.display = 'block';

    // Armazenar a consulta apenas quando o usuário clicar em "Confirmar"
    document.getElementById('confirmButton').addEventListener('click', function () {
      // Recuperar consultas existentes
      const consultasSalvas = JSON.parse(localStorage.getItem('consultas')) || [];
      // Adicionar a nova consulta ao array de consultas salvas
      consultasSalvas.push(consulta);
      // Armazenar novamente as consultas no localStorage
      localStorage.setItem('consultas', JSON.stringify(consultasSalvas));
      // Mostrar a mensagem final
      mostrarMensagemFinal('Consulta marcada');
    });

    // Adicionar evento para o botão Cancelar
    document.getElementById('cancelButton').addEventListener('click', function () {
      // Mostrar a mensagem de que a consulta foi cancelada
      mostrarMensagemFinal('Consulta cancelada');
    });
  });

  // Função para exibir o resumo da consulta
  function exibirResumoConsulta(consulta) {
    // Exibir a data e a hora separadas no resumo
    document.getElementById('summaryData').textContent = consulta.data; // Data no formato DD/MM/YYYY
    document.getElementById('summaryHora').textContent = consulta.hora; // Hora no formato HH:MM

    document.getElementById('summaryTipoConsulta').textContent = consulta.tipoConsulta;
    document.getElementById('summaryEspecialidade').textContent = consulta.especialidade;
    document.getElementById('summaryMedico').textContent = consulta.medico;
    document.getElementById('summaryUnidade').textContent = consulta.unidade;
    document.getElementById('summaryMotivo').textContent = consulta.motivo;
  }

  // Função para mostrar a mensagem final (confirmação ou cancelamento)
  function mostrarMensagemFinal(mensagem) {
    // Ocultar o resumo
    document.getElementById('summaryContainer').style.display = 'none';
  
    // Exibir a mensagem final
    const finalMessage = document.getElementById('finalMessage');
    finalMessage.style.display = 'block';
  
    // Adicionar texto personalizado
    if (mensagem === 'Consulta cancelada') {
      document.getElementById('statusMessage').innerHTML = ` 
        <h2>${mensagem}</h2>
        <p>A sua consulta foi cancelada com sucesso. Clique no botão abaixo para marcar uma nova consulta.</p>
      `;
    } else if (mensagem === 'Consulta marcada') {
      document.getElementById('statusMessage').innerHTML = ` 
        <h2>${mensagem}</h2>
        <p > A sua consulta foi marcada com sucesso. Obrigado por utilizar nosso sistema!</p>
      `;
      
    }
  }

  // Função para validar e carregar o Flatpickr (calendário)
  flatpickr("#dataHora", {
    enableTime: true, // Habilita a escolha da hora
    dateFormat: "d/m/Y H:i", // Formato de data e hora
    time_24hr: true, // Formato de 24 horas
    minDate: "today", // Impede a escolha de datas no passado
    minuteIncrement: 5, // Incremento de minutos em 5 minutos
    theme: "material_blue", // Tema moderno para o calendário
    placeholder: "Selecione a data e hora" // Exibe o texto na caixa de entrada antes de selecionar
  });
});
