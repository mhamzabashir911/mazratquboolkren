function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const button = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - button.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - button.offsetHeight - 50);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
