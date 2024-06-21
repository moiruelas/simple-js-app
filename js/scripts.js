let pokemonList = [
  //let pokemonList makes it so variable is named pokemonList. The [] is used to create an array. Each item inside the array that is also nested inside {} is an object. The name of the object denoted as Name: followed by "bulbasuar" indicates that the name of the object is bulbasaur, this is the key of the preceding item, height is an additional key named height folloed by the height of the object, keys and values are denoted by the colon. Type is another key that is also an additional array containing the type of the pokemo in strings denoted by the apostrophe.
  {name: "Bulbasaur", height: 0.7, type: ['Grass', 'Poison']},
  {name: "Ivysaur", height: 1, type: ['Grass', 'Poison']},
  {name: "Venusaur", height: 2, type: ['Grass', 'Poison']},
  {name: "Charmander", height: 0.6, type: ['Fire']},
  {name: "Charmeleon", height: 1.1, type: ['Fire']},
  {name: "Charizard", height: 1.7, type: ['Fire', 'Flying']},
  {name: "Squirtle", height: 0.5, type: ['Water']},
  {name: "Wartortle", height: 1, type: ['Water']},
  {name: "Blastoise", height: 1.6, type: ['Water']},
  {name: "Caterpie", height: 0.3, type: ['Bug']},
  {name: "Metapod", height: 0.7, type: ['Bug']},
  {name: "Butterfree", height: 1.1, type: ['Bug', 'Flying']},
  {name: "Weedle", height: 0.3, type: ['Bug', 'Poison']},
  {name: "Kakuna", height: 0.6, type: ['Bug', 'Poison']},
  {name: "Beedrill", height: 1, type: ['Bug', 'Poison']},
  {name: "Pidgey", height: 0.3, type: ['Normal', 'Flying']},
  {name: "Pidgeotto", height: 1.1, type: ['Normal', 'Flying']},
  {name: "Pidgeot", height: 1.5, type: ['Normal', 'Flying']},
  {name: "Rattata", height: 0.3, type: ['Normal']},
  {name: "Raticate", height: 0.7, type: ['Normal']},
  {name: "Spearow", height: 0.3, type: ['Normal', 'Flying']},
  {name: "Fearow", height: 1.2, type: ['Normal', 'Flying']},
  {name: "Ekans", height: 2, type: ['Poison']},
  {name: "Arbok", height: 3.5, type: ['Poison']},
  {name: "Pikachu", height: 0.4, type: ['Electric']},
  {name: "Raichu", height: 0.8, type: ['Electric']},
  {name: "Sandshrew", height: 0.6, type: ['Ground']},
  {name: "Sandslash", height: 1, type: ['Ground']},
  {name: "Nidoran♀", height: 0.4, type: ['Poison']},
  {name: "Nidorina", height: 0.8, type: ['Poison']},
  {name: "Nidoqueen", height: 1.3, type: ['Poison', 'Ground']},
  {name: "Nidoran♂", height: 0.5, type: ['Poison']},
  {name: "Nidorino", height: 0.9, type: ['Poison']},
  {name: "Nidoking", height: 1.4, type: ['Poison', 'Ground']},
  {name: "Clefairy", height: 0.6, type: ['Fairy']},
  {name: "Clefable", height: 1.3, type: ['Fairy']},
  {name: "Vulpix", height: 0.6, type: ['Fire']},
  {name: "Ninetales", height: 1.1, type: ['Fire']},
  {name: "Jigglypuff", height: 0.5, type: ['Normal', 'Fairy']},
  {name: "Wigglytuff", height: 1, type: ['Normal', 'Fairy']},
  {name: "Zubat", height: 0.8, type: ['Poison', 'Flying']},
  {name: "Golbat", height: 1.6, type: ['Poison', 'Flying']},
  {name: "Oddish", height: 0.5, type: ['Grass', 'Poison']},
  {name: "Gloom", height: 0.8, type: ['Grass', 'Poison']},
  {name: "Vileplume", height: 1.2, type: ['Grass', 'Poison']},
  {name: "Paras", height: 0.3, type: ['Bug', 'Grass']},
  {name: "Parasect", height: 1, type: ['Bug', 'Grass']},
  {name: "Venonat", height: 1, type: ['Bug', 'Poison']},
  {name: "Venomoth", height: 1.5, type: ['Bug', 'Poison']},
  {name: "Diglett", height: 0.2, type: ['Ground']},
  {name: "Dugtrio", height: 0.7, type: ['Ground']},
  {name: "Meowth", height: 0.4, type: ['Normal']},
  {name: "Persian", height: 1, type: ['Normal']},
  {name: "Psyduck", height: 0.8, type: ['Water']},
  {name: "Golduck", height: 1.7, type: ['Water']},
  {name: "Mankey", height: 0.5, type: ['Fighting']},
  {name: "Primeape", height: 1, type: ['Fighting']},
  {name: "Growlithe", height: 0.8, type: ['Fire']},
  {name: "Arcanine", height: 1.9, type: ['Fire']},
  {name: "Poliwag", height: 0.6, type: ['Water']},
  {name: "Poliwhirl", height: 1, type: ['Water']},
  {name: "Poliwrath", height: 1.3, type: ['Water', 'Fighting']},
  {name: "Abra", height: 0.9, type: ['Psychic']},
  {name: "Kadabra", height: 1.3, type: ['Psychic']},
  {name: "Alakazam", height: 1.5, type: ['Psychic']},
  {name: "Machop", height: 0.8, type: ['Fighting']},
  {name: "Machoke", height: 1.5, type: ['Fighting']},
  {name: "Machamp", height: 1.6, type: ['Fighting']},
  {name: "Bellsprout", height: 0.7, type: ['Grass', 'Poison']},
  {name: "Weepinbell", height: 1, type: ['Grass', 'Poison']},
  {name: "Victreebel", height: 1.7, type: ['Grass', 'Poison']},
  {name: "Tentacool", height: 0.9, type: ['Water', 'Poison']},
  {name: "Tentacruel", height: 1.6, type: ['Water', 'Poison']},
  {name: "Geodude", height: 0.4, type: ['Rock', 'Ground']},
  {name: "Graveler", height: 1, type: ['Rock', 'Ground']},
  {name: "Golem", height: 1.4, type: ['Rock', 'Ground']},
  {name: "Ponyta", height: 1, type: ['Fire']},
  {name: "Rapidash", height: 1.7, type: ['Fire']},
  {name: "Slowpoke", height: 1.2, type: ['Water', 'Psychic']},
  {name: "Slowbro", height: 1.6, type: ['Water', 'Psychic']},
  {name: "Magnemite", height: 0.3, type: ['Electric', 'Steel']},
  {name: "Magneton", height: 1, type: ['Electric', 'Steel']},
  {name: "Farfetch'd", height: 0.8, type: ['Normal', 'Flying']},
  {name: "Doduo", height: 1.4, type: ['Normal', 'Flying']},
  {name: "Dodrio", height: 1.8, type: ['Normal', 'Flying']},
  {name: "Seel", height: 1.1, type: ['Water']},
  {name: "Dewgong", height: 1.7, type: ['Water', 'Ice']},
  {name: "Grimer", height: 0.9, type: ['Poison']},
  {name: "Muk", height: 1.2, type: ['Poison']},
  {name: "Shellder", height: 0.3, type: ['Water']},
  {name: "Cloyster", height: 1.5, type: ['Water', 'Ice']},
  {name: "Gastly", height: 1.3, type: ['Ghost', 'Poison']},
  {name: "Haunter", height: 1.6, type: ['Ghost', 'Poison']},
  {name: "Gengar", height: 1.5, type: ['Ghost', 'Poison']},
  {name: "Onix", height: 8.8, type: ['Rock', 'Ground']},
  {name: "Drowzee", height: 1, type: ['Psychic']},
  {name: "Hypno", height: 1.6, type: ['Psychic']},
  {name: "Krabby", height: 0.4, type: ['Water']},
  {name: "Kingler", height: 1.3, type: ['Water']},
  {name: "Voltorb", height: 0.5, type: ['Electric']},
  {name: "Electrode", height: 1.2, type: ['Electric']},
  {name: "Exeggcute", height: 0.4, type: ['Grass', 'Psychic']},
  {name: "Exeggutor", height: 2, type: ['Grass', 'Psychic']},
  {name: "Cubone", height: 0.4, type: ['Ground']},
  {name: "Marowak", height: 1, type: ['Ground']},
  {name: "Hitmonlee", height: 1.5, type: ['Fighting']},
  {name: "Hitmonchan", height: 1.4, type: ['Fighting']},
  {name: "Lickitung", height: 1.2, type: ['Normal']},
  {name: "Koffing", height: 0.6, type: ['Poison']},
  {name: "Weezing", height: 1.2, type: ['Poison']},
  {name: "Rhyhorn", height: 1, type: ['Ground', 'Rock']},
  {name: "Rhydon", height: 1.9, type: ['Ground', 'Rock']},
  {name: "Chansey", height: 1.1, type: ['Normal']},
  {name: "Tangela", height: 1, type: ['Grass']},
  {name: "Kangaskhan", height: 2.2, type: ['Normal']},
  {name: "Horsea", height: 0.4, type: ['Water']},
  {name: "Seadra", height: 1.2, type: ['Water']},
  {name: "Goldeen", height: 0.6, type: ['Water']},
  {name: "Seaking", height: 1.3, type: ['Water']},
  {name: "Staryu", height: 0.8, type: ['Water']},
  {name: "Starmie", height: 1.1, type: ['Water', 'Psychic']},
  {name: "Mr. Mime", height: 1.3, type: ['Psychic', 'Fairy']},
  {name: "Scyther", height: 1.5, type: ['Bug', 'Flying']},
  {name: "Jynx", height: 1.4, type: ['Ice', 'Psychic']},
  {name: "Electabuzz", height: 1.1, type: ['Electric']},
  {name: "Magmar", height: 1.3, type: ['Fire']},
  {name: "Pinsir", height: 1.5, type: ['Bug']},
  {name: "Tauros", height: 1.4, type: ['Normal']},
  {name: "Magikarp", height: 0.9, type: ['Water']},
  {name: "Gyarados", height: 6.5, type: ['Water', 'Flying']},
  {name: "Lapras", height: 2.5, type: ['Water', 'Ice']},
  {name: "Ditto", height: 0.3, type: ['Normal']},
  {name: "Eevee", height: 0.3, type: ['Normal']},
  {name: "Vaporeon", height: 1, type: ['Water']},
  {name: "Jolteon", height: 0.8, type: ['Electric']},
  {name: "Flareon", height: 0.9, type: ['Fire']},
  {name: "Porygon", height: 0.8, type: ['Normal']},
  {name: "Omanyte", height: 0.4, type: ['Rock', 'Water']},
  {name: "Omastar", height: 1, type: ['Rock', 'Water']},
  {name: "Kabuto", height: 0.5, type: ['Rock', 'Water']},
  {name: "Kabutops", height: 1.3, type: ['Rock', 'Water']},
  {name: "Aerodactyl", height: 1.8, type: ['Rock', 'Flying']},
  {name: "Snorlax", height: 2.1, type: ['Normal']},
  {name: "Articuno", height: 1.7, type: ['Ice', 'Flying']},
  {name: "Zapdos", height: 1.6, type: ['Electric', 'Flying']},
  {name: "Moltres", height: 2, type: ['Fire', 'Flying']},
  {name: "Dratini", height: 1.8, type: ['Dragon']},
  {name: "Dragonair", height: 4, type: ['Dragon']},
  {name: "Dragonite", height: 2.2, type: ['Dragon', 'Flying']},
  {name: "Mewtwo", height: 2, type: ['Psychic']},
  {name: "Mew", height: 0.4, type: ['Psychic']},
];

let tallestPokemon = null;
let tallestHeight = 0;
//tallestPokemon is a variable that is set to null as it's the starting point and no pokemon have been found, once one is found it will update it with the name of the pokemon. tallestHeight is another variable, it is set to 0 as no height has been found. As the loop runs it will update the name with the corresponding height.

pokemonList.forEach(pokemon => {
  if (pokemon.height > tallestHeight) {
    //This 'if' statement will check if the current pokemon on the list is greater than the tallest height found so far.
    tallestPokemon = pokemon;
    //If the above statement is true, the 'tallestPokemon' variable will be updated to the current pokemon.
    tallestHeight = pokemon.height;
    //If the above statement is true, the 'tallestHeight' variable will be updated to the height of the current pokemon.
  }
});
  //this loop sets the variable 'i' with the value of 0 and then checks if 'i' is less than the length of the array 'pokemonList'. The list has a length of 151. So the loops runs as 'i' = 0 which is less than 151. The i++ is used to add 1 to the value of 'i' every time the loop runs. Since the array is longer than 0, it will add 1 to 'i' every time the loop runs increasing the value of 'i' by 1 until it reaches 151.
  
for (let i = 0; i < pokemonList.length; i++) {
  let pokemon = pokemonList[i];
  document.write(`<p>${pokemon.name} (Height: ${pokemon.height} m) (Type: ${pokemon.type}`);
  //this writes the value of the object in the array 'pokemonList' at the index 'i' inlcuding the name, height and type of the pokemon. The <p> tag is used to create a paragraph element and the ${pokemon.name} is used to insert the value of the name property of the pokemon object, height and type. While the "m" in height element is used to insert that letter next to the height to indicate that it is in meters. The pragraph element here is not closed with a </p> becasue it will be closed with the next loop.

  if (pokemon === tallestPokemon) {
    //This checks if the current pokemon on the list is the same as the tallest pokemon found so far.
    document.write(`) - Wow, that's a big pokemon!</p>`);
    //If the above statement is true, it will add the text "Wow, that's a big pokemon!" to the end of the paragraph element. This statement has the clsoing </p> tag so if it is the tallest pokemon it will be closed.
    console.log(`<p>${pokemon.name} (Height: ${pokemon.height} m) (Type: ${pokemon.type}) - Wow, that's a big pokemon!</p>`);
  } else {
    document.write(`)</p>`);
    //This else statement dictates that if the current pokemon is not the tallest it will close the paragraph element printed in the previous loop.
    console.log(`<p>${pokemon.name} (Height: ${pokemon.height} m) (Type: ${pokemon.type})</p>`);
  }
}

function divide(dividend, divisor) {
  if (divisor === 0) {
    return "You're trying to divide by zero";
  } else {
    let result = dividend / divisor;
    return result;
  }
}

console.log(divide(4, 2));
console.log(divide(7, 0));
console.log(divide(1, 4));
console.log(divide(12, -3));