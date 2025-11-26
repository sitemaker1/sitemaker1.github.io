document.getElementById("bible-button").addEventListener("click", () => {
    
    // Example: John 3:16 — you can change this to anything
    const apiURL = "https://bible-api.com/john+3:16";

    // Show popup
    const popup = document.getElementById("bible-popup");
    const text = document.getElementById("bible-text");

    popup.style.display = "block";
    text.textContent = "Loading...";

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            text.textContent = data.text.trim();
        })
        .catch(err => {
            text.textContent = "Error loading verse.";
        });
});
