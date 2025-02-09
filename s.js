document.getElementById("blastButton").addEventListener("click", function() {
    setInterval(spawnMessage, 200);
});

function spawnMessage() {
    let message = document.createElement("div");
    message.classList.add("message");
    message.innerText = "I love you ❤";  
    document.body.appendChild(message);

    // Random position
    message.style.left = Math.random() * window.innerWidth + "px";

    // Remove after animation
    setTimeout(() => {
        message.remove();
    }, 3000);
}