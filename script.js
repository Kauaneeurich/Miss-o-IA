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
               
             afirmacao: "Guardião das Florestas Valoriza a preservação das florestas, reconhecendo sua importância para proteger os habitats, os animais, as plantas e a biodiversidade.",
            "Protetor ambiental focado na conservação das florestas, garantindo o refúgio da fauna, da flora e de toda a biodiversidade."

            },
        
            {
                texto:  "A proteção dos rios e nascentes contribui para a conservação dos recursos hídricos e dos seres vivos que dependem deles.",
                afirmacao: "💧 Guardião das Águas Valoriza a proteção dos rios e nascentes, reconhecendo que a água é essencial para a vida e para o equilíbrio dos ecossistemas.",
                "Protetor de rios e nascentes focado na segurança hídrica e ambiental do planeta."

            }    
           
        ]
    },
    {
       
            enunciado: "Como você contribui para a proteção ambiental?",

            alternativas: [
                {
                    texto: "Reduzindo o consumo de água e energia.",
                    afirmacao: " O(a) Economizador(a) Consciente:Pessoa que procura evitar desperdícios e utiliza água e energia de maneira responsável.",
                  "Consumidor sustentável que combate o desperdício, utilizando água e energia de forma planejada e inteligente."

                },
                {
                    texto:  "Reduzindo o uso de produtos descartáveis.",
                    afirmacao: "O(a) Redutor(a) de Resíduos:Pessoa que prefere produtos reutilizáveis e busca produzir menos lixo no cotidiano.",
                  "Consumidor sustentável que prioriza itens duráveis para diminuir a geração de lixo diário."

                }
            ]
        },
        {
            enunciado: " Como você ajudaria a reduzir a poluição?",


            alternativas: [
                {
                    texto: " Utilizaria bicicleta ou caminharia quando possível.",
                    afirmacao: "O(a) Mobilizador(a) Sustentável:Pessoa que valoriza formas de transporte mais sustentáveis no dia a dia.",
                  "Cidadão consciente que prioriza o transporte limpo, como a bicicleta e a caminhada, na rotina urbana."

                }
                {
                    texto:    "Utilizaria transporte coletivo.",
               
                    afirmacao: " O(a) Usuário(a) Consciente:Pessoa que considera alternativas de transporte que podem diminuir o impacto ambiental.",
                " Escolhe meios de transporte alternativos e eficientes para diminuir as emissões de carbono na rotina"

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
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}

function aleatorio(lista) {
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();