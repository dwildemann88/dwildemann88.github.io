const container = document.querySelector('.technologies');

class Tecno {
    constructor(link, name) {
        this.link = link;
        this.name = name;
    }
}

function addTechnologi(link, name) {
    const tecnologia = new Tecno(link, name);

    const cardTec = document.createElement('div');
    cardTec.classList.add('card-tec');
    
    // Imagem da tecnologia
    const imageTec = document.createElement('img');
    imageTec.classList.add('tech-image');
    imageTec.src = tecnologia.link;
    cardTec.appendChild(imageTec);

    // Tooltip da tecnologia
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = tecnologia.name;
    cardTec.appendChild(tooltip);

    container.appendChild(cardTec);

    // Adiciona eventos para mostrar o tooltip
    cardTec.addEventListener('mouseover', () => {
        showTooltip(cardTec);
    });

    cardTec.addEventListener('mouseout', () => {
        hideTooltip(cardTec);
    });

    cardTec.addEventListener('click', () => {
        toggleTooltip(cardTec);
    });
}

function showTooltip(card) {
    const tooltip = card.querySelector('.tooltip');
    tooltip.style.display = 'flex';
}

function hideTooltip(card) {
    const tooltip = card.querySelector('.tooltip');
    tooltip.style.display = 'none';
}

function toggleTooltip(card) {
    const tooltip = card.querySelector('.tooltip');
    tooltip.classList.toggle('active');
}

// Adiciona tecnologias
addTechnologi('img/html.png', 'HTML');
addTechnologi('img/css.png', 'CSS');
addTechnologi('img/javascript.png', 'JavaScript');
addTechnologi('img/java.png', 'Java');
addTechnologi('img/php.png', 'PHP');
addTechnologi('img/mysql.png', 'MySQL');
addTechnologi('img/jquery.png', 'jQuery');
addTechnologi('img/react.png', 'React');
