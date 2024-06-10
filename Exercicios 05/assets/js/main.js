const elementos = [
    {tag: 'p', texto: 'Estudando JavaScrip'},
    {tag: 'div', texto: 'Continue Estudando'},
    {tag: 'section', texto: 'Não procrastine, foque no estudo'},
    {tag: 'footer', texto: 'Vai estudar em vez de jogar'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');


for (let i =0; i < elementos.length; i++) {
   let {tag, texto} = elementos[i];
   let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);

}

container.appendChild(div);