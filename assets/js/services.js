const imageElement = document.getElementById('dynamic-image');
const h2Element = document.getElementById('h2');
const h3Element = document.getElementById('h3');
const pElement = document.getElementById('p');
const viewMoreButton = document.getElementById('view-more');

const content = {
  unidades: {
    image: '../assets/images/unity.jpg',
    h2: 'Conheça as Nossas Unidades',
    h3: 'Onde o conhecimento se encontra com a excelência',
    p: 'O Politécnico de Bragança oferece uma diversidade de unidades académicas, cada uma especializada em áreas distintas',
    link: '../pages/unitys.html'
  },
  servicos: {
    image: '../assets/images/service.jpg',
    h2: 'Descubra nossos Serviços',
    h3: 'Aqui para cuidar de si com dedicação',
    p: 'Oferecemos uma ampla gama de serviços para o seu bem-estar e saúde, com a nossa equipa especializada sempre pronta para ajudar',
    link: '../pages/services.html'
  },
  saude: {
    image: '../assets/images/health.jpg',
    h2: 'Saúde em Primeiro Lugar',
    h3: 'Cuidar de si é nossa prioridade',
    p: 'Explore várias soluções inovadoras de saúde, desenhadas para garantir o seu bem-estar, conforto e qualidade em todas as etapas da vida',
    link: '../pages/health_wellness.html'
  }
};

const links = document.querySelectorAll('.links a');
let currentTarget = 'unidades';

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const target = link.getAttribute('data-target');
    currentTarget = target;
    const newContent = content[target];

    if (newContent) {
      imageElement.classList.add('hidden');
      h2Element.classList.add('hidden');
      h3Element.classList.add('hidden');
      pElement.classList.add('hidden');

      setTimeout(() => {
        imageElement.src = newContent.image;
        h2Element.textContent = newContent.h2;
        h3Element.textContent = newContent.h3;
        pElement.textContent = newContent.p;

        imageElement.classList.remove('hidden');
        h2Element.classList.remove('hidden');
        h3Element.classList.remove('hidden');
        pElement.classList.remove('hidden');
      }, 300);
    }
  });
});

viewMoreButton.addEventListener('click', (e) => {
  e.preventDefault();
  const link = content[currentTarget]?.link || '#';
  window.location.href = link;
});
