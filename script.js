/* =========================================
   MENÚ MÓVIL
========================================= */

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton.addEventListener("click", function () {

    mainNav.classList.toggle("open");

});


/* =========================================
   ACCESIBILIDAD: TAMAÑO DEL TEXTO
========================================= */

const increaseText = document.getElementById("increaseText");
const decreaseText = document.getElementById("decreaseText");

increaseText.addEventListener("click", function () {

    document.body.classList.add("large-text");

});


decreaseText.addEventListener("click", function () {

    document.body.classList.remove("large-text");

});


/* =========================================
   ACCESIBILIDAD: ALTO CONTRASTE
========================================= */

const highContrast = document.getElementById("highContrast");

highContrast.addEventListener("click", function () {

    document.body.classList.toggle("high-contrast");

});


/* =========================================
   SELECTOR DE IDIOMA
========================================= */

const languageSelect = document.getElementById("languageSelect");

languageSelect.addEventListener("change", function () {

    if (languageSelect.value === "en") {

        alert(
            "The English version of the platform will be available soon."
        );

    }

});


/* =========================================
   FILTRO DE ACTIVIDADES
========================================= */

const filters = document.querySelectorAll(".filter");
const activities = document.querySelectorAll(".activity-card");


filters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        const category = filter.dataset.category;


        filters.forEach(function (button) {

            button.classList.remove("active");

        });


        filter.classList.add("active");


        activities.forEach(function (activity) {

            if (
                category === "all" ||
                activity.dataset.category === category
            ) {

                activity.style.display = "grid";

            } else {

                activity.style.display = "none";

            }

        });

    });

});


/* =========================================
   MOSTRAR UBICACIONES
========================================= */

const showLocations =
    document.getElementById("showLocations");

const locationList =
    document.getElementById("locationList");


showLocations.addEventListener("click", function () {

    locationList.classList.toggle("visible");


    if (locationList.classList.contains("visible")) {

        showLocations.textContent = "Ocultar ubicaciones";

    } else {

        showLocations.textContent = "Mostrar ubicaciones";

    }

});


/* =========================================
   FORMULARIO DE CONTACTO
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    formMessage.textContent =
        "Gracias. Hemos recibido tu solicitud de información.";


    formMessage.style.color = "#17221b";


    contactForm.reset();

});