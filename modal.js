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

//Formulaire
const form = document.getElementById('reserve');
const ValidateForm = document.querySelector('validateForm');

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
const regexBirthdate = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
const regexQuantity = /^([0-9]{1,2})$/;
const modalClose = document.querySelector('.close');


//Message d'erreur
const message = {
  name: 'Minimum 2 caractères, maximum 20 caractères. Les chiffres et caractères spéciaux différents de - ne sont pas autorisés',
  email: 'Veuillez renseigner une adresse mail valide.',
  birthday: 'Veuillez entrer une date de naissance valide !'
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
  window.location.reload();
  form.reset();
}

//Fermer le Modal
modalClose.addEventListener('click', closeModal);

// Listener sur les champs
Firstname.addEventListener('change', function () {
  validateFirstName(this);
});
Lastname.addEventListener('change', function () {
  validateLastName(this);
});
email.addEventListener('change', function () {
  validateEmail(this);
});
birthdate.addEventListener('change', function () {
  validateBirthdate(this);
});
// On vérifie si  le champ est valide sinon on affiche un message d'erreur.
function verifChamps() {
  validateFirstName() &&
  validateLastName() &&
  validateEmail()&&
  validateBirthdate
};
/* fonction validation du formulaire */
function validate() {
  if (
        validateFirstName() && 
        validateLastName() &&
        validateEmail()&&
        validateBirthdate
        ) {
        verifChamps();
  }
  return true; 
};
// Envoyer la demande
form.addEventListener('submit', function (event) {
  event.preventDefault();
  validate()
});


// VALIDATION DES CHAMPS //

//Validation du prénom et message erreur !!
// @return  {Boolean}  true si valide sinon false



function validateFirstName() {
  const parent = document.getElementById('first').parentNode;

  //La méthode trim() supprime l'espace blanc des deux côtés de la chaîne. La méthode trim() ne modifie pas la chaîne d'origine
        if (Firstname.value.trim() == '' || !regexFirstLastName.test(Firstname.value)) {

              parent.setAttribute('data-error', message.name);

              parent.setAttribute('data-error-visible', 'true');
              return false;
            }
              parent.setAttribute('data-error-visible', 'false');
              return true;
};
//Validation du nom et message erreur !!


function validateLastName() {
  const parent = document.getElementById('last').parentNode;
        if (Lastname.value.trim() == '' || !regexFirstLastName.test(Lastname.value)) {

              parent.setAttribute('data-error', message.name);

              parent.setAttribute('data-error-visible', 'true');
              return false;
            }
              parent.setAttribute('data-error-visible', 'false');
              return true;
};
// Validation du email et message erreur!!!

function validateEmail() {
  const parent = document.getElementById('email').parentNode;

        if (email.value.trim() == '' || !regexEmail.test(email.value)) {
              email.focus();
              parent.setAttribute(
                    'data-error',message.email);

              parent.setAttribute('data-error-visible', 'true');
              return false;
        }
        parent.setAttribute('data-error-visible', 'false');
        return true;
};

// Validation date de naissance et message erreur!!!
function validateBirthdate() {

  const parent = document.getElementById('birthdate').parentNode;
  
        if (birthdate.value.trim == '' || !regexBirthdate.test(birthdate.value)) {
              parent.setAttribute(
                    'data-error', message.birthday );

                    parent.setAttribute('data-error-visible', 'true');
              return false;
        }
        parent.setAttribute('data-error-visible', 'false');
        return true;
};



// Si  le champ sont valide on envoie la message de validation
function envoieValider(){
  modalbg.style.display = "none";
};
