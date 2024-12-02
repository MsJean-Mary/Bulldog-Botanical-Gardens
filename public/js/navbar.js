fetch('/api/navbar')
            .then(response => response.json())
            .then(data => {
                const navbar = document.querySelector('nav ul');
                navbar.innerHTML = '';
                data.navbar.forEach(item => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = item.link;
                    a.textContent = item.name;
                    li.appendChild(a);
                    navbar.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching navbar data:', error));