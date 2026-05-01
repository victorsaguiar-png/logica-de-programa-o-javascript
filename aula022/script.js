const divListaFilmes = document.querySelector("#lista_filmes")
const btnTerror = document.querySelector("#btn_terror")

function filtrarFilmesTerror() {
    const filmesTerror = filmes.filter((filme)=> {
        return filme.genero === "terror"
    })

    console.log(filmesTerror)
} 

btnTerror.addEventListener("click", filtrarFilmesTerror)

const filmes = [
  // TERROR (10)
{ titulo: "Noite Sombria", sinopse: "Uma família enfrenta eventos paranormais em uma casa isolada.", genero: "terror" },
{ titulo: "Ecos do Além", sinopse: "Vozes misteriosas começam a assombrar uma cidade pequena.", genero: "terror" },
{ titulo: "O Último Ritual", sinopse: "Um grupo realiza um ritual proibido com consequências terríveis.", genero: "terror" },
{ titulo: "Casa das Sombras", sinopse: "Visitantes descobrem segredos macabros em uma mansão antiga.", genero: "terror" },
{ titulo: "Gritos na Floresta", sinopse: "Jovens se perdem em uma floresta amaldiçoada.", genero: "terror" },
{ titulo: "Olhos na Escuridão", sinopse: "Algo observa as pessoas durante a noite.", genero: "terror" },
{ titulo: "Herança Maldita", sinopse: "Uma herança traz consigo uma entidade perigosa.", genero: "terror" },
{ titulo: "A Porta Vermelha", sinopse: "Uma porta misteriosa leva a um mundo de pesadelos.", genero: "terror" },
{ titulo: "Silêncio Mortal", sinopse: "Uma cidade onde ninguém pode fazer barulho para sobreviver.", genero: "terror" },
{ titulo: "Sombras do Passado", sinopse: "Espíritos retornam para acertar contas.", genero: "terror" },

  // AÇÃO (10)
{ titulo: "Missão Final", sinopse: "Um agente precisa salvar o mundo de uma ameaça nuclear.", genero: "ação" },
{ titulo: "Velocidade Máxima", sinopse: "Corridas ilegais e perseguições intensas pela cidade.", genero: "ação" },
{ titulo: "Operação Relâmpago", sinopse: "Soldados enfrentam uma missão suicida.", genero: "ação" },
{ titulo: "Código de Guerra", sinopse: "Um hacker se envolve em uma conspiração militar.", genero: "ação" },
{ titulo: "Fogo Cruzado", sinopse: "Policiais enfrentam um cartel poderoso.", genero: "ação" },
{ titulo: "Zona de Combate", sinopse: "Um grupo luta para sobreviver em território inimigo.", genero: "ação" },
{ titulo: "Impacto Mortal", sinopse: "Um ex-agente busca vingança.", genero: "ação" },
{ titulo: "Alvo Primário", sinopse: "Um assassino profissional se torna o alvo.", genero: "ação" },
{ titulo: "Ataque Imediato", sinopse: "Uma cidade entra em colapso após um ataque terrorista.", genero: "ação" },
{ titulo: "Força Extrema", sinopse: "Uma equipe de elite enfrenta um inimigo implacável.", genero: "ação" },

  // COMÉDIA (10)
{ titulo: "Confusão Total", sinopse: "Uma série de mal-entendidos gera situações hilárias.", genero: "comedia" },
{ titulo: "Férias Malucas", sinopse: "Uma viagem em família sai completamente do controle.", genero: "comedia" },
{ titulo: "Vizinho Problema", sinopse: "Um novo vizinho causa caos na vida de todos.", genero: "comedia" },
{ titulo: "Amigos do Barulho", sinopse: "Quatro amigos vivem aventuras engraçadas.", genero: "comedia" },
{ titulo: "Casamento em Crise", sinopse: "Um casamento cheio de imprevistos cômicos.", genero: "comedia" },
{ titulo: "Trabalho Dos Sonhos", sinopse: "Um emprego perfeito vira um desastre.", genero: "comedia" },
{ titulo: "Mentira Perfeita", sinopse: "Uma mentira pequena se torna gigante.", genero: "comedia" },
{ titulo: "O Plano Falhou", sinopse: "Um plano simples dá muito errado.", genero: "comedia" },
{ titulo: "Vida Dupla", sinopse: "Uma pessoa tenta viver duas vidas ao mesmo tempo.", genero: "comedia" },
{ titulo: "Dia de Azar", sinopse: "Tudo dá errado em um único dia.", genero: "comedia" },

  // ANIMAÇÃO (10)
{ titulo: "Aventura no Céu", sinopse: "Personagens viajam por ilhas flutuantes.", genero: "animacao" },
{ titulo: "O Pequeno Herói", sinopse: "Uma criança descobre poderes especiais.", genero: "animacao" },
{ titulo: "Reino Encantado", sinopse: "Um mundo mágico precisa ser salvo.", genero: "animacao" },
{ titulo: "Amigos da Floresta", sinopse: "Animais vivem aventuras divertidas.", genero: "animacao" },
{ titulo: "Viagem no Tempo", sinopse: "Um jovem viaja entre épocas.", genero: "animacao" },
{ titulo: "Planeta Colorido", sinopse: "Um planeta cheio de criaturas únicas.", genero: "animacao" },
{ titulo: "Missão Espacial", sinopse: "Uma equipe explora o espaço.", genero: "animacao" },
{ titulo: "Cidade dos Sonhos", sinopse: "Um lugar onde tudo é possível.", genero: "animacao" },
{ titulo: "O Guardião", sinopse: "Um herói protege seu mundo mágico.", genero: "animacao" },
{ titulo: "Ilha Misteriosa", sinopse: "Segredos escondidos em uma ilha.", genero: "animacao" },

  // AVENTURA (10)
{ titulo: "Tesouro Perdido", sinopse: "Exploradores buscam um tesouro antigo.", genero: "aventura" },
{ titulo: "Selva Proibida", sinopse: "Uma jornada em uma selva perigosa.", genero: "aventura" },
{ titulo: "Montanha Mortal", sinopse: "Escaladores enfrentam desafios extremos.", genero: "aventura" },
{ titulo: "O Grande Desafio", sinopse: "Uma competição cheia de perigos.", genero: "aventura" },
{ titulo: "Expedição Ártica", sinopse: "Uma missão no gelo extremo.", genero: "aventura" },
{ titulo: "Ilha dos Segredos", sinopse: "Mistérios em uma ilha desconhecida.", genero: "aventura" },
{ titulo: "Caminho do Guerreiro", sinopse: "Uma jornada de superação.", genero: "aventura" },
{ titulo: "Horizonte Perdido", sinopse: "Exploradores buscam uma terra lendária.", genero: "aventura" },
{ titulo: "Deserto Infinito", sinopse: "Sobrevivência em um ambiente hostil.", genero: "aventura" },
{ titulo: "Rota Selvagem", sinopse: "Uma viagem cheia de perigos e descobertas.", genero: "aventura" }
]; // 50

/* filmes.forEach((filme)=>{
    divListaFilmes.innerHTML += `<li><b>${filme.titulo}</b> <br> ${filme.sinopse} <br> Genero: <i>${filme.genero}</i></li>`
}) */