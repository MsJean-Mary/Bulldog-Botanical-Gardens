document.addEventListener('DOMContentLoaded', () => {
    const eventsList = document.querySelector('#about .content-block ul');

    fetch('/api/events')
        .then(response => response.json())
        .then(data => {
            eventsList.innerHTML = ''; // Clear existing content

            data.forEach(event => {
                const li = document.createElement('li');
                li.textContent = `${event.description} - ${event.date}`;
                eventsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching events:', error);
            eventsList.innerHTML = '<li>Error loading events. Please try again later.</li>';
        });
});