const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'full'});

// h1.innerHTML = data.toDateString();

// function getDiaSemanaTexto (diaSemana) {
//     let diaSemanaTexto

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-Feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-Feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-Feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-Feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-Feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sabado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = '';
//             return diaSemanaTexto;
//     }
// }

// function getNomeMes(mes){
//     let mesesAno

//     switch(mes){
//         case 0:
//             mesesAno = 'Janeiro';
//             return mesesAno;
//         case 1:
//             mesesAno = 'Fevereiro';
//             return mesesAno;
//         case 2:
//             mesesAno = 'Março';
//             return mesesAno;
//         case 3:
//             mesesAno = 'Abril';
//             return mesesAno;
//         case 4:
//             mesesAno = 'Maio';
//             return mesesAno;
//         case 5:
//             mesesAno = 'Junho';
//             return mesesAno;

//         case 6:
//             mesesAno = 'Julho';
//             return mesesAno;
//         case 7:
//             mesesAno = 'Agosto';
//             return mesesAno;
//         case 8:
//             mesesAno = 'Setembro';
//             return mesesAno;
//         case 9:
//             mesesAno = 'Outubro';
//             return mesesAno;
//         case 10:
//             mesesAno = 'Novembro';
//             return mesesAno;
//         case 11:
//             mesesAno = 'Dezembro';
//             return mesesAno;
//     }
// }

// function zeroAEsquerda (num){
//     return num >=10 ? num : `0${num}`;
// }


// function criarData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} as ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())} `
// }
// h1.innerHTML = criarData(data);