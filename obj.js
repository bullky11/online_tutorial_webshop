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
  breed.innerText = `Fajta: ${dog.fajta}`;
  cardContent.appendChild(breed);

  // Create the age element
  const age = document.createElement('p');
  age.innerText = `Kor: ${dog.kor}`;
  cardContent.appendChild(age);

  // Create the gender element
  const gender = document.createElement('p');
  gender.innerText = `Nem: ${dog.nem}`;
  cardContent.appendChild(gender);
  //gomb létrehozása
  const GOMB =document.createElement('button');
  GOMB.innerText=`Részletek`;
  GOMB.classList.add('details-button');
  cardContent.appendChild(GOMB);

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
  // Create the modal element
const modal = document.createElement('div');
modal.classList.add('modal');
modal.id = 'myModal';

// Create the modal dialog element
const modalDialog = document.createElement('div');
modalDialog.classList.add('modal-dialog');
modal.appendChild(modalDialog);

// Create the modal content element
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
modalDialog.appendChild(modalContent);

// Create the modal header element
const modalHeader = document.createElement('div');
modalHeader.classList.add('modal-header');
modalContent.appendChild(modalHeader);

// Create the modal title element
const modalTitle = document.createElement('h5');
modalTitle.classList.add('modal-title');
modalTitle.innerText = 'Dog Details';
modalHeader.appendChild(modalTitle);

// Create the close button element
const closeButton = document.createElement('button');
closeButton.type = 'button';
closeButton.classList.add('close');
closeButton.dataset.dismiss = 'modal';
closeButton.innerHTML = 'CLOSE';
modalHeader.appendChild(closeButton);

// Create the modal body element
const modalBody = document.createElement('div');
modalBody.classList.add('modal-body');
modalContent.appendChild(modalBody);

// Create the modal footer element
const modalFooter = document.createElement('div');
modalFooter.classList.add('modal-footer');
modalContent.appendChild(modalFooter);

// Add the modal to the document body
document.body.appendChild(modal);

}
