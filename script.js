const pato1 = document.getElementById('pato1');
const pato2 = document.getElementById('pato2');
const texto = document.getElementById('texto');
const corazonesContainer = document.getElementById('corazones-container');
let besando = false;

document.body.addEventListener('click', (e) => {
  if (!besando) {
    pato1.classList.add('beso');
    pato2.classList.add('beso');
    texto.textContent = '¡Patodalaviya!';
    besando = true;

    for (let i = 0; i < 10; i++) {
      const corazon = document.createElement('div');
      corazon.classList.add('corazon');
      corazon.textContent = '❤';
      corazon.style.left = `${Math.random() * 100}%`;
      corazon.style.top = `${e.clientY}px`;
      corazonesContainer.appendChild(corazon);

      setTimeout(() => {
        corazon.remove();
      }, 1500);
    }

    setTimeout(() => {
      pato1.classList.remove('beso');
      pato2.classList.remove('beso');
      texto.textContent = 'Haz clic para dar un beso';
      besando = false;
    }, 1000);
  }
});
