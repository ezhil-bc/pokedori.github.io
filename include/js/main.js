// Remplir le menu avec les types de pokémon
let ul = document.querySelector('#liste-types')
for (let type of types) {
    let li = document.createElement("li")
    li.innerHTML = `<a href="type.html?id=${type['nom']}"><img src=img/${type["img"]}></img></a>`
    ul.appendChild(li)
}






// Remplir la liste de pokemon avec le nom, le lien vers sa page et une image
div = document.querySelector('#liste-pokemon')
function ajout_pokemon(start){
    let compteur = start+1    // start = le dernier pokemon affiche, compteur pour savoir où on en est
    start = start + 22      // un nouveau start (+donc où s'arrêtter car ce sera le départ du prochain)
    for (let pokemon of data) {
        let num = pokemon["numéro"]     
        num = Number(num)               // pouvoir comparer le numéro du pokemon avec où on en est
        if (num>=compteur){             // si c'est le cas, alors on est au début ou au dessus de ce qu'on doit afficher
            if(compteur<=start){        // si c'est le cas, on est en dessous du max qu'on doit afficher
		        let p = document.createElement("p")
		        p.innerHTML = `<a href="pokemon.html?id=${pokemon['nom']}"><img src="img/${pokemon['png']}" height="200px"></a> <a href="pokemon.html?id=${pokemon['nom']}"> ${pokemon['numéro']} - ${pokemon['nom']} </a> ` //changement du "nom" des liens et images
		        div.appendChild(p)
		        compteur+=1             // un pokemon en plus d'affiché
            }else{
                return start            // si au dessus du max qu'on doit afficher, on s'arrêtte 
            }
        } 
    }
    return start
}
let btn_plus = document.querySelector("button#plus")
let start = 0
start=ajout_pokemon(start)
btn_plus.addEventListener('click',nouveau_page)
function nouveau_page(){
    start=ajout_pokemon(start) 
    if (start>=151){
        btn_plus.remove()
        return
    } 
}


// Écouteur d'événement pour le champ de recherche -> Même que type.js 
let searchInput = document.querySelector('input[type="text"]')
searchInput.addEventListener('input', filtrerPokemons)
//On stocke l'élément de recherche dans une variable pour le réutiliser.

function filtrerPokemons() {
    let searchTerm = searchInput.value.toLowerCase()
    let pokemonPage = document.querySelectorAll('#liste-pokemon p')
    while(start<151){
        nouveau_page()
    }

    // Parcourir chaque Pokémon affiché
    for (let i = 0; i < pokemonPage.length; i++) {
        let pokemonElement = pokemonPage[i]
        let pokemonName = pokemonElement.textContent.toLowerCase()

        // Vérifier si le nom du Pokémon contient le terme de recherche
        if (pokemonName.includes(searchTerm)) {
            pokemonElement.style.display = 'block' // Afficher
        } else {
            pokemonElement.style.display = 'none'  // Masquer
        }
    }
}


//verification formulaire (code vu en cours)
let form = document.querySelector("form")
form.addEventListener("submit", valider)
function valider(event) {
    let mail = document.querySelector("#mail")			//enrgistre données form dans variable dans l'optic
    let com = document.querySelector("#commentaire")	// de l'envoyer à un serveur 
    let message = document.querySelector("#message")
    if (mail.value === "") {
        message.textContent = "Fournissez votre adresse mail svp !"
    }else{
        message.textContent = "Merci de votre aide ! :)"
        let bouton = document.querySelector("#validerform")
        bouton.remove()
    }
    event.preventDefault() // annuler la soumission et le rafraichissment de page
}




