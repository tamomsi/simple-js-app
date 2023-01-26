let pokemonList = [
    { name: 'Pikachu', height: 0.4, types: ['electric'] },
    { name: 'Ivysaur', height: 1, types: ['grass', 'poison'] },
    { name: 'Squirtle', height: 0.5, types: ['water'] },
    { name: 'Charmander', height: 0.6, types: ['fire'] }
];

//this is a loop for pokemonList which hihglights one with a bigger size
//for (let i = 0; i < pokemonList.length; i++) {
// if (pokemonList[i].height < 1) {
// document.write(pokemonList[i].name + ' ' + '(height:' + ' ' + pokemonList[i].height + ')<br>');
// } else if (pokemonList[i].height >= 1) {
//    document.write(pokemonList[i].name + ' ' + '(height:' + ' ' + pokemonList[i].height + ') -Wow, that\'s big!<br>');
// }
//}

// this is a forEach loop
pokemonList.forEach(function (user) {
    if (user.height < 1) {
        document.write(user.name + ' ' + '(height:' + ' ' + user.height + ')<br>');
    } else if (user.height >= 1) {
        document.write(user.name + ' ' + '(height:' + ' ' + user.height + ') -Wow, that\'s big!<br>');
    }
})