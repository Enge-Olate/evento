const aniversario = new Date('April 26, 2026 17:00:00');
const opcoes ={
    timeZone: 'UTC',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
const agora = new Date();
console.log(agora.toLocaleString('pt-BR', opcoes));
console.log(aniversario.toLocaleString('pt-BR', opcoes));
let diferencaData = aniversario - agora;
console.log(diferencaData);
const diaEmMs = 1000 * 60**2 *24;
const horasEmMs = 1000 * 60**2;
const minutosEmMs = 1000 * 60;
console.log('dias:',Math.floor(diferencaData /diaEmMs));
console.log('horas:', ((diferencaData % diaEmMs) / horasEmMs).toFixed(3));
console.log('minutos:',Math.floor((diferencaData % horasEmMs)/minutosEmMs));
console.log('segundos:',Math.floor((diferencaData % minutosEmMs)/1000));
