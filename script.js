const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const celebration = document.getElementById("celebration");
const bgMusic = document.getElementById("bgMusic");

// YES BUTTON
yesBtn.addEventListener("click", () => {
    celebration.classList.remove("hidden");

    // Start music with fade-in
    bgMusic.volume = 0;
    bgMusic.play();

    let fade = setInterval(() => {
        if (bgMusic.volume < 0.9) {
            bgMusic.volume += 0.05;
        } else {
            clearInterval(fade);
        }
    }, 200);
});

// NO BUTTON (runs away)
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});