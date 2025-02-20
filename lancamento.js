const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "01 dec 2024"

function countDown(){
const dataLanc = new Date(lancamento)
const hoje = new Date()

const segTotal = (dataLanc - hoje)/1000;

const finalDias = Math.floor (segTotal / 60 / 60 / 24);
const finalHoras = Math.floor (segTotal / 60 / 60) % 24;
const finalMinutos = Math.floor (segTotal / 60) % 60;
const finalSegundos = Math.floor (segTotal) % 60;

dia.innerHTML = formatoTempo(finalDias, ' D');
hora.innerHTML = formatoTempo(finalHoras, ' H');
minuto.innerHTML = formatoTempo(finalMinutos, ' M');
segundo.innerHTML = formatoTempo(finalSegundos, ' S');
}
function formatoTempo( tempo, unidade ){
    return tempo < 10? `0${tempo}${unidade}` : `${tempo}${unidade}`;
}

countDown();
setInterval(countDown, 1000)