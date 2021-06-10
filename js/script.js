"use strict"

window.addEventListener("load", Initialize);

var data;
var container;

function Initialize() {

    container = document.querySelector("#animals");

    //via fetch (online)
    // fetch("https://your-repo-link-here/docs/animals.json")
    // .then(function(response) { return response.json();  })
    // .then(function(arr) { 
    //     data = arr; 
    //     createCards(data);
    // })
    // .catch(err => console.log(err));

    //via een lokale variabele als json
    let animals = JSON.parse(animalinfo);
    createCards(animals);
}

function createCards(arr){

    arr.forEach(element => {
        let article = document.createElement("article");
        article.className = "card";
    
        let owner = document.createElement("h2");
        owner.innerHTML = element.owner;

        let animal = document.createElement("p");
        animal.innerHTML = element.animal.english;
        
        let animalLatin = document.createElement("i");
        animalLatin.innerHTML = element.animal.latin;
    
        animalLatin.lang = "la";
        
        article.appendChild(owner);
        article.appendChild(animal);
        article.appendChild(animalLatin);

        article.addEventListener("mousedown", selectCard);

        container.appendChild(article);
    });

}

function selectCard(e){

    if (e.button === 0){
        if(this.className != "card selected") this.className = "card selected";
        else this.className = "card";
    
        console.log(`${e.target.value} was clicked`);
    }
}
