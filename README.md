# Projeto Pokedéx

Originalmente fiz esse projeto para um bootcamp da Dio de Js (Orange Tech). Nas aulas iniciais o professor ensinou a usar o método **fetch** para consumir uma API.
Ele nos ensinou mostrando como fazer a lista de todos os primeiros 151 pokemons e de mostra-los de 10 em 10. Ao fim do módulo foi sugerido um desafio para entregar o projeto: Criar alguma melhoria para a lista de pokemons. Minha solução foi a seguinte:
- Criar uma interface que mostrasse cada pokemon individualmente;
- Mostrar os stats de cada pokemon nessa interface;
- Criar botões de navegação que permitissem avançar ou regressar entre os pokemons, de modo que pudesse ver os stats de cada pokemon individualmente;
- Criar um botão que possibilitasse retornar a página inicial da listagem de pokemons;
- Por questões estéticas, mostrar 12 pokemons por vez ao invés de 10.

Para conseguir isso eu implementei o seguinte:
1. Criei a função **pokeapi.pokeSingle** que recebe o número de um pokemon e busca os dados dele na *pokeapi v2*; após isso converte esse pokemon em json e busca certos parâmetros dele, como nome, número, tipos, tipo principal e stats.
2. Essa função por sua vez chama uma outra, que eu criei no arquivo **single.js**. Neste arquivo fica a função *sample*, seu método *single* é invocado por *pokeapi.pokeSingle*  e recebe os dados deste pokemon em particular.
3. Esta função é responsável por reescrever o HTML da página index e alocar todos os dados do pokemon recebido em seu devido lugar.
4. No topo da página foi adicionado um botão de voltar que retorna a listagem de pokemons.
5. Na lateral da imagem do pokemon foram adicionados 2 botões que invocam funções para mostrar o próximo pokemon, ou o anterior.
6. Se o pokemon for o de número 1 e o botão de pokemon anterior for pressionado aparace um alert na tela informando que não há pokemon 0. E como essa pokedex é destinada a primeira geração, se o pokemon for o de número 151 for pressionado, um alert aparecerá infromando deste escopo do projeto.

Espero que aproveitem o projeto e qualquer sugestão ou modificação pode ser feita. Fico muito feliz em ouvir e aprender mais.


