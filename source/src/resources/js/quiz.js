var cardIndex;
var amnt_attempts = 0;
var amnt_correct = 0;
var amnt_incorrect = 0;

document.addEventListener('keyup', event => {
  if (event.code === 'Enter') {
    checkInput();
  }
})

function quizInit(){
    cardIndex = 0;
    var front = document.getElementById("quizFront");
    var back = document.getElementById("quizBack");

    front.innerHTML = deck[0].eng;
    back.innerHTML = deck[0].span;
}

// TODO: statistics tracking/logging
function checkInput(){
    var inputBox = document.getElementById("inputTranslation");
    var inputVal = inputBox.value;
    amnt_attempts = amnt_attempts + 1;
    console.log("Amount of attempts:");
    console.log(amnt_attempts);

    if(inputVal == deck[cardIndex].span){
        inputBox.style.backgroundColor = '#b2dbb8';
        amnt_correct = amnt_correct + 1;
        console.log("Amount correct:");
        console.log(amnt_correct);
        cardFlip();
        setTimeout(quizNext, 1750, inputBox);
    }
    else{
      inputBox.classList.add('error');
      inputBox.style.backgroundColor = '#ffb5b5';
      amnt_incorrect = amnt_incorrect + 1;
      console.log("Amount incorrect:");
      console.log(amnt_incorrect);
      // remove the class after the animation completes
      setTimeout(function() {
        inputBox.classList.remove('error');
        cardFlip();
        setTimeout(quizNext, 1750, inputBox);
      }, 300);
    }
}

function quizNext(form){
    cardIndex++;
    form.value = "";
    form.style.backgroundColor = '#fff';
    if(cardIndex > deck.length - 1) {
        alert("Quiz complete");
        
        var quiz_data = {amnt_correct, amnt_incorrect, amnt_attempts};
        console.log("Quiz data:");
        console.log(JSON.stringify(quiz_data));

        fetch("/quiz", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(quiz_data)
        })
        .then(res => {
          console.log("Request complete! Response: ", res);
        });
    }
    else{
        document.getElementById("quizFront").innerHTML = deck[cardIndex].eng;
        document.getElementById("quizCard").classList.add("hide");
        
        setTimeout(quizAnimate, 400);
            
        
    }
}

function quizAnimate(){
    document.getElementById("quizCard").classList.add("new-next");
    document.getElementById("quizCard").classList.remove("hide");
    cardFlip();
    setTimeout(function() {
        document.getElementById("quizBack").innerHTML = deck[cardIndex].span;
        document.getElementById("quizCard").classList.remove("new-next");}, 200);
        
}

function cardFlip() {
    const activeCard = document.querySelector('.act')
    const element = activeCard.querySelector('.flash-card .flash-card-inner');
    element.classList.toggle('cardFlip')
  }


  // Accent buttons add to tex input line 
document.getElementById("aButton").addEventListener("click", () =>{
  document.getElementById("inputTranslation").value += "á";
 });
 document.getElementById("eButton").addEventListener("click", () =>{
  document.getElementById("inputTranslation").value += "é";
});
document.getElementById("iButton").addEventListener("click", () =>{
  document.getElementById("inputTranslation").value += "í";
});
document.getElementById("oButton").addEventListener("click", () =>{
  document.getElementById("inputTranslation").value += "ó";
});
document.getElementById("nButton").addEventListener("click", () =>{
  document.getElementById("inputTranslation").value += "ñ";
});
document.getElementById("uAccentButton").addEventListener("click", () =>{
  document.getElementById("inputTranslation").value += "ú";
});
document.getElementById("uDiaersesisButton").addEventListener("click", () =>{
  document.getElementById("inputTranslation").value += "ü";
});

            