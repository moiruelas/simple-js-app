let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=9';//This sets the URL for the API.

  function addListItem(pokemon) {
    //This function is named addListItem and takes in one parameter, pokemon.
    let pokemonListElement = document.querySelector(".pokemon-list");
    //This finds the DOM element with the class named `.pokemon-list` and assigns to the variable named `pokemonListElement`.
    let listpokemon = document.createElement("li");
    //This creates a new DOM element with the tag name `li` and assigns it to the variable named `listpokemon`. 
    //It will be used to contain the name, height and type of the pokemon, it creates one for each pokemon.
    listpokemon.classList.add("list-group-item");
    //This adds the CSS class `list-group-item` to the list item.
    let button = document.createElement("button");
    //This creates a new button element and assigns it to the variable named `button`. 
    //Each pokemon will have a button with the name, height and type of the pokemon.
    button.innerText = `${pokemon.name}`; 
    //(Height: ${pokemon.height}m, Type: ${pokemon.type.join(', ')})`;
    //This adds the name, height and type of the pokemon to the button.
    button.classList.add("btn", "btn-primary", "btn-sm");
    //This takes the CSS styling for the button and adds it to the button.
    button.setAttribute("data-toggle", "modal");
    //This enables the bootstrap modal to be displayed.
    //This adds the data-toggle attribute to the button.
    button.setAttribute("data-target", "#pokemonModal");
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
    //This function loads the list of pokemons from the API.
    return fetch(apiUrl).then(function (response) {
      //This starts a fetch request to the API, the function then returns the promise that resolves to response of the request. 
      //Once the promise resolves, the response is passed to the next .then(). 
      return response.json();
      //This returns the response in JSON format
    }).then(function (json) {
      //This takes the JSON and converts it to an object
      json.results.forEach(function (item) {
        //This iterates through the JSON object and adds each pokemon to the list
        let pokemon = {
          //This creates an object that will be added to the list
          name: item.name,
          //This adds the name of the pokemon from the api
          detailsUrl: item.url,
          //This adds the url of the pokemon from the api
        };
        add(pokemon);
        //This calls the add function to add the pokemon to the list
      });
    }).catch(function (e) {
      //If any errors occur during the fetch request, they will be caught here. The error will be passed this this function as the 'e' parameter.
      console.error(e);
      //This logs the error in the console
    })
  }

  function loadDetails(item) {
    //This function will load the details of the pokemon from the API
    let url = item.detailsUrl;
    //This returns the url of the pokemon with it's details and assigns it to the variable 'url'
    return fetch(url).then(function (response) {
      //This starts a fetch request to the url of the pokemon that then resolves the response of the request. 
      //Once resolved the response object is passed to the next .then()
      return response.json();
      //This returns the response in JSON format and returns it as a promise. Once resolved the JSON object is passed to the next .then()
    }).then(function (details) {
      //This takes the JSON and converts it to an object
      //Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      //This adds the image url to the item, allowing an img to be displayed
      item.height = details.height;
      //This adds the height to the item
      item.types = details.types;
      //This adds the types to the pokemon
    }).catch(function (e) {
      console.error(e);
      //This logs the error in the console as an 'e' parameter
    });
  }
  
  function showDetails(item) {
    //This function shows the details of the pokemon
    pokemonRepository.loadDetails(item).then(function (){
      //This calls the loadDetails function from the repository and passes the item as the parameter. 
      //Then it returns a promise that resolves when the details are loaded and added to the pokemon.
      //Once the promise is resolved, the next .then() is called.
      showModal(item.name, `Height: ${item.height}m`, item.imageUrl);
      //This calls the showModal function which displahys the pokemon's details in a modal dialog.
      //It then passes three arguments whigh are the name, height and image url.
    });
  }

  function showModal(title, text, imageUrl) {
    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');
    
    modalTitle.innerText = title;
    modalBody.innerHTML = `<img src="${imageUrl}" class="img-fluid mb-2" alt="${title}"><p>${text}</p>`;

    $('#pokemonModal').modal(show);
  }
  
  function add(item) {
    //This funcction allows the user to add a pokemon to the list array.
    if (typeof item === 'object' && "name" in item && "detailsUrl" in item) {
    //This checks that the item added is an object with name, height and type.
      pokemonList.push(item);
      //The push method adds the new pokemon to the list array.
    } else {
      console.error(`Invalid Pokemon. Please check your Pokemon name, height and type.`);
      //This logs in the console if there was an error in adding the pokemon to the list and advises to check for errors. I will later update this to be able to identify what exactly did not work.
    }
  }

  function getAll() {
    return pokemonList;
    //This function returns the pokemon list.
  }

  return {
    //This begins the return of an object from the IIFE, it contains the below methods that can be accessed from the outside of the IIFE
    add: add,
    //This adds the 'add' method to the object
    getAll: getAll,
    //This adds the 'getAll' method to the object
    addListItem: addListItem,
    //This adds the 'addListItem' method to the object
    loadList: loadList,
    //This adds the 'loadList' method to the object
    loadDetails: loadDetails,
    //This adds the 'loadDetails' method to the object
    showDetails: showDetails
    //This adds the 'showDetails' method to the object
  };
})();

pokemonRepository.loadList().then(function() {
  //This calls the loadList function from the repository, once the list is loaded it will call the next .then()
  pokemonRepository.getAll().forEach(function(pokemon) {
    //This iterates through the list and adds each pokemon to the list, once each pokemon is added it will call the next .then()
    pokemonRepository.addListItem(pokemon);
    //This calls the addListItem function from the repository and a new item and button for the pokemon adds it to the DOM making it visible
  });
});
