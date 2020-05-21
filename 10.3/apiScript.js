const jokeContainer = document.getElementById('jokeContainer');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = (data) => {
  // Adicionar lógica aqui!
    jokeContainer.innerHTML = data.joke;
};


const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject)
.then(response => response.json())
.then(data => fetchJoke(data));

window.onload = () => fetchJoke();
        
