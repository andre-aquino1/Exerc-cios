const paragrafos = document.querySelector('.paragrafo');
const pgf = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);


for ( let p of pgf) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';

}

