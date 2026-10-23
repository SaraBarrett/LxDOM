let image = document.getElementById("unicorn");
let myHeading = document.getElementById("mainheading");

let doneTodos = document.querySelectorAll(".done");
let checkbox = document.querySelector("input[name='scales']");

console.log(doneTodos);
console.log(checkbox);

function changeTaste() {
  let mySpan = document.querySelector("span");

  mySpan.innerText = "yack";
}

function eggOrChicken() {
  //selecionar
  let cimage = document.querySelector("img");

  //manipular
  if (cimage.getAttribute("src") =="https://devsprouthosting.com/images/chicken.jpg") {
    cimage.setAttribute("src", "https://devsprouthosting.com/images/egg.jpg");
  } else {
    cimage.setAttribute(
      "src",
      "https://devsprouthosting.com/images/chicken.jpg",
    );
  }
}


function changeStyle(){
  let myContainer = document.getElementById('container');
  let magicalImagem = document.querySelector('img');

  myContainer.style.textAlign='center';
  magicalImagem.style.width='150px';
  magicalImagem.style.borderRadius='50%';

}
