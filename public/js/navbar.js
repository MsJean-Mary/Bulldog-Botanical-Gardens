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

        if (data.dropdown && data.dropdown.length > 0) {
            const dropdownLi = document.createElement('li');
            dropdownLi.classList.add('dropdown');

            const dropdownToggle = document.createElement('a');
            dropdownToggle.href = '#';
            dropdownToggle.textContent = data.name;
            dropdownLi.appendChild(dropdownToggle);

            const dropdownMenu = document.createElement('ul');
            dropdownMenu.classList.add('dropdown-menu');

            data.dropdown.forEach(item => {
                const dropdownItemLi = document.createElement('li');
                const dropdownItemA = document.createElement('a');
                dropdownItemA.href = item.link;
                dropdownItemA.textContent = item.name;
                dropdownItemLi.appendChild(dropdownItemA);
                dropdownMenu.appendChild(dropdownItemLi);
            });

            dropdownLi.appendChild(dropdownMenu);
            navbar.appendChild(dropdownLi);
        }
    })
    .catch(error => console.error('Error fetching navbar data:', error));