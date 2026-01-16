// Remplir le menu avec les types de pokémon
let ul = document.querySelector('#liste-types')
for (let type of types) {
	let li = document.createElement("li")
	li.innerHTML = `<a href="type.html?id=${type['nom']}"><img src=img/${type["img"]}></img></a>`
	ul.appendChild(li)
}

// Renvoie un tableau avec les pokémon du type id
function get_pokemons(data, id) {
	let pokemons = []
	for (let pokemon of data) {
		for (let type of pokemon["type"]) {
			if (type === id) {
				pokemons.push(pokemon)
	  		}
		}
	}
	return pokemons
}

// Trouver le type de pokémon à montrer en fonction du paramètre dans l'URL
let queryString = window.location.search
let urlParams = new URLSearchParams(queryString)
let id = urlParams.get('id')

//Trouver le type dans le tableau de base de données
function get_type(types) {
	for (let type of types) {
		if (type['nom'] === id) {
			return type
		}
	}
}

// Remplir la page
// Ce code est identique à celui de main.js
document.querySelector("title").textContent += id
document.querySelector("h1").textContent = id
let type = get_type(types)
//remplir la description du type
document.querySelector('#description').textContent = type['desc']
document.querySelector("div#titre img").setAttribute("src", "img/" + type["icone"])
let pokemons = get_pokemons(data, id)
div = document.querySelector('#liste-pokemon')
for (let pokemon of pokemons) {
	let p = document.createElement("p")
	p.innerHTML = `<a href="pokemon.html?id=${pokemon['nom']}"><img src="img/${pokemon['png']}" height="200px"></a> <a href="pokemon.html?id=${pokemon['nom']}"> ${pokemon['numéro']} - ${pokemon['nom']} </a> ` //changement du "nom" des liens et images
	div.appendChild(p)
}

//Formulaire
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

// Récupère le bouton et le paragraphe
let bouton = document.getElementById("toggle")
let texte = document.getElementById("description")
let policeActuelle = "Pokemon RS"
bouton.addEventListener("click", dys)
//Bouton d'accessibilité pour les personnes dyslexiques -> quand le bouton est pressé, la police change
function dys(){
	if (policeActuelle === "Pokemon RS") {
		texte.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
		policeActuelle = "Verdana, Geneva, Tahoma, sans-serif"
	} else {
		texte.style.fontFamily = "Pokemon RS"
		policeActuelle = "Pokemon RS"
	}
}

// Écouteur d'événement pour le champ de recherche
let searchInput = document.querySelector('input[type="text"]')
searchInput.addEventListener('input', filtrerPokemons)
//On stocke l'élément de recherche dans une variable pour le réutiliser.

function filtrerPokemons() {
    let searchTerm = searchInput.value.toLowerCase()
    let pokemonElements = document.querySelectorAll('#liste-pokemon p')

    // Parcourir chaque Pokémon affiché
    for (let i = 0; i < pokemonElements.length; i++) {
        let pokemonElement = pokemonElements[i]
        let pokemonName = pokemonElement.textContent.toLowerCase()

        // Vérifier si le nom du Pokémon contient le terme de recherche
        if (pokemonName.includes(searchTerm)) {
            pokemonElement.style.display = 'block' // Afficher
        } else {
            pokemonElement.style.display = 'none'  // Masquer
        }
    }
}