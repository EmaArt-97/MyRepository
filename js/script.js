/******* Bouton pour scroll au début de la page *******/
// Lorsque l'utilisateur click, le scroll est à zéro et donc en haut de page.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*******Evenement agrandir le menu au passage de la souris*******/
if (document.getElementsByClassName("menu")){/*execute ce script seulement si la class est présent dans le fichier html*/
  var menu = document.getElementsByClassName("menu");
  var i;
  for(i = 0; i < menu.length; i++){ /*boucle for sur tout les menu présents dans le document*/
    menu[i].addEventListener("mouseover", function(event){/*souris dessus*/
      event.target.style.fontSize = "30px";
    });
    menu[i].addEventListener("mouseout", function(event){/*retour à l'état initial*/
      event.target.style.fontSize = "25px";
    });
  }
}

/******** scroll avec menu fixe ********/
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("fixed").style.padding = "5px 5px";
    document.getElementById("biglogo").style.fontSize = "50px";
    var menu = document.getElementsByClassName("menu");
    for(i = 0; i < menu.length; i++){ /*boucle for sur tout les menu présents dans le document*/
      menu[i].style.fontSize = "20px"; }
    // Faire apparaitre le bouton scroll to top
    document.getElementById("topButton").style.display = "block";

  } else {
    document.getElementById("fixed").style.padding = "10px 10px";
    document.getElementById("biglogo").style.fontSize = "70px";
    var menu = document.getElementsByClassName("menu");
    for(i = 0; i < menu.length; i++){
      menu[i].style.fontSize = "25px"; }
      // Faire disparaitre le bouton scroll to top
      document.getElementById("topButton").style.display = "none";
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

/******** Comparer deux images ********/
function initComparisons() {
  contenu = document.getElementsByClassName("deuxImageComparaison");
    var x, i;
    x = document.getElementsByClassName("supperposition");
    for (i = 0; i < x.length; i++) {
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, img, clicked = 0, w, h;
      w = img.offsetWidth;
      h = img.offsetHeight;
      /*set the width of the img element to 50%:*/
      img.style.width = (w / 2) + "px";
      /*create slider:*/
      slider = document.createElement("DIV");
      slider.setAttribute("class", "imgSlider");
      /*insert slider*/
      img.parentElement.insertBefore(slider, img);
      /*position the slider in the middle:*/
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      /*execute a function when the mouse button is pressed:*/
      slider.addEventListener("mousedown", slideReady);
      /*and another function when the mouse button is released:*/
      window.addEventListener("mouseup", slideFinish);
      /*or touched (for touch screens:*/
      slider.addEventListener("touchstart", slideReady);
      /*and released (for touch screens:*/
      window.addEventListener("touchend", slideFinish);
      function slideReady(e) {
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*the slider is now clicked and ready to move:*/
        clicked = 1;
        /*execute a function when the slider is moved:*/
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        /*the slider is no longer clicked:*/
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        /*if the slider is no longer clicked, exit this function:*/
        if (clicked == 0) return false;
        /*get the cursor's x position:*/
        pos = getCursorPos(e)
        /*prevent the slider from being positioned outside the image:*/
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /*execute a function that will resize the overlay image according to the cursor:*/
        slide(pos);
      }
      function getCursorPos(e) {
        var a, x = 0;
        e = e || window.event;
        /*get the x positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
        x = e.pageX - a.left;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /*resize the image:*/
        img.style.width = x + "px";
        /*position the slider:*/
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
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
