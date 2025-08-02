const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está assistindo seu primeiro jogo do Corinthians na Arena. A torcida canta alto e empurra o time o tempo todo. Qual é sua reação?",
        alternativas: [
            {
                texto: "Fico arrepiado com a Fiel! Que energia!",
                afirmacao: "Logo se apaixonou pela força da Fiel Torcida e passou a frequentar mais jogos do Timão. "
            },
            {
                texto: "Acho legal, mas ainda estou conhecendo o time.",
                afirmacao: "Se interessou em conhecer mais sobre o Corinthians e sua história centenária. "
            }
        ]
    },
    {
        enunciado: "Pesquisando sobre o clube, você descobre que o Corinthians tem uma história rica em títulos e jogadores lendários. Como você aprofunda seus conhecimentos?",
        alternativas: [
            {
                texto: "Assiste documentários e vídeos históricos do time.",
                afirmacao: "Aprendeu sobre a Democracia Corinthiana e a importância de Sócrates para o clube e o país. "
            },
            {
                texto: "Conversa com torcedores mais antigos e lê notícias antigas.",
                afirmacao: "Se encantou com as histórias contadas pela torcida sobre os jogos mais memoráveis do Timão. "
            }
        ]
    },
    {
        enunciado: "Seu time favorito precisa de uma nova camisa e você decide fazer uma arte para representar o Corinthians. O que faz?",
        alternativas: [
            {
                texto: "Desenha com símbolos históricos como o Mosqueteiro e as cores preto e branco.",
                afirmacao: "Resgatou símbolos marcantes do clube e impressionou seus amigos com seu talento artístico. "
            },
            {
                texto: "Cria um design moderno com frases da torcida como 'Vai Corinthians!'.",
                afirmacao: "Conectou o amor da torcida com um visual inovador que representa a alma do Timão. "
            }
        ]
    },
    {
        enunciado: "Em uma feira cultural da escola, seu grupo precisa falar sobre um clube de futebol que impacta socialmente. Como você apresenta o Corinthians?",
        alternativas: [
            {
                texto: "Fala sobre os projetos sociais e a inclusão promovida pelo clube.",
                afirmacao: "Mostrou como o Corinthians vai além do futebol, atuando também na transformação social. "
            },
            {
                texto: "Destaca a paixão da torcida e o papel do clube na vida dos brasileiros.",
                afirmacao: "Mostrou como o Corinthians representa o povo e sua força, sendo símbolo de resistência e paixão. "
            }
        ]
    },
    {
        enunciado: "Durante uma conversa, alguém fala mal do Corinthians dizendo que o time está em má fase. O que você faz?",
        alternativas: [
            {
                texto: "Defende com dados, títulos e a paixão da torcida.",
                afirmacao: "Mostrou que ser corinthiano é apoiar em todas as fases, com orgulho e argumentos sólidos. "
            },
            {
                texto: "Diz que o verdadeiro torcedor não abandona e que tudo passa.",
                afirmacao: "Ensinou que o amor ao Corinthians é incondicional, mesmo nos momentos difíceis. "
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
