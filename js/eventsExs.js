let randomBtn = document.getElementById("random");
let generateColor = document.getElementById("generated-color");
let myH1 = document.querySelector("h1");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateRandom() {
  let r = getRandomInt(256);
  let g = getRandomInt(256);
  let b = getRandomInt(256);

  let randomColor = "rgb(" + r + "," + g + "," + b + ")";
  this.style.backgroundColor = randomColor;
  generateColor.innerText = randomColor;
}

randomBtn.addEventListener("click", generateRandom);
myH1.addEventListener("click", generateRandom);

randomBtn.addEventListener("click", function (event) {


  console.log(event);
  alert("vamos aprofundar os eventos!!");
});


// eventos de teclado
document.addEventListener('keydown', function(event){

    if(event.key == 'Enter'){
    console.log('cliquei numa tecla '+event.key);
    }else{
    console.log('tecla errada, escolhe outra '+event.key);
    }

})    
