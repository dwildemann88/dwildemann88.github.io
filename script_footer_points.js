const dotContainer = document.getElementById('dotContainer');
function createDot() {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotContainer.appendChild(dot);
}

// Criar múltiplos pontos
for (let i = 0; i < 5; i++) {
    createDot();
}