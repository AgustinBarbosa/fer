

const yesBtn = document.getElementById("yes");

const noBtn = document.getElementById("no");

const yayText = document.getElementById("yay");

const yayText1 = document.getElementById("yay1");

const can1 = document.getElementById("can1");

const can = document.getElementById("can");

const NouText1 = document.getElementById("Nou1");
const NouText = document.getElementById("Nou");

// Lista de textos
const noButtonTexts = [
    "Pq?",
    "Pero si te gusto o na?",
    "De verdad?",
    "Como de q no?",
    "Kmara de compas",
    "Pero de esos que se besan",
    "Y son mas que compas",
    "Es mas, te pago",
    "Si llegaste hasta aqui me debes",
    "Unos takis",
    "Me gusta conocerte",
    "Y saber que es lo que",
    "Te hace sentir amada",
    "Que bonito conocerte", 
    "Osea ya te conocia",
    "Pero es diferente",
    "Supongo que inconsientemente",
    "Te buscaba",
    "Ademas, soy un gran partido"
  ];
  
  // Índice para rastrear qué texto se debe mostrar
  let noButtonTextIndex = 0;
  
  // Función para actualizar el texto del botón "No"
  function updateNoButtonText() {
    noBtn.textContent = noButtonTexts[noButtonTextIndex];
    // Incrementar el índice, asegurándose de que no supere la longitud de la lista
    noButtonTextIndex = (noButtonTextIndex + 1) % noButtonTexts.length;
  }
  
  // Event listener para el botón "No"
  noBtn.addEventListener("click", () => {
    // Actualizar el texto del botón "No"
    updateNoButtonText();
    yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;
    yesBtn.style.height = `${yesBtn.offsetHeight + 40}px`;

    can.style.display = "none";
    can1.style.display = "none";
    yayText.style.display = "none";
    yayText1.style.display = "none";

    NouText.style.display = "block";
    NouText1.style.display = "block";

});

let isReset = false;

yesBtn.addEventListener("click", () => {
  if (isReset) {
    // Restaurar elementos a su estado original
    yayText.style.display = "none";
    yayText1.style.display = "none";
    can.style.display = "block";
    can1.style.display = "block";
   


    // Reiniciar el estado de la variable isReset
    isReset = false;
  } else {
    // Mostrar texto y ocultar imágenes
    yayText.style.display = "block";
    yayText1.style.display = "block";
    can.style.display = "none";
    can1.style.display = "none";
    NouText.style.display = "none";
    NouText1.style.display = "none";
 

    // Establecer el estado de la variable isReset a true
    isReset = true;
  }
});