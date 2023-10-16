const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables 
const leftArrow = document.getElementById("arrowLeft")
const rightArrow = document.getElementById("arrowRight")
let dotContainer = document.querySelector(".dots")
let textPresentation = document.getElementById("textPresentation")

// Création de bullets points selon la longueur du tableau slides
for (let i = 0 ; i < slides.length; i ++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	dotContainer.appendChild(dot);
}

// Selection du premier bullet point
let dotArray = dotContainer.querySelectorAll(".dot")
dotArray[0].classList.toggle("dot_selected")

//Fonction pour le changement de la slide : true vers la droite, false vers la gauche 
// et changement des bullets points
let index = 0
function changeSlide (toRight) {
	dotArray[index].classList.remove("dot_selected")
	if (toRight === true) {
		index++
	} else {
		index--
	}
	if (index === slides.length) {
		index = 0 
	} else if (index === -1) {
		index = slides.length - 1
	}
	document.querySelector(".banner-img").src = "assets/images/slideshow/" + slides[index].image;
	textPresentation.innerHTML = slides[index].tagLine
	console.log(index)
	dotArray[index].classList.add("dot_selected")
} 

// Événements déclenchés selon le clic 
rightArrow.addEventListener("click", () => {
	changeSlide(true)
})

leftArrow.addEventListener("click", () => {
	changeSlide(false)
})
