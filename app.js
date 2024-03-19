function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value); // Criando a variável "quantidade" e extraindo o valor do input da tag com ID "quantidade" do HTML que armazena a quantidade de números a serem sorteados
    let de = parseInt(document.getElementById('de').value); // Criando a variável "de" e extraindo o valor do input da tag com ID "de" do HTML que armazena o número mínimo a ser sorteado
    let ate = parseInt(document.getElementById('ate').value); // Criando a variável "ate" extraindo o valor do input da tag com ID "ate" do HTML que armazena o número máximo a ser sorteado

    let sorteados = []; // Criando um array que armazena os números que foram sorteados

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidade >= (ate - de + 1) || quantidade < 0) {
        alert ('A quantidade de números a serem sorteados é inválida, por favor reveja se os dados inseridos estão corretos');
        return;
    }
    

    for(let i = 0; i < quantidade; i++) {  // Criando um loop for ( [expressão inicial]; [expressão condicional]; [atualização da expressão inicial] )
        numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
        
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`; 
    alterarStatusBotao();
}

function obterNumeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}

