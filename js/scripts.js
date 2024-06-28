let pokemonRepository = (function() {
  // This is an immediately invoked function expression (IIFE)
  let pokemonList = [];
    //let pokemonList makes it so variable is named pokemonList. The [] is used to create an array. Each item inside the array that is also nested inside {} is an object. The name of the object denoted as Name: followed by "bulbasuar" indicates that the name of the object is bulbasaur, this is the key of the preceding item, height is an additional key named height folloed by the height of the object, keys and values are denoted by the colon. Type is another key that is also an additional array containing the type of the pokemo in strings denoted by the apostrophe.
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  function addListItem(pokemon, isTallest) {
    //This function is named addListItem and takes in two parameters, pokemon and isTallest (this indicates if the pokemon is the tallest).
    let pokemonListElement = document.querySelector(".pokemon-list");
    //This finds the DOM elemnt with the class named `.pokemon-list` and assigns to the variable named `pokemonListElement`.
    let listpokemon = document.createElement("li");
    //This creates a new DOM element with the tag name `li` and assigns it to the variable named `listpokemon`. It will be used to contain the name, height and type of the pokemon, it creates one for each pokemon.
    let button = document.createElement("button");
    //This creates a new button element and assigns it to the variable named `button`. Each pokemon will have a button with the name, height and type of the pokemon.
    button.innerText = `${pokemon.name}` 
    //(Height: ${pokemon.height}m, Type: ${pokemon.type.join(', ')})`;
    //This adds the name, height and type of the pokemon to the button.
    if (isTallest) {
      button.innerText += " - Wow, that's a big Pokémon!";
    }
    //This condition is used to add the text "Wow, that's a big pokemon!" to the button if the pokemon is the tallest.
    button.classList.add("button-class");
    //This takes the CSS styling for the button and adds it to the button.
    button.addEventListener('click', function(){
      showDetails(pokemon);
    });
    //This adds an event listener to the button that listens for a click, once a click is detected the function showDetails is called.
    listpokemon.appendChild(button);
    //This appends (or adds) the button as a child to the list item.
    pokemonListElement.appendChild(listpokemon);
  }
  //This adds the button to the pokemon list in the DOM (or webpage). This allows it to be displayed on the screen.

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
          height: item.height,
          type: [item.types]
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      //Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function ()
    {
      console.log(item);
    });
  }

  // function showDetails(pokemon) {
  //   //This defines the function showDetails, which takes one parameter in this case it is called pokemon.
  //   console.log(`Name: ${pokemon.name}`);
  //   //This logs the name of the pokemon in the console.
  //   console.log(`Height: ${pokemon.height}`);
  //   //This logs the height of the pokemon in the console.
  //   console.log(`Type: ${pokemon.type.join(', ')}`);
  //   //This logs the type of the pokemon in the console. I
  // }
  //Initially this code was just written as console.log(pokemon); However when logging to the conosle it was logging the types as "Array(1)or(2)" for the number of types in the array instead of the actual type. I changed it to print the exact text to actually log the type.

  
  function add(item) {
    //This funcction allows the user to add a pokemon to the list array.
    if (typeof item === 'object' && "name" in item && "detailsUrl" in item) {
    //This checks that the item added is an object with name, height and type.
      pokemonList.push(item);
      //The push method adds the new pokemon to the list array.
      console.log (`${item.name} added to pokemonList.`);
      //This logs in the console that the pokemon has been added correctly.
    } else {
      console.error(`Invalid Pokemon. Please check your Pokemon name, height and type.`);
      //This logs in the conosle if there was an errr in adding the pokemon to the list and advoces to check for errors. I will later update this to be able to identify what exactly did not work.
    }
  }

  function getAll() {
    return pokemonList;
    //This function returns the pokemon list.
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

let tallestPokemon = null;
let tallestHeight = 0;
//tallestPokemon is a variable that is set to null as it's the starting point and no pokemon have been found, once one is found it will update it with the name of the pokemon. tallestHeight is another variable, it is set to 0 as no height has been found. As the loop runs it will update the name with the corresponding height.

pokemonRepository.getAll().forEach(pokemon => {
  if (pokemon.height > tallestHeight) {
    //This 'if' statement will check if the current pokemon on the list is greater than the tallest height found so far.
    tallestPokemon = pokemon;
    //If the above statement is true, the 'tallestPokemon' variable will be updated to the current pokemon.
    tallestHeight = pokemon.height;
    //If the above statement is true, the 'tallestHeight' variable will be updated to the height of the current pokemon.
  }
});
  //this loop sets the variable 'i' with the value of 0 and then checks if 'i' is less than the length of the array 'pokemonList'. The list has a length of 151. So the loops runs as 'i' = 0 which is less than 151. The i++ is used to add 1 to the value of 'i' every time the loop runs. Since the array is longer than 0, it will add 1 to 'i' every time the loop runs increasing the value of 'i' by 1 until it reaches 151.
  
pokemonRepository.getAll().forEach(pokemon => {
  const isTallest = pokemon === tallestPokemon;
  pokemonRepository.addListItem(pokemon, isTallest);
  //This loop runs through the entire list of pokemon and calls the addListItem function for each pokemon.
  //This variable will be used to display the pokemon on the screen.
});