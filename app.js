// Inicializa um array vazio para armazenar os números sorteados
var numeroSorteados = [];

// Define a quantidade de números que serão sorteados
let quantidade_numeros_sorteados = 10;

// Função para limpar a lista de números sorteados
function limparLista(){
    // Verifica se a quantidade de números sorteados é igual à quantidade definida
    if (numeroSorteados.length == quantidade_numeros_sorteados){
        // Limpa o array de números sorteados
        numeroSorteados.splice(0, numeroSorteados.length)
    
    }
}

// Função para gerar um número secreto
function gerarNumeroSecreto(){
    // Escolhe um número aleatório entre 1 e a quantidade de números a serem sorteados
    let numeroEscolhido = (parseInt(Math.random() * quantidade_numeros_sorteados + 1))
    // Verifica se o número escolhido já foi sorteado
    if (numeroSorteados.includes(numeroEscolhido)){
        // Se o número já foi sorteado, a função é chamada novamente
        return gerarNumeroSecreto()
    }else{
        // Se o número não foi sorteado, ele é adicionado ao array de números sorteados
        numeroSorteados.push(numeroEscolhido);

        // Retorna o número escolhido
        return numeroEscolhido
    }
}

// Gera o número secreto
let numeroSecreto = gerarNumeroSecreto();


// Função para mudar o texto de um elemento HTML
function mudandoTexto(tag, texto){
    // Seleciona o elemento HTML pela tag
    let nome_var = document.querySelector(tag)
    // Muda o conteúdo do elemento selecionado
    nome_var.innerHTML = texto
    // Usa a biblioteca ResponsiveVoice para ler o texto em voz alta
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.3});
}

// Função para exibir as mensagens iniciais do jogo
function mensagensIniciais(){
    // Muda o texto do elemento h1 para "Jogo Secreto"
    mudandoTexto("h1", "Jogo Secreto")
    // Muda o texto do elemento p para "Escolha um número entre 1 e 10"
    mudandoTexto("p", "Escolha um número entre 1 e 10")
}

// Exibe as mensagens iniciais
mensagensIniciais()

// Função para limpar o campo de entrada
function limparCampo(){
    // Seleciona o campo de entrada
    chute = document.querySelector("input")
    // Limpa o valor do campo de entrada
    chute.value = "";
}

// Inicializa a variável chute
let chute;

// Inicializa a contagem de tentativas
let tentativas = 0;

// Função para verificar o chute do jogador
function verificarChute(){
    // Obtém o valor do campo de entrada
    var chute = document.querySelector("input").value
    // Verifica se o chute é igual ao número secreto
    if (chute == numeroSecreto){
        // Se o chute é correto, muda o texto do elemento h1 para "VOCÊ ACERTOU"
        mudandoTexto("h1", "VOCÊ ACERTOU")
        // Muda o texto do elemento p para "Você descobriu o número secreto!"
        mudandoTexto("p", "Você descobriu o número secreto!")
        // Incrementa a contagem de tentativas
        tentativas++
        // Define a palavra tentativa no singular ou plural, dependendo da contagem de tentativas
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        // Seleciona o elemento p com a classe "classe_tentativas"
        let mudar_palavra = document.querySelector("p.classe_tentativas")
        // Muda o texto do elemento selecionado para mostrar a quantidade de tentativas
        mudar_palavra.innerHTML = `Você acertou em ${tentativas} ${palavraTentativa}`
        // Limpa o campo de entrada
        limparCampo()
        // Habilita o botão de reiniciar
        document.getElementById("reiniciar").removeAttribute("disabled")
    }
    else{
        // Se o chute é incorreto, verifica se o número secreto é maior ou menor que o chute
        let maior_menor = chute > numeroSecreto ? "Número é menor": "Número é maior"
        // Muda o texto do elemento p para indicar se o número secreto é maior ou menor
        mudandoTexto("p", `${maior_menor}`)
        // Incrementa a contagem de tentativas
        tentativas++
    }
}

// Função para reiniciar o jogo
function reiniciarJogo(){
    // Exibe as mensagens iniciais
    mensagensIniciais();
    // Seleciona o elemento p com a classe "classe_tentativas"
    resetando_frase_tentativas = document.querySelector("p.classe_tentativas");
    // Limpa o texto do elemento selecionado
    resetando_frase_tentativas.innerHTML = "";
    // Reinicia a contagem de tentativas
    tentativas = 1;
    // Desabilita o botão de reiniciar
    document.getElementById("reiniciar").setAttribute("disabled", true);
    // Gera um novo número secreto
    numeroSecreto = gerarNumeroSecreto()
    // Limpa a lista de números sorteados
    limparLista()
}
