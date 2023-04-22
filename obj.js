const Tutorial = [
    
    {},
    {},
    {},
    {}
];
/*tutorial ötletek*/
/*
1.cooking chicke with slaps
2.ez a vidi https://www.youtube.com/watch?v=Wa_WWGQwBhU
3.how to cook a minute rice in 58 seconds
4.how to imagine anything
5.how to order food?
6.ez a vidi? https://www.youtube.com/watch?v=zGAUwmWmZiU
7.https://top-10-list.org/2013/02/02/top-10-most-useless-tutorials/
8.


kosár
admin felület
képek hozzáadsa alap leírssal,tutorial tipusok kiszerzeés
*/
//GOMB CLICK POP UP ABLAKOK
function showDetails(imageSrc, title, description) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
  
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
  
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;
    popupContent.appendChild(img);
  
    const titleElem = document.createElement('h2');
    titleElem.innerText = title;
    popupContent.appendChild(titleElem);
  
    const descElem = document.createElement('p');
    descElem.innerText = description;
    popupContent.appendChild(descElem);
  
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.addEventListener('click', () => {
      popup.remove();
    });
    popupContent.appendChild(closeButton);
  
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
  }
  
