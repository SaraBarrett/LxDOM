document.getElementById("cat").addEventListener("click", function () {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("cat-fact").innerText = data.fact;
    });
});

document.getElementById("ricky").addEventListener("click", function () {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.results[0].name);

      data.results.forEach((element) => {
        let newP = document.createElement("p");
        newP.textContent = element.name;

        document.body.appendChild(newP);

        console.log(element.name);
      });

      this.remove();
    });
});


document.getElementById('btnPersonagens').addEventListener('click', function () {
    fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let variavel = data.results;

           
            for (let i = 0; i < variavel.length; i++) {
                let newP = document.createElement('p');
                newP.innerText = variavel[i].name;
                divPerson.appendChild(newP);
            }
        })
        this.remove ();
 
})