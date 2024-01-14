function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// Récupérer les champs du formulaire
const Firstname = document.getElementById('first');
const Lastname = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const city = document.querySelectorAll('[name="location"]');
const cgu = document.getElementById('checkbox1');
const btnSubmit = document.getElementById('submit');
const regexFirstLastName = /^([A-Za-z|\s]{2,20})?([-]{0,1})?([A-Za-z|\s]{2,20})$/;  
const regexEmail = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
const regexQuantity = /^([0-9]{1,2})$/;
const parent = document.getElementById('first').parentNode;
const modalClose = document.querySelector('.close');

//Message d'erreur
const message = {
  name: 'Minimum 2 caractères, maximum 20 caractères. Les chiffres et caractères spéciaux différents de - ne sont pas autorisés'
  };
// launch modal form// le formulaire s'ouvre comme une fenêtre modale

function launchModal() {
  modalbg.style.display = 'block';
};

// launch modal event // lancer un événement modal
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
//The addEventListener() method attaches an event handler to an element.
//La méthode de tableau forEach() parcourt n'importe quel tableau, exécutant une fonction donnée une fois pour chaque élément du tableau dans l'ordre d'index croissant. 
//Cette fonction est appelée fonction de rappel.


// Close modal form // fermer la fenêtre modale et le formulaire
function closeModal() {
  modalbg.style.display = 'none';
}

//Fermer le Modal
modalClose.addEventListener('click', closeModal);


// Listener sur les champs
Firstname.addEventListener('change', function () {
  validateFirstname(this);
});

// On vérifie si  le champ est valide sinon on affiche un message d'erreur.
function verifChamps() {
  validateFirstname()}

// Si  le champ sont valide on envoie la message de validation
function envoieValider(){
  modalbg.style.display = "none";
};


// VALIDATION DES CHAMPS //

//Validation du prénom et message erreur si il ya des erreurs!!
// @return  {Boolean}  true si valide sinon false



function validateFirstname() {
  //La méthode trim() supprime l'espace blanc des deux côtés de la chaîne. La méthode trim() ne modifie pas la chaîne d'origine
        if (Firstname.value.trim() == '' || !regexFirstLastName.test(Firstname.value)) {

              parent.setAttribute('data-error', message.name);

              parent.setAttribute('data-error-visible', 'true');
              return false;
            }
              parent.setAttribute('data-error-visible', 'false');
              return true;
};

