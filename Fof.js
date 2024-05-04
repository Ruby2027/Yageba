document.addEventListener("DOMContentLoaded", function() {
    var horizontalRect = document.getElementById("horizontalRect");
    var verticalRect = document.getElementById("verticalRect");

    // Setze die Startpositionen der Rechtecke außerhalb des sichtbaren Bereichs
    horizontalRect.style.transform = "translateY(100vh)";
    verticalRect.style.transform = "translateY(100vh)";

    // Füge eine verzögerte Animation hinzu, um die Rechtecke von unten nach oben zu bewegen
    setTimeout(function() {
        horizontalRect.style.transition = "transform 1s ease";
        verticalRect.style.transition = "transform 1s ease";

        horizontalRect.style.transform = "translateY(0)";
        verticalRect.style.transform = "translateY(0)";
    }, 500); // Verzögere die Animation um 0,5 Sekunden
});
