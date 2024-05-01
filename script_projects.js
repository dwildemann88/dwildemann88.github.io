// Dados dos projetos
const projects = [
    {
        title: "Sistema de Estoque",
        description: "Sistema de cadastro e consulta de produtos.",
        image: "img/estoque.jpg",
        link: "http://sistemadeestoquedw.great-site.net/?i=1"
    },
    {
        title: "Jogo Mata Mosquito",
        description: "Jogo divertido e desafiador de mata mosquito.",
        image: "img/mata-mosquito.jpg",
        link: "https://mata-mosquito-game-dw.netlify.app/"
    },
    {
        title: "Lista de Tarefas",
        description: "Lista de Tarefas para o Dia a Dia com modo noturno.",
        image: "img/lista.jpg",
        link: "https://listdwview.netlify.app/"
    },
];

// Função para criar os elementos de exposição
function createProjectElements() {
    const container = document.querySelector('.project-container');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        const image = document.createElement('img');
        image.src = project.image;
        image.alt = project.title;

        const title = document.createElement('h2');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.textContent = project.description;

        const link = document.createElement('a');
        link.href = project.link;
        link.textContent = "Ver projeto";

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        container.appendChild(card);
    });
}

// Chamar a função para criar os elementos quando a página carrega
window.onload = createProjectElements;