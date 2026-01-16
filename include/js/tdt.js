// Remplir le menu avec les types de pokémon
let ul = document.querySelector('#liste-types')
for (let type of types) {
	let li = document.createElement("li")
	li.innerHTML = `<a href="type.html?id=${type['nom']}"><img src=img/${type["img"]}></img></a>`
	ul.appendChild(li)
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
