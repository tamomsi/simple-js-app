let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Pikachu', height: 0.4, types: ['electric'] },
        { name: 'Ivysaur', height: 1, types: ['grass', 'poison'] },
        { name: 'Squirtle', height: 0.5, types: ['water'] },
        { name: 'Metapod', height: 0.7, types: ['bug'] }
    ];

    function getAll() {
        return pokemonList;
    }
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class')
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
    };

    return {
        add: add,
        getAll: getAll
    }
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu' });

//this is a ForEach loop
pokemonRepository.getAll().forEach(function (user) {

})