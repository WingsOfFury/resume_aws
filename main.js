document.addEventListener("DOMContentLoaded", function () {
  // Prüfe, ob ein Besucherzähler im localStorage vorhanden ist
  let visitCount = localStorage.getItem("visitCount");

  if (visitCount === null) {
    // Wenn nicht, setze den Zähler auf 1
    visitCount = 1;
  } else {
    // Wenn ja, erhöhe den Zähler um 1
    visitCount = parseInt(visitCount) + 1;
  }

  // Speichere den neuen Zählerwert im localStorage
  localStorage.setItem("visitCount", visitCount);

  // Aktualisiere die Anzeige auf der Webseite
  document.getElementById("count").textContent = visitCount;
});
