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
const modalbgThanks = document.querySelector('.confirmation');



//Formulaire
const form = document.getElementById('reserve');
const validateForm = document.querySelector('#validateForm');


// Récupérer les champs du formulaire
const Firstname = document.getElementById('first');
const Lastname = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const city = document.querySelectorAll(' input[name="location"]');
const cgu = document.getElementById('checkbox1');
const btnSubmit = document.getElementById('btnSubmit');
const regexFirstLastName = /^([A-Za-z|\s]{2,20})?([-]{0,1})?([A-Za-z|\s]{2,20})$/;  
const regexEmail = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
const regexBirthdate = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
const regexQuantity = /^([0-9]{1,2})$/;
const validateMessage = document.getElementById('validateMessage');
const modalClose = document.querySelector('.close');
const btnValid = document.getElementById('btnValid');

 

//Message d'erreur
const message = {
  name: 'Minimum 2 caractères, maximum 20 caractères. Les chiffres et caractères spéciaux différents de - ne sont pas autorisés',
  email: 'Veuillez renseigner une adresse mail valide !',
  birthday: 'Veuillez entrer une date de naissance valide (âge minimum : 18 ans).',
  quantity: 'Veuillez saisir un nombre entre 0 et 99 !',
  city: 'Veuillez sélectionner une ville!',
  conditions: 'Vous devez accepter les conditions d`utilisation',
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

// On ferme la modale de confirmation
function closeModalConfirmation() {
  modalbgThanks.style.display = 'none';
  modalbg.style.display = 'none';
  window.location.reload();
  form.reset();
};
 // VALIDATION DES CHAMPS //

// @return  {Boolean}  true si valide sinon false
//Validation du prenom et message erreur !

function validateFirstName() {
  const parent = document.getElementById('first').parentNode;

  //La méthode trim() supprime l'espace blanc des deux côtés de la chaîne. La méthode trim() ne modifie pas la chaîne d'origine
        if (Firstname.value.trim() == '' || !regexFirstLastName.test(Firstname.value)) {
          Firstname.focus();
              parent.setAttribute('data-error', message.name);

              parent.setAttribute('data-error-visible', 'true');
              return false;
            }
              parent.setAttribute('data-error-visible', 'false');
              return true;
};

//Validation du nom et message erreur !


function validateLastName() {
  const parent = document.getElementById('last').parentNode;
        if (Lastname.value.trim() == '' || !regexFirstLastName.test(Lastname.value)) {
          Lastname.focus();
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
// Validation de la date de naissance (doit être âgé de plus de 18 ans)
function validateBirthdate() {
  const parent = document.getElementById('birthdate').parentNode;
  const currentDate = new Date();
  const selectedDate = new Date(birthdate.value);

  // Calculate age difference in years
  const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();

  if (
    isNaN(selectedDate) ||
    selectedDate > currentDate ||
    ageDifference < 18 ||
    ageDifference > 101
  ) {
    parent.setAttribute('data-error', message.birthday);
    parent.setAttribute('data-error-visible', 'true');
    return false;
  }

  parent.setAttribute('data-error-visible', 'false');
  return true;
}


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
  const parent = document.getElementById('cityError');

  // Iterate through the radio buttons and check if at least one is selected
  const selectedCity = Array.from(city).some((radio) => radio.checked);

  if (!selectedCity) {
    parent.setAttribute('data-error', message.city);
    parent.setAttribute('data-error-visible', 'true');
    return false;
  }

  parent.setAttribute('data-error-visible', 'false');
  return true;
}


// Validation de  Cgu

function validateCgu() {
    if (!cgu.checked) {
      cgu.parentElement.setAttribute('data-error', message.conditions);
      cgu.parentElement.setAttribute('data-error-visible', 'true');
      return false;
    }
    cgu.parentElement.setAttribute('data-error-visible', 'false');
    return true;
  };

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
  validateBirthdate();
});

quantity.addEventListener('change', function () {
  validateQuantity(this);
});
cgu.addEventListener('change', function () {
  validateCgu(this);
});


// Si  le champ sont valide on envoie la message de validation
function envoieValider(){
  modalbg.style.display = "none";
};

// Validation du formulaire //

function validate() {
  if (
      validateFirstName() && 
      validateLastName() &&
      validateEmail()&&
      validateBirthdate() &&
      validateQuantity() &&
      validateCity() &&
      validateCgu()
      ) {
      openModalThanking();
      } 
      else {
      alert('Merci de remplir correctement votre inscription.')
      }; 
};

// Envoyer la demande
form.addEventListener('submit', function (event) {
  event.preventDefault();
  validate()
});

/// Modal de remerciement
function openModalThanking() {
  form.style.display = 'none'
  document.querySelector(".confirmation").classList.remove("aria-hidden");
  document.querySelector(".confirmation").classList.add("aria-succes");
  
}
 
// ACTIVE LINKS, TOGGLE NAVBAR
const activeLinks = document.querySelectorAll('.nav__link');
activeLinks.forEach(activeLink => {
      activeLink.addEventListener('click', () => {
            document.querySelector('.active')?.classList.remove('active');
            activeLink.classList.add('active');
      });
});



