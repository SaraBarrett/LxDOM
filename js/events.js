let loginDiv = document.querySelector("#login-message");
let loginBtn = document.querySelector("#login");

function login(uname='') {
  let newP = document.createElement("p");
  newP.innerText = "Olá " + uname;
  loginDiv.appendChild(newP);
  disabled = true;
}

function lunchTime() {
  alert("é quase hora de almoço!!");
}


loginBtn.addEventListener("click", () => login(userName));
loginBtn.addEventListener("click", lunchTime);
