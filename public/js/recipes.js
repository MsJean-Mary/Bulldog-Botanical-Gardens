document.addEventListener('DOMContentLoaded', () => {
    const recipesContainer = document.getElementById('recipes-container');
    const modal = createModal();
    document.body.appendChild(modal);

    fetch('/api/recipes')
        .then(response => response.json())
        .then(data => {
            const recipes = data.recipes;

            recipes.forEach(recipe => {
                const recipeCard = createRecipeCard(recipe);
                recipesContainer.appendChild(recipeCard);
            });
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
            recipesContainer.innerHTML = '<p>Error loading recipes. Please try again later.</p>';
        });
});

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';

    const image = document.createElement('img');
    image.src = recipe.image || '/placeholder.svg?height=250&width=300';
    image.alt = recipe.title;
    image.className = 'recipe-image';

    const content = document.createElement('div');
    content.className = 'recipe-content';

    const title = document.createElement('h3');
    title.textContent = recipe.title;
    title.className = 'recipe-title';

    const description = document.createElement('p');
    description.textContent = recipe.description;
    description.className = 'recipe-description';

    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'View Recipe';
    link.className = 'recipe-link';
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showRecipeModal(recipe);
    });

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(link);

    card.appendChild(image);
    card.appendChild(content);

    return card;
}

function createModal() {
    const modal = document.createElement('div');
    modal.className = 'recipe-modal';
    modal.innerHTML = `
        <div class="recipe-modal-content">
            <span class="close-modal">&times;</span>
            <h2 class="modal-recipe-title"></h2>
            <img class="modal-recipe-image" src="" alt="">
            <p class="modal-recipe-description"></p>
            <h3>Steps:</h3>
            <ol class="modal-recipe-steps"></ol>
        </div>
    `;
    return modal;
}

function showRecipeModal(recipe) {
    const modal = document.querySelector('.recipe-modal');
    const modalTitle = modal.querySelector('.modal-recipe-title');
    const modalImage = modal.querySelector('.modal-recipe-image');
    const modalDescription = modal.querySelector('.modal-recipe-description');
    const modalSteps = modal.querySelector('.modal-recipe-steps');

    modalTitle.textContent = recipe.title;
    modalImage.src = recipe.image || '/placeholder.svg?height=400&width=600';
    modalImage.alt = recipe.title;
    modalDescription.textContent = recipe.description;

    modalSteps.innerHTML = '';
    recipe.steps.forEach((step, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${step}`;
        modalSteps.appendChild(li);
    });

    modal.style.display = 'block';

    const closeModal = modal.querySelector('.close-modal');
    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}