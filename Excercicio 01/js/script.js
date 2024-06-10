const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto1 = document.getElementById('texto');


numeroTitulo.innerHTML = numero;

texto1.innerHTML = '';
texto1.innerHTML += `<p>Raiz quadeada é: ${numero ** 0.5}  </p>`;
texto1.innerHTML += `<p>${numero} é um número intero? ${Number.isInteger(numero)}</p>`;
texto1.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto1.innerHTML += `<p>Arrendondamento para baixo: ${Math.floor(numero)}</p>`;
texto1.innerHTML += `<p>Arrendondamento para cima: ${Math.ceil(numero)}</p>`;
texto1.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;