import { KUTYALISTA } from "./adatok.js";
import { KUTYAKULCS } from "./adatok.js";

// Get the parent element where the dog cards will be added
const parentElement = document.getElementById('dog-cards');

// Loop through the KUTYALISTA array and create a card for each dog
for (let i = 0; i < KUTYALISTA.length; i++) {
  const dog = KUTYALISTA[i];

  // Create the card element
  const card = document.createElement('div');
  card.classList.add('col-sm-12', 'col-md-6', 'col-lg-4', 'mb-4');

  // Create the card body element
  const cardBody = document.createElement('div');
  cardBody.classList.add('card', 'h-100');
  card.appendChild(cardBody);

  // Create the image element
  const img = document.createElement('img');
  img.src = dog.kephely;
  img.alt = dog.nev;
  img.classList.add('card-img-top');
  img.classList.add('dog-img');
  cardBody.appendChild(img);

  // Create the card content element
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-body');
  cardBody.appendChild(cardContent);

  // Create the name element
  const name = document.createElement('h2');
  name.innerText = dog.nev;
  cardContent.appendChild(name);

  // Create the breed element
  const breed = document.createElement('p');
  breed.innerText = `Breed: ${dog.fajta}`;
  cardContent.appendChild(breed);

  // Create the age element
  const age = document.createElement('p');
  age.innerText = `Age: ${dog.kor}`;
  cardContent.appendChild(age);

  // Create the gender element
  const gender = document.createElement('p');
  gender.innerText = `Gender: ${dog.nem}`;
  cardContent.appendChild(gender);

  // Add a click event listener to show the details of the dog in a popup
  card.addEventListener('click', () => {
    showDetails(dog.kephely, dog.nev, `${dog.fajta}, ${dog.kor} years old, ${dog.nem}`);
  });

  // Add the card to the parent element
  parentElement.appendChild(card);

  // Add a new row every 3 cards
  if ((i + 1) % 3 === 0) {
    const row = document.createElement('div');
    row.classList.add('row');
    parentElement.appendChild(row);
  }
}
