// Get all audio players
const players = document.querySelectorAll("audio");

// Play only one song at a time
function playSong(index) {
    players.forEach((player, i) => {
        if (i !== index) {
            player.pause();
            player.currentTime = 0;
        }
    });

    players[index].play();
}

// Search Songs
const searchInput = document.getElementById("search");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const filter = this.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const artist = card.querySelector("p").textContent.toLowerCase();

            if (
                title.includes(filter) ||
                artist.includes(filter)
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// Auto stop other songs
players.forEach((player, index) => {
    player.addEventListener("play", () => {
        players.forEach((other, i) => {
            if (i !== index) {
                other.pause();
                other.currentTime = 0;
            }
        });
    });
});

// Show loading message
window.addEventListener("load", () => {
    console.log("🎵 Black Shadow Hub Loaded Successfully!");
});
