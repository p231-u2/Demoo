const noButton = document.getElementById("btn-no");
const yesButton = document.getElementById("btn-yes");
const mainContent = document.getElementById("main-content");
const successScreen = document.getElementById("success-screen");
const closeButton = document.getElementById("btn-close");

/* Move NO button */
function moveButton() {

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    noButton.style.position = "fixed";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}

noButton.addEventListener("mouseover", moveButton);
noButton.addEventListener("touchstart", moveButton);

/* YES click */
yesButton.addEventListener("click", () => {
    mainContent.classList.add("hidden");
    successScreen.classList.remove("hidden");
});

/* Close */
closeButton.addEventListener("click", () => {
    location.reload();
});
