document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector(".footer-container");
    footer.style.maxHeight = footer.scrollHeight + "px"; // Zeige den Footer mit seiner vollen Höhe an

    setTimeout(function() {
        footer.style.maxHeight = "200px"; // Animation für den Footer beim Laden der Seite
    }, 500); // Warten Sie 500 Millisekunden, bevor Sie die Animation starten
});
