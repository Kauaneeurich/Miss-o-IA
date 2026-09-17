const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "De que maneira as ações de preservação ambiental podem contribuir para a manutenção do equilíbrio dos ecossistemas?",
        alternativas: [
            {
                texto: "A preservação das florestas contribui para a proteção dos habitats naturais e para a conservação da biodiversidade",
                afirmacao: "Guardião das Florestas Valoriza a preservação das florestas, reconhecendo sua importância para proteger os habitats, os animais, as plantas e a biodiversidade."
            },
            {
                texto:  "A proteção dos rios e nascentes contribui para a conservação dos recursos hídricos e dos seres vivos que dependem deles.",
                afirmacao: "💧 Guardião das Águas Valoriza a proteção dos rios e nascentes, reconhecendo que a água é essencial para a vida e para o equilíbrio dos ecossistemas."
            }    
           
        ]
    },
    {
       
            enunciado: "Como você contribui para a proteção ambiental?",

            alternativas: [
                {
                    texto: "Reduzindo o consumo de água e energia.",
                    afirmacao: " O(a) Economizador(a) Consciente:Pessoa que procura evitar desperdícios e utiliza água e energia de maneira responsável.",
                },
                {
                    texto:  "Reduzindo o uso de produtos descartáveis.",
                    afirmacao: "O(a) Redutor(a) de Resíduos:Pessoa que prefere produtos reutilizáveis e busca produzir menos lixo no cotidiano.",
                }
            ]
        },
        {
            enunciado: " Como você ajudaria a reduzir a poluição?",


            alternativas: [
                {
                    texto: " Utilizaria bicicleta ou caminharia quando possível.",
                    afirmacao: "O(a) Mobilizador(a) Sustentável:Pessoa que valoriza formas de transporte mais sustentáveis no dia a dia.",
                }
                {
                    texto:    "Utilizaria transporte coletivo.",
               
                    afirmacao: " O(a) Usuário(a) Consciente:Pessoa que considera alternativas de transporte que podem diminuir o impacto ambiental.",
        }    
               
            ]
        },
]



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();