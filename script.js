const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em qual tipo de evento musical você se sentiria mais à vontade e animado(a)?",
        alternativas: [
            {
                texto: "Um festival com várias bandas e um público pulando",
                afirmacao: "Você valoriza a energia, o ritmo intenso e a atitude que este gênero carrega. "
            },
            {
                texto: "Um show de uma dupla ou artista solo, com a possibilidade de dançar colado(a) ou cantar junto",
                afirmacao: "Seu gosto musical se inclina mais para o Sertanejo."
            }
        ]
    },
    {
        enunciado: "Ao dirigir em uma viagem longa, qual estilo você prefere para manter a energia ou relaxar?",
        alternativas: [
            {
                texto: "ritmo constante e a pegada enérgica das guitarras.",
                afirmacao: "A música para você é, muitas vezes, uma forma de expressão poderosa, seja na crítica social, na introspecção profunda ou na euforia de um show lotado.."
            },
            {
                texto: "pelas melodias marcantes e letras que convidam a cantar junto.",
                afirmacao: "Você se conecta com as melodias cativantes, a simplicidade e a emoção das letras deste gênero."
            }
        ]
    },
    {
        enunciado: "Qual sonoridade de instrumento principal mais te agrada?",
        alternativas: [
            {
                texto: "A distorção das guitarras elétricas, o baixo e a bateria.",
                afirmacao: "O som das guitarras distorcidas, o baixo pulsante"
            },
            {
                texto: "O som do violão, da sanfona (acordeão) e da viola caipira.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Qual dos temas a seguir você mais se identifica nas letras das músicas?",
        alternativas: [
            {
                texto: "Críticas sociais, narrativas complexas ou sentimentos intensos e muitas vezes introspectivos.",
                afirmacao: "Ne a batida marcante da bateria são a trilha sonora ideal para sua viagem, sua festa ou seu momento de reflexão."
            },
            {
                texto: "Histórias de amor, sofrência (coração partido) e a vida no campo/cotidiana.",
                afirmacao: "O som do violão, da sanfona e da viola te trazem uma sensação de proximidade e familiaridade, seja ao contar histórias de amor, sofrência (coração partido) ou celebrar a vida."
            }
        ]
    },
    {
        enunciado: "Qual tipo de música você prefere para animar uma festa ou churrasco?",
        alternativas: [
            {
                texto: "para dar um clima mais agitado e descontraído.",
                afirmacao: "Você prefere uma música que te permita cantar alto em uma viagem, dançar em um churrasco ou se emocionar com uma letra bem contada."
            },
            {
                texto: "Modas de viola, que são populares.",
                afirmacao: "A música para você é paixão, tradição e um bom motivo para confraternizar. "
            }
        ]
    },
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
    caixaPerguntas.textContent = "segundo suas respostas ..";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();