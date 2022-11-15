

const sample = {}

sample.single = (pokemon) => {
    const display = document.getElementById('display');
    const newHtml = `
    <section id="contentDetails" class="content ${pokemon.type} background">
    <div class="infoMenu">
        <span>
            <a class="link" href="/index.html"><img class="voltar" src="https://cdn-icons-png.flaticon.com/512/59/59173.png" alt="Voltar"></a>
        </span>
        <h1 class="details">Detalhes do pokemon</h1>
    </div>
    <div class="infoHeader ${pokemon.type}">      
        <span class="infoNameNumber">${pokemon.name} (#${pokemon.number})</span>
        <div class="infoPokeTypes">
            ${pokemon.types.map((type) => `<span class="infoType ${pokemon.type}">${type}</span>`).join('')}
        </div>
        <div class="contentImg">
                <button class="preview plusMinus ${pokemon.type}" onclick="verifyMinusButton(${pokemon.number})"><<</button>
                <img class="infoImg" src="${pokemon.photo}" alt="${pokemon.name}">
                <button class="next plusMinus ${pokemon.type}" onclick="verifyPlusButton(${pokemon.number})">>></button>
        </div>
    </div>
    <div class="infoBody">
        <h1 class="details">Pokemon's Stats</h1>
        <ol class="statsLi">
                <li class="statsItem">
                    <span>HP</span>
                    <div  class="statsValue"><div id="hp"class="bar"></div></div>
                </li>
                <li class="statsItem">
                    <span>Attack</span>
                    <div  class="statsValue"><div id="attack"class="bar"></div></div>
                </li>
                <li class="statsItem">
                    <span>Defense</span>
                    <div  class="statsValue"><div id="defense"class="bar"></div></div>
                </li>
                <li class="statsItem">
                    <span>Special Attack</span>
                    <div  class="statsValue"><div id="specialAttack"class="bar"></div></div>
                </li>
                <li class="statsItem">
                    <span>Special Defense</span>
                    <div  class="statsValue"><div id="specialDefense"class="bar"></div></div>
                </li>
                <li class="statsItem">
                    <span>Speed</span>
                    <div  class="statsValue"><div id="speed"class="bar"></div></div>
                </li>
            </ol>
    </div>
    </section>
    `;
    display.innerHTML = newHtml;
    sample.stats(pokemon);
}

sample.stats = (pokemon) => {
    const hp = document.getElementById("hp");
    const attack = document.getElementById("attack");
    const defense = document.getElementById("defense");
    const spAttack = document.getElementById("specialAttack");
    const spDefense = document.getElementById("specialDefense");
    const speed = document.getElementById("speed");

    
    hp.style.width = pokemon.hp + "%";
    attack.style.width = pokemon.attack + "%";
    defense.style.width = pokemon.defense + "%";
    spAttack.style.width = pokemon.specialAttack + "%";
    spDefense.style.width = pokemon.specialDefense + "%";
    speed.style.width = pokemon.speed + "%";
}


function verifyMinusButton(number){
    let previous = number-1;
    if(previous < 1){
        alert("Não existe pokemon abaixo do 0. Por favor, selecione o botão de próximo(>>)");
        previous = 1;
    }
    pokeApi.pokeSingle(previous)
}

function verifyPlusButton(number){
    let next = number+1;
    if(next > 151){
        alert("Esta pokedex é limitada a primeira geração, o máximo de pokemons mostrados são 151. Por favor, selecione o botão de anterior(<<)");
        next = 151;
    }
    pokeApi.pokeSingle(next);
}

