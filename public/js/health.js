document.addEventListener('DOMContentLoaded', () => {
    const healthGrid = document.querySelector('.health-grid');

    fetch('/api/health')
        .then(response => response.json())
        .then(data => {
            const healthBenefits = data.healthBenefits;

            healthBenefits.forEach(benefit => {
                const tile = document.createElement('div');
                tile.className = 'health-tile';

                const image = document.createElement('img');
                image.src = benefit.image || 'img/placeholder.svg?height=150&width=250';
                image.alt = benefit.name;

                const title = document.createElement('h2');
                title.textContent = benefit.name;

                const description = document.createElement('p');
                description.textContent = benefit.description;

                tile.appendChild(image);
                tile.appendChild(title);
                tile.appendChild(description);

                healthGrid.appendChild(tile);
            });
        })
        .catch(error => {
            console.error('Error fetching health benefits:', error);
            healthGrid.innerHTML = '<p>Error loading health benefits. Please try again later.</p>';
        });
});