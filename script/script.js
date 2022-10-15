// (Semana 1)Aqui estão sendo declarados os TOP 5 jogos mais vendidos do super nintendo, juntamente com suas características, ano, número de cópias, etc. (Semana 3) Modificação dos jogos criados para OBJETOS criando novas variáveis e os incluindo.

const objetoJogo1 = {
    jogo: 'Super Mario World',
    link: "https://wowroms.com/en/roms/super-nintendo/super-mario-world-usa/29592.html",
    ano: 'Lançado em: 1990',
    copias: 20610000,
    multiplayer: true,
    regioes: ['Japão', 'USA', 'Europa', 'Outras regiões'],
    img: "assets/1-super-mario-world-final.png",
    alt: "Cartucho com label do jogo Super Mario World"

}

const objetoJogo2 = {
    jogo: 'Super Mario All-Stars',
    link: "https://wowroms.com/en/roms/super-nintendo/super-mario-all-stars-usa/29579.html",
    ano: 'Lançado em: 1993',
    copias: 10550000,
    multiplayer: true,
    regioes: ['Japão', 'USA', 'Europa', 'Outras regiões'],
    img: "assets/2-super-mario-all-star-final.png",
    alt: "Cartucho com label do jogo Super Mario All-Stars"
}

const objetoJogo3 = {
    jogo: 'Donkey Kong Country',
    link: 'https://wowroms.com/en/roms/super-nintendo/donkey-kong-country-usa/27398.html',
    ano: 'Lançado em: 1994',
    copias: 9300000,
    multiplayer: true,
    regioes: ['Japão', 'USA', 'Europa', 'Outras regiões'],
    img: "assets/3-donkey-kong-country-final.png",
    alt: "Cartucho com label do jogo Donkey Kong Country"

}

const objetoJogo4 = {
    jogo: 'Super Mario Kart',
    link: 'https://wowroms.com/en/roms/super-nintendo/super-mario-kart-usa/29586.html',
    ano: 'Lançado em: 1992',
    copias: 8760000,
    multiplayer: true,
    regioes: ['Japão', 'USA', 'Europa', 'Outras regiões'],
    img: "assets/4-super-mario-kart-final.png",
    alt: "Cartucho com label do jogo Super Mario Kart"

}

const objetoJogo5 = {
    jogo: 'Street Fighter II: The World Warrior',
    link: 'https://wowroms.com/en/roms/super-nintendo/super-street-fighter-ii-usa/29717.html',
    ano: 'Lançado em: 1992',
    copias: 6300000,
    multiplayer: true,
    regioes: ['Japão', 'USA', 'Europa', 'Outras regiões'],
    img: "assets/5-street-fighter-II-final.png",
    alt: "Cartucho com label do jogo Street Fighter II: The World Warrior"


}
// (semana 2)Abaixo existem 2 variáveis e suas respectivas impressões. Uma se refere a MÉDIA de cópias vendidas do top 5 e a outra verifica se TODOS os jogos tem a opção multiplayer. Obs:(semana 3) como os dados criados na semana 1 foram alterados, as seguintes impressões estarão comentadas para não gerarem erros:

/*const mediaCopiasVendidas = (copias+copias+copias+copiasjogo+copiasJogo5)/5

console.log(`A média de todas cópias vendidas no TOP 5 é: ${mediaCopiasVendidas}\n\n`)

const todosMultiplayer = multiplayer && multiplayer && multiplayer && multiplayer4 && multiplayer5

console.log(`Todos jogos tem a opção multiplayer?: ${todosMultiplayer}\n\n`)

   ///relatório semana 2 abaixo///
/*console.log((`${jogo}`).toUpperCase(),`\n${ano}\nQuantidade de cópias vendidas: ${copias} \nMultiplayer: ${multiplayer}\nRegiões: ${regioes}.\n\n`)

console.log((`${jogo}`).toUpperCase(),`\n${anojogo}\nQuantidade de cópias vendidas: ${copiasjogo} \nMultiplayer: ${multiplayer}\nRegiões: ${regioesjogo}.\n\n`)

console.log((`${jogo}`).toUpperCase(),`\n${ano}\nQuantidade de cópias vendidas: ${copias} \nMultiplayer: ${multiplayer}\nRegiões: ${regioes}.\n\n`)

console.log((`${jogo4}`).toUpperCase(),`\n${anoJogo4}\nQuantidade de cópias vendidas: ${copiasJogo4} \nMultiplayer: ${multiplayer4}\nRegiões: ${regioesJogo4}.\n\n`)

console.log((`${jogo5}`).toUpperCase(),`\n${anoJogo5}\nQuantidade de cópias vendidas: ${copiasJogo5} \nMultiplayer: ${multiplayer5}\nRegiões: ${regioesJogo5}.\n\n`)*/



// (semana 3) Criar um array vazio para incluir os objetos que foram criados na semana 3.(semana 4) O item abaixo (push de objetos) foi comentado devido alterações da semana 4.*/

const arrayDeObjetos = []

/*arrayDeObjetos.push(objetoJogo1,objetoJogo2,objetoJogo3,objetojogo4,objetoJogo5)
console.log(arrayDeObjetos)*/

//(semana 4) 1. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3 da semana 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
//2. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

if (arrayDeObjetos) {
    if (objetoJogo1.multiplayer === true) {
        arrayDeObjetos.push(objetoJogo1)
    } else {
        alert(`O jogo "${objetoJogo1.jogo}" não foi adicionado, pois não é multiplayer!`)
    }

    if (objetoJogo2.multiplayer === true) {
        arrayDeObjetos.push(objetoJogo2)
    } else {
        alert(`O jogo "${objetoJogo2.jogo}" não foi adicionado, pois não é multiplayer!`)
    }

    if (objetoJogo3.multiplayer === true) {
        arrayDeObjetos.push(objetoJogo3)
    } else {
        alert(`O jogo "${objetoJogo3.jogo}" não foi adicionado, pois não é multiplayer!`)
    }

    if (objetoJogo4.multiplayer === true) {
        arrayDeObjetos.push(objetoJogo4)
    } else {
        alert(`O jogo "${objetoJogo4.jogo}" não foi adicionado, pois não é multiplayer!`)
    }

    if (objetoJogo5.multiplayer === true) {
        arrayDeObjetos.push(objetoJogo5)
    } else {
        alert(`O jogo "${objeto.jogo}" não foi adicionado, pois não é multiplayer!`)
    }
}

//console.log(arrayDeObjetos)

//(semana 2-refatorada)/(semana 5) Abaixo há um relatório de CADA jogo do TOP 5 com suas respectivas característica. Obs:(semana 3) como os dados criados na semana 1 foram alterados, as seguintes impressões estarão comentadas para não gerarem erros:
for (let i = 0; i < arrayDeObjetos.length; i++) {
    let recebendo = arrayDeObjetos[i].regioes.join();

    arrayDeObjetos[i].regioes = recebendo // aqui adiociono diretamente no objeto//

    console.log(`${arrayDeObjetos[i].jogo.toUpperCase()}`, `\n${arrayDeObjetos[i].ano} \nCópias: ${arrayDeObjetos[i].copias}\nMultiplayer: ${arrayDeObjetos[i].multiplayer}\nRegiões: ${arrayDeObjetos[i].regioes}`)
}

//semana 6.1
function funcaoTituloMaiusculo(novoRelatorio) {

    // let relatorio = novoRelatorio.map((valor) => {console.log(`${valor.jogo.toUpperCase()}`, `\n${valor.ano} \nCópias: ${valor.copias}\nMultiplayer: ${valor.multiplayer} \nRegiões: ${valor.regioes}`)})

    // return relatorio   
}

funcaoTituloMaiusculo(arrayDeObjetos)//chamando a função acima





// A média de cópias vendidas e verificação do booleano TRUE (ambos das semana 2) está sendo refatorada logo abaixo, pois meus elementos agora fazem parte de um array de objetos.

console.log("--------------------------")

let mediaCopiasVendidas = null

for (const i of arrayDeObjetos) {
    mediaCopiasVendidas = (mediaCopiasVendidas + i.copias)
}
mediaCopiasVendidas = mediaCopiasVendidas / arrayDeObjetos.length
console.log(`A média de cópias vendidas dos top ${arrayDeObjetos.length} jogos foi: ${mediaCopiasVendidas}`)

console.log("--------------------------")

let todosTrue = null
let c = 0

for (let i = 0; i < arrayDeObjetos.length; i++) {

    if (arrayDeObjetos[i].multiplayer === true) {
        c++
    }

    if (c === 5/*valor referente a quantidade de objetos que entraram no arrayDeObjetos*/) {
        todosTrue = true
    } else {
        todosTrue = false
    }

}
console.log(`Todos os jogos são multiplayer?: ${todosTrue}`)


//-----------------

//semana 6.2 - função de busca
//semana 12 - integrar, via DOM, a função de busca ao painel do usuário

function buscarJogo() {
    let valorBarraDePesquisa = document.querySelector(".input").value

    if ((!valorBarraDePesquisa)) {
        document.querySelector('.container').innerHTML = "";
        renderizaCards(arrayDeObjetos)
        alert("Digite um jogo para ser pesquisado");
        
    } else {

        funcaoDeBusca(arrayDeObjetos, valorBarraDePesquisa)

    }


}


function funcaoDeBusca(array, minhaString) {
    let busca = array.filter((meuParametro) => meuParametro.jogo.toUpperCase().includes(minhaString.toUpperCase()))
    if (busca.length >= 1) {
        document.querySelector('.container').innerHTML = "";
        return renderizaCards(busca)

    } else {
        alert("O jogo não foi encontrado.\n\nObs: para recarregar todos jogos, deixe a barra de pesquisa vazia e clique em pesquisar.")
       
    }
}




// Semana 11 - Altere seu código para que a tela de lista de itens crie os elementos da lista através de manipulação do DOM.
//Obs: na renderização inicial ele irá renderizar todos jogos, após isso irá renderizar somente os jogos cujo nome foi digitado na barra de pesquisa.
const container = document.querySelector('.container')

function renderizaCards(arrayParaBusca){
    for (let i = 0; i < arrayParaBusca.length; i++) {

        let sectionCard = document.createElement('section')
        sectionCard.classList.add('card')
    
        sectionCard.innerHTML += `<div class="imagem">
            <img src="${arrayParaBusca[i].img}" alt="${arrayParaBusca[i].alt}">
        </div>
        <ul>
    
            <li> <a id="texto" href="${arrayParaBusca[i].link}" target="_blank">${arrayParaBusca[i].jogo}</a> </li>
    
            <li>${arrayParaBusca[i].ano}</li>
            <li>Cópias vendidas: ${arrayParaBusca[i].copias}</li>
            <li>Multiplayer: ${arrayParaBusca[i].multiplayer}</li>
            <li>Regiões: ${arrayParaBusca[i].regioes}</li>
        </ul>`
    
        container.appendChild(sectionCard)
    }
}

renderizaCards(arrayDeObjetos)
