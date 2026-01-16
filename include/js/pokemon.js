// Remplir le menu avec les types de pokémon
let ul = document.querySelector('#liste-types')
for (let type of types) {
	let li = document.createElement("li")
	li.innerHTML = `<a href="type.html?id=${type['nom']}"><img src=img/${type["img"]}></img></a>`
	ul.appendChild(li)
}

// Renvoie le pokémon en fontion de l'URL
function get_pokemon(data) {
	let queryString = window.location.search
	let urlParams = new URLSearchParams(queryString)
	let id = urlParams.get('id')
	for (let pokemon of data) {
		if (pokemon['nom'] === id) {
			return pokemon
		}
	}
}

// Renvoie une chaîne de caractères avec chaque type de pokémon
// et un lien vers sa page
function format_types(types_poke) {
	let str = "Types : "
	for (let type of types_poke) {
		for (let element of types){
			if (element["nom"]==type){
				str += `<a href="type.html?id=${type}"><img src="img/${element["img"]}" id=img_type_pok></a> ` // changement noms des liens
			}
		}
	}
	return str
}

// Renvoie une chaîne de caractères avec chaque pokémon
// et un lien vers sa page
function format_evolutions(evolutions) {
	let pokemon = get_pokemon(data)
	str = "Évolutions : "
	for (let evolution of evolutions) {
		if(evolution==pokemon["nom"]){
			str += `<span id=evo_current><a href="pokemon.html?id=${evolution}" id=evo_current_txt><img src="img/${pokemon["gif"]}">${evolution}</a></span> `
		}else{
			for (element of data){
				if (element["nom"]==evolution){
					str += `<span id=evo_other><a href="pokemon.html?id=${evolution}" id=evo_other_txt><img src="img/${element["gif"]}">${evolution}</a></span> ` // changement noms liens
				}
			}
		}
	}
	return str
}


// Remplir les informations sur le pokemon
let pokemon = get_pokemon(data)
document.querySelector("title").textContent += pokemon['nom']
document.querySelector("div#titre img").setAttribute("src", "img/" + pokemon["gif"])
document.querySelector("h1").innerHTML = pokemon['numéro']+" - "+ pokemon['nom'] + document.querySelector("h1").innerHTML
document.querySelector("p#description").textContent = pokemon["description"]
document.querySelector("p#evolutions").innerHTML = format_evolutions(pokemon["evolutions"])
document.querySelector("p#identite").textContent = pokemon['numéro']+" - "+ pokemon['nom']
document.querySelector("div#image img").setAttribute("src", "img/" + pokemon["png"])
document.querySelector("#nom_en").textContent = `Anglais : ${pokemon['nom_en']}`
document.querySelector("#nom_ja").textContent = `Japonais : ${pokemon['nom_ja'][1]} (${pokemon['nom_ja'][0]})`
document.querySelector("#taille").textContent = "Taille : " + pokemon["taille"]
document.querySelector("#poids").textContent = "Poids : " + pokemon["poids"]
document.querySelector("#types").innerHTML = format_types(pokemon["type"])
document.querySelector("div#carte1 img").setAttribute("src", "img/" + pokemon["artwork"][0])
document.querySelector("div#carte2 img").setAttribute("src", "img/" + pokemon["artwork"][1])
document.querySelector("audio").setAttribute("src", "sound/" + pokemon["cri"][0])


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



// Récupère le bouton et le paragraphe Dys
let bouton = document.getElementById("dys");
let texte = document.getElementById("description");
let policeActuelle = "Pokemon RS";
bouton.addEventListener("click", dys)

	function dys(){
    if (policeActuelle === "Pokemon RS") {
        texte.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
        policeActuelle = "Verdana, Geneva, Tahoma, sans-serif";
    } else {
        texte.style.fontFamily = "Pokemon RS";
        policeActuelle = "Pokemon RS";
    }
}