const myBanner = document.getElementById("banner");
console.log(myBanner.src);

//myBanner.src = 'https://img.magnific.com/vetores-gratis/pato-bonito-em-branco_1308-41058.jpg';

const myP = document.querySelectorAll("p");

function changeLang() {
  //seleccionar
  let myH1 = document.querySelector("h1");

  console.log(myP);
  Array.from(myP).forEach((element) => {
    element.backgroundColor = "red";
  });

  // for (let element of myP) {
  //   element.style.backgroundColor = "green";
  // }

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

function changeMode() {
  if (document.body.classList.contains("day")) {
    document.body.classList.remove("day");
    document.body.classList.add("night");
  } else {
    document.body.classList.remove("night");
    document.body.classList.add("day");
  }
}


