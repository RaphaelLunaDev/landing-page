    AOS.init();

    const dataDoEvento = new Date("May 05, 2026 19:00:00");  //definição da data do timer
    const timeStampDoEvento = dataDoEvento.getTime(); //recuperação do time stamp (sla oq é isso kkkkkkk)

    const contaAsHoras = setInterval(function() {       //constante com intervalos para a cada 1000 milesegundos(1s) aumentar 1  
        const agora = new Date();   //o new date pega o dia/horario atual
        const timeStampAtual = agora.getTime();

        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; //a constate do tempo ate o evento

        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutosEmMs = 1000 * 60;
        const segundosEmMs = 1000

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs); //(math floor é a funçao para arredondar o numero para baixo, para nao ficar numeros quebrados ex: 5.2 irá ficar 5 )     //calculo dos dias ate o evento = 1000(milesegundos) vezes 60 (segundos) vezes 60(minutos) vezes 24 (horas)       (PROGRAMAÇÃO USA MATEMATICA SIM !!!!!!!!!)
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);    // calculo das horas (tendi prr nenhuma)
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmMs);    // calculo dos minutos (tendi prr nenhuma)
        const segundosAteoEvento = Math.floor((distanciaAteOEvento %  minutosEmMs) / segundosEmMs)    // calculo dos segundos (tendi prr nenhuma)

        console.log(diasAteOEvento);
        console.log(horasAteOEvento);
        console.log(minutosAteOEvento);
        console.log(segundosAteoEvento);

        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteoEvento}s`;  //Colocando os numeros na tela

        if  (distanciaAteOEvento < 0) {
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = "*Evento Expirado*"
        }
    }, 1000)