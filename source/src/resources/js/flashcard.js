var cardIndex;
var addIndex;

function cardFlip() {
    const activeCard = document.querySelector('.act')
    const element = activeCard.querySelector('.flash-card .flash-card-inner');
    element.classList.toggle('cardFlip')
  }


function cardClick(elem){
  if(elem.classList.contains("act")) cardFlip();
  else if(elem.classList.contains("prev")) prev();
  else if(elem.classList.contains("next")) next();
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        cardFlip();
    }
    if (event.code == 'ArrowLeft') {
        prev();
    }
    if (event.code == 'ArrowRight') {
      next();
    }   
})

const $ = selector => {
    return document.querySelector(selector);
  };


function deckInit(){
  cardIndex = 0;
  addIndex = 0;

  const prevLi = document.createElement('li');
  addCard(prevLi);

  addIndex = 0;
  $(".list").appendChild(prevLi);
  prevLi.classList.add("prev", "hide");

  const hideLi = document.createElement('li');
  addCard(hideLi);

  $(".list").appendChild(hideLi);
  hideLi.classList.add("hide");

  addIndex = 0;
  const actLi = document.createElement('li');
  addCard(actLi);

  $(".list").appendChild(actLi);
  actLi.classList.add("act");

  addIndex = 1;
  const nextLi = document.createElement('li');
  addCard(nextLi);

  $(".list").appendChild(nextLi);
  nextLi.classList.add("next");

  addIndex = 2;
  const newNextLi = document.createElement('li');
  addCard(newNextLi, cardIndex);

  $(".list").appendChild(newNextLi);
  newNextLi.classList.add("next", "new-next");
}

function next() {
  if(cardIndex >= deck.length - 1) return;

  cardIndex++;
  addIndex = cardIndex + 2;

  // console.log(cardIndex);
    if ($(".hide")) {
      $(".hide").remove(); 
    }
  
   /* Step */

  if ($(".prev")) {
    $(".prev").classList.add("hide");
    $(".prev").classList.remove("prev");
  }

  $(".act").classList.add("prev");
  $(".act").classList.remove("act");

  $(".next").classList.add("act");
  $(".next").classList.remove("next");

  /* New Next */

  $(".new-next").classList.remove("new-next");
  if(cardIndex == deck.length - 1){
    $(".next").classList.add("hide");
  }

  const addedLi = document.createElement('li');
  addCard(addedLi, cardIndex);

  $(".list").appendChild(addedLi);
  addedLi.classList.add("next","new-next");

}

function prev() {
  if(cardIndex <= 0) return;
  cardIndex--;
  addIndex = cardIndex - 2;
  // console.log(cardIndex);
  
  $(".new-next").remove();
    
  /* Step */

  $(".next").classList.add("new-next");

  $(".act").classList.add("next");
  $(".act").classList.remove("act");

  $(".prev").classList.add("act");
  $(".prev").classList.remove("prev");

  /* New Prev */

  $(".hide").classList.add("prev");
  if(cardIndex > 0){
    $(".hide").classList.remove("hide");
  }
  

  const addedLi = document.createElement('li');
  addCard(addedLi);

  $(".list").insertBefore(addedLi, $(".list").firstChild);
  addedLi.classList.add("hide");
}

function addCard(addTo){

  let n = deck.length;

    addTo.addEventListener("click", function() {
      cardClick(this);
    }, false);

    const card = document.createElement('div');
    card.classList.add("boxed");
    card.classList.add("flash-card");

    const inner = document.createElement('div');
    inner.classList.add("flash-card-inner");

    const front = document.createElement('div');
    front.classList.add("flash-card-front");

    const frontFace = document.createElement('div');
    frontFace.classList.add("card-face");

    const frontH1 = document.createElement('h1');
    frontH1.innerHTML = deck[(addIndex % n + n) % n].eng;

    const back = document.createElement('div');
    back.classList.add("flash-card-back");

    const backFace = document.createElement('div');
    backFace.classList.add("card-face");

    const backH1 = document.createElement('h1');
    backH1.innerHTML = deck[(addIndex % n + n) % n].span;

    addTo.appendChild(card);
    card.appendChild(inner);
    inner.appendChild(front);
    front.appendChild(frontFace);
    frontFace.appendChild(frontH1);
    inner.appendChild(back);
    back.appendChild(backFace);
    backFace.appendChild(backH1);
}

var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})