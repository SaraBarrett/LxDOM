let image = document.getElementById("unicorn");
let myHeading = document.getElementById("mainheading");

let doneTodos = document.querySelectorAll(".done");
let checkbox = document.querySelector("input[name='scales']");



function changeTaste() {
  let mySpan = document.querySelector("span");

  mySpan.innerText = "yack";
}

function eggOrChicken() {
  //selecionar
  let cimage = document.querySelector("img");

  //manipular
  if (
    cimage.getAttribute("src") ==
    "https://devsprouthosting.com/images/chicken.jpg"
  ) {
    cimage.setAttribute("src", "https://devsprouthosting.com/images/egg.jpg");
  } else {
    cimage.setAttribute(
      "src",
      "https://devsprouthosting.com/images/chicken.jpg",
    );
  }
}

function changeStyle() {
  //seleccionar os elementos
  let myContainer = document.getElementById("container");
  let magicalImagem = document.querySelector("#container img");

  //manipular os elementos
  myContainer.style.textAlign = "center";
  magicalImagem.style.width = "150px";
  magicalImagem.style.borderRadius = "50%";
}

function makeRandom() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  const spans = document.querySelectorAll("span");

  // for(let i = 0; i< spans.length; i++){

  //   spans[i].style.color = colors[i];
  // }

  colors.forEach((element, index) => {
    spans[index].style.color = element;
  });
}

function changeOrder() {
  let lis = document.querySelectorAll("li");

  for (let element of lis) {
    if (element.classList.contains("highlight")) {
      element.classList.remove("highlight");
    } else {
      element.classList.add("highlight");
    }
  }
}

function createBtns() {
  let myContainer = document.querySelector("#container");

  for (let i = 1; i < 101; i++) {
    let myBtn = document.createElement("button");
    myBtn.innerText = "Botão " + i;

    myContainer.appendChild(myBtn);
  }
}
