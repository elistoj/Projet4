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
  email: 'Veuillez renseigner une adresse mail valide !',
  birthday: 'Veuillez entrer une date de naissance valide !',
  quantity: 'Veuillez saisir un nombre entre 0 et 99 !',
  city: 'Veuillez sélectionner une ville!',
  conditions: `Vous devez accepter les conditions d'utilisation`
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





// VALIDATION DES CHAMPS //

//Validation du prénom et message erreur !!
// @return  {Boolean}  true si valide sinon false

// Close modal form // fermer la fenêtre modale et le formulaire
function closeModal() {
  modalbg.style.display = 'none';
  window.location.reload();
  form.reset();
}

//Fermer le Modal
modalClose.addEventListener('click', closeModal);
 

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

        if (!birthdate.value) {

              parent.setAttribute(
                    'data-error', message.birthday );

                    parent.setAttribute('data-error-visible', 'true');
              return false;
        }
        parent.setAttribute('data-error-visible', 'false');
        return true;
};
// Validation du numéro de participation!!!

function validateQuantity() {

  const parent = document.getElementById('quantity').parentNode;

        if (quantity.value  === '' || !regexQuantity.test(quantity.value)) {
          
              parent.setAttribute(
                    'data-error', message.quantity );

                    parent.setAttribute('data-error-visible', 'true');
              return false;
        }
        parent.setAttribute('data-error-visible', 'false');
        return true;
};

//Validation de choix de ville

function validateCity() {

  const parent = document.getElementById('city').parentNode;

        if (document.querySelector('input[name="location"]:checked') == null) {
          document.querySelector('input[name="location"]').parentElement.setAttribute ('data-error', message.city );

                    parent.setAttribute('data-error-visible', 'true');
              return false;
        }
        parent.setAttribute('data-error-visible', 'false');
        return true;
};

// Validation de  Cgu

function validateCgu() {
  if (document.querySelector('input[name="cgu"]:checked') == null) {
        document.querySelector('input[name="cgu"]').parentElement.setAttribute(
              'data-error',
              'Veuillez accepter les conditions générales d\'utilisation !'
        );
        document.querySelector('input[name="cgu"]').parentElement.setAttribute('data-error-visible', 'true');
        return false;
  }
  document.querySelector('input[name="cgu"]').parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

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
quantity.addEventListener('change', function () {
  validateQuantity(this);
});
city.addEventListener('change', function () {
  validateCity(this);
});
cgu.addEventListener('change', function () {
  validateCgu(this);
});

// Verification si  le champ est valide sinon on affiche un message d'erreur.
function verifChamps() {
  validateFirstName() &&
  validateLastName() &&
  validateEmail()&&
  validateBirthdate &&
  validateQuantity &&
  validateCity &&
  validateCgu
};
// Validation du formulaire //

function validate() {
  if (
        validateFirstName() && 
        validateLastName() &&
        validateEmail()&&
        validateBirthdate &&
        validateQuantity &&
        validateCity &&
        validateCgu
        ) {
        verifChamps();
  }
  return true; 
};

// Si  le champ sont valide on envoie la message de validation
function envoieValider(){
  modalbg.style.display = "none";
};

// Envoyer la demande
form.addEventListener('submit', function (event) {
  event.preventDefault();
  validate()
});




