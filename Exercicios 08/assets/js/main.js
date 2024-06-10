const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function criarLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
    if(!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value ='';
    inputTarefa.focus();
}

function criarBotaoApagar(li) {
    li.innerText += '  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tabela');
    li.appendChild(botaoApagar);
    

}

function criaTarefa (textInput) {
    const li = criarLi();
    li.innerText = textInput;
    tarefas.appendChild(li);
    limpaInput();
    criarBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);

});

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaText = tarefa.innerText;
        tarefaText = tarefaText.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaText);
        }

        const tarefasJSON =JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();