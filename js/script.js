/******* Bouton pour scroll au début de la page *******/
// Lorsque l'utilisateur click, le scroll est à zéro et donc en haut de page.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // Faire apparaitre le bouton scroll to top
    document.getElementById("topButton").style.display = "block";
  } else {
    // Faire disparaitre le bouton scroll to top
    document.getElementById("topButton").style.display = "none";
  }
}

/******** Conversion de la barre de navigation ********/
function topnavFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/******** Conversion de la barre de menu ********/
function menuFunction() {
  var x = document.getElementById("menuDeroulant");
  if (x.className === "aqurelleMenu") {
    x.className += " responsive";
  } else {
    x.className = "aqurelleMenu";
  }
}
/******** Affichage du contenue aquarelle lorsque l'utilisateur choisi la catégorie ********/
function openLinks(evt, categoriesName) {
  var i, aqurelleLinks, aqurelleContenue;
  aqurelleContenue = document.getElementsByClassName("aqurelleContenue");
  for (i = 0; i < aqurelleContenue.length; i++) {
    aqurelleContenue[i].style.display = "none";
  }
  aqurelleLinks = document.getElementsByClassName("aqurelleLinks");
  for (i = 0; i < aqurelleLinks.length; i++) {
    aqurelleLinks[i].className = aqurelleLinks[i].className.replace(" active", "");
  }
  document.getElementById(categoriesName).style.display = "block";
  evt.currentTarget.className += " active";
}

/******** Scroll en appuyant sur les boutons ********/
/* Déclarer les variable */
var next = document.getElementById('slideNext');
var back = document.getElementById('slideBack');
var container = document.getElementById('scrollElement');
var next2 = document.getElementById('slideNext2');
var back2 = document.getElementById('slideBack2');
var container2 = document.getElementById('scrollElement2');
var timer;
/*Créer les évenements souris simple click */
next.onclick = function () {sideScroll(container,'right',25,400,10)};
back.onclick = function () {sideScroll(container,'left',25,400,10)};
/*Créer les évenements souris double click */
next.ondblclick = function () {endScroll(container, 'right')};
back.ondblclick = function () {endScroll(container, 'left')};
/*La fonction simple click pour simple scroll smoth*/
function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
/* La fonction double click pour scroll à la fin */
function endScroll(element,direction){
  if(direction == 'left'){
      element.scrollLeft = 0;
  } else {
      element.scrollLeft = 1000000;
  }
}

/******** Ouvrir les images en grand ********/
function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.querySelector("body").style.overflow = 'hidden';/*Empêcher scroll quand modal ouvert*/
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.querySelector("body").style.overflow = 'visible';
}
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

/******** Affichage du contenue encre lorsque l'utilisateur choisi la catégorie ********/
function openFormat(evt, categoriesName) {
  var i, encreGalerie;
  encreGalerie = document.getElementsByClassName("encreGalerie");
  for (i = 0; i < encreGalerie.length; i++) {
    encreGalerie[i].style.display = "none";
  }
  document.getElementById(categoriesName).style.display = "block";
}

/******** Copier dans press papier ********/
var btncopy = document.querySelector('.js-copy');
if(btncopy) {
    btncopy.addEventListener('click', docopy);
}

function docopy() {

    // Cible de l'élément qui doit être copié
    var target = this.dataset.target;
    var fromElement = document.querySelector(target);
    if(!fromElement) return;

    // Sélection des caractères concernés
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNode(fromElement);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        // Exécution de la commande de copie
        var result = document.execCommand('copy');
        if (result) {
            // La copie a réussi
            alert('Adresse email copiée.');
        }
    }
    catch(err) {
        // Une erreur est surevnue lors de la tentative de copie
        alert(err);
    }

    // Fin de l'opération
    selection = window.getSelection();
    if (typeof selection.removeRange === 'function') {
        selection.removeRange(range);
    } else if (typeof selection.removeAllRanges === 'function') {
        selection.removeAllRanges();
    }
}
