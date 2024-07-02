let pokemonRepository = (function() {
  // This is an immediately invoked function expression (IIFE)
  let pokemonList = [];
    //This empty array denoted by [] will be filled out from the API below by the functions below. Mainly by addListItem and loadList.
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';//This sets the URL for the API.

  function addListItem(pokemon, isTallest) {
    //This function is named addListItem and takes in two parameters, pokemon and isTallest (this indicates if the pokemon is the tallest).
    let pokemonListElement = document.querySelector(".pokemon-list");
    //This finds the DOM elemnt with the class named `.pokemon-list` and assigns to the variable named `pokemonListElement`.
    let listpokemon = document.createElement("li");
    //This creates a new DOM element with the tag name `li` and assigns it to the variable named `listpokemon`. 
    //It will be used to contain the name, height and type of the pokemon, it creates one for each pokemon.
    let button = document.createElement("button");
    //This creates a new button element and assigns it to the variable named `button`. 
    //Each pokemon will have a button with the name, height and type of the pokemon.
    button.innerText = `${pokemon.name}`; 
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
    //This function loads the list of pokemons from the API.
    return fetch(apiUrl).then(function (response) {
      //This starts a fetch request to the API, the function then returns the promise that resolves to response of the reuqest. 
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
    //This function displays the details of the pokemon in a modal dialog (name as title, height as text and image url).
    let modalContainer = document.querySelector('#modal-container');
    //This selects the HTML element with the ID 'modal-container' and assigns it to the variable 'modalContainer'.
    modalContainer.innerHTML = '';
    //This clears any content that is inside the modalContainer

    let modal = document.createElement('div');
    //This creates a new 'div' and assigns it to the variable 'modal'
    modal.classList.add('modal');
    //This adds the class 'modal' to the new 'div'

    let closeButtonElement = document.createElement('button');
    //This creates a new 'button' and assigns it to the variable 'closeButtonElement'
    closeButtonElement.classList.add('modal-close');
    //This adds the class 'modal-close' to the new 'button' which then allows css styling to be applied
    closeButtonElement.innerText = 'Close';
    //This adds the text 'Close' to the new 'button'
    closeButtonElement.addEventListener('click', hideModal);
    //This adds an eventListener to the new 'button' that hides the modal effectively closing it when clicked

    let titleElement = document.createElement('h1');
    //This creates a new 'h1' and assigns it to the variable 'titleElement'
    titleElement.innerText = title;
    //This adds the text 'title' to the new 'h1'

    let contentElement = document.createElement('p');
    //This  creates a new 'p' and assigns it to the variable 'contentElement'
    contentElement.innerText = text;
    //  This adds the text 'text' to the new 'p'

    let imageElement = document.createElement('img');
    //This creates a new 'img' and assigns it to the variable 'imageElement'
    imageElement.src = imageUrl;
    //This adds the image url to the new 'img'
    imageElement.alt = title;
    //This selts the alt text title
    imageElement.classList.add('modal-image'); //Adding a class for styke sheet

    modal.appendChild(closeButtonElement);
    //This appends the new 'button' to the modal
    modal.appendChild(titleElement);
    //This appends the new 'h1' to the modal
    modal.appendChild(contentElement);
    //This appends the new 'p' to the modal
    modal.appendChild(imageElement);
    //This appends the new 'imgElement' to the modal
    modalContainer.appendChild(modal);
    //This appends the new 'modal' to the modalContainer

    modalContainer.classList.add('is-visible');
    //This adds the class 'is-visible' to the modalContainer to make it visible

    document.addEventListener('keydown', function(e) {
      //This listens for the keydown event
      if (e.key === 'Escape') {
        //This checks if the key pressed is 'Escape'
        hideModal();
        //This hides the modal when the 'Escape' key is pressed
      }
    });

    modalContainer.addEventListener('click', (e) => {
      //This adds an event listener to the modalContainer that listens for a click
      let target = e.target;
      //This assigns the click event to the variable 'target'
      if (target === modalContainer) {
        //This checks if the target is the modalContainer
        hideModal();
        //This hides the modal once clicked outside of it
      }
    });
  }

  function hideModal() {
    //This function hides the modal by removing the class 'is-visible' from the modalContainer
    let modalContainer = document.querySelector('#modal-container');
    //This selects the HTML element with the ID 'modal-container' and assigns it to the variable 'modalContainer'.
    modalContainer.classList.remove('is-visible');
    //This removes the class 'is-visible' from the modalContainer to make it invisible using CSS styling
  }
  
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