let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Pikachu', height: 0.4, types: ['electric'] },
        { name: 'Ivysaur', height: 1, types: ['grass', 'poison'] },
        { name: 'Squirtle', height: 0.5, types: ['water'] },
        { name: 'Charmander', height: 0.6, types: ['fire'] }
    ];

    function getAll() {
        return pokemonList;
    }
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        add: add,
        getAll: getAll
    }
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu' });

//this is a ForEach loop
pokemonRepository.getAll().forEach(function (user) {
    if (user.height < 1) {
        document.write(user.name + ' ' + '(height:' + ' ' + user.height + ')<br>');
    } else if (user.height >= 1) {
        document.write(user.name + ' ' + '(height:' + ' ' + user.height + ') -Wow, that\'s big!<br>');
    }
})