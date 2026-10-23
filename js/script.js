const myBanner = document.getElementById("banner");
console.log(myBanner.src);

//myBanner.src = 'https://img.magnific.com/vetores-gratis/pato-bonito-em-branco_1308-41058.jpg';

const myP = document.getElementsByTagName("p");
console.log(myP[0]);

function changeLang() {
  //seleccionar
  let myH1 = document.querySelector("h1");

  if (myH1.innerText == "Galinhas Sedosas") {
    //manipular
    myH1.innerText = "Silkie Chickens";
    myH1.style.backgroundColor = "red";
  } else {
    //manipular
    myH1.innerText = "Galinhas Sedosas";
    myH1.style.backgroundColor = "green";
  }
}

let counter = 10;
let idcount10;


function start() {
  idcount10 = setInterval(function () {
    counter--;
    console.log(counter);

    if(counter<1){
      stop() 
    }

  
  }, 1000);

  console.log(idcount10)
}



function stop() {
  clearInterval(idcount10)
}
