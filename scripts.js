  let slides = document.querySelectorAll('.slide');
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }
  document.addEventListener("DOMContentLoaded", function () {
    const chartOptions = {
      responsive: true,
      plugins: { legend: { position: 'top' } }
    };
  
    new Chart(document.getElementById('infraestruturaChart'), {
      type: 'bar',
      data: {
        labels: ['Cozinha', 'Depósito', 'Horta'],
        datasets: [
          {
            label: 'Escola 1 (Municipal)',
            data: [1, 1, 1],
            backgroundColor: '#4caf50'
          },
          {
            label: 'Escola 2 (Estadual)',
            data: [1, 0, 0],
            backgroundColor: '#f44336'
          }
        ]
      },
      options: {
        ...chartOptions,
        scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
      }
    });
  
    new Chart(document.getElementById('merendaChart'), {
      type: 'doughnut',
      data: {
        labels: ['Não consomem', 'Consomem'],
        datasets: [{
          label: 'Percepção dos alunos',
          data: [60, 40],
          backgroundColor: ['#f44336', '#4caf50']
        }]
      },
      options: chartOptions
    });
  
    new Chart(document.getElementById('pnaeChart'), {
      type: 'bar',
      data: {
        labels: ['Uso de produtos da agricultura familiar'],
        datasets: [
          {
            label: 'Escola 1 (Municipal)',
            data: [1],
            backgroundColor: '#4caf50'
          },
          {
            label: 'Escola 2 (Estadual)',
            data: [0],
            backgroundColor: '#f44336'
          }
        ]
      },
      options: {
        ...chartOptions,
        scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
      }
    });
  
    new Chart(document.getElementById('projetosChart'), {
      type: 'bar',
      data: {
        labels: ['Participação em Projetos Educativos'],
        datasets: [
          {
            label: 'Escola 1 (Municipal)',
            data: [1],
            backgroundColor: '#4caf50'
          },
          {
            label: 'Escola 2 (Estadual)',
            data: [0],
            backgroundColor: '#f44336'
          }
        ]
      },
      options: {
        ...chartOptions,
        scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
      }
    });
  });
  