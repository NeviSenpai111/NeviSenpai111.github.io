function toggleBurgerMenu(element) {
    element.classList.toggle('active');
    toggleSidebar();
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';

    // Random picture logic
    const randomNumber = Math.floor(Math.random() * 100000) + 1;
    const randomPicture = document.getElementById('random-picture');

    if (randomNumber === 6969) { // Adjust the probability as needed
        randomPicture.src = 'bilder/KöppelStonedpng.png'; // Set the path to your picture
        randomPicture.style.display = 'block';
    } else {
        randomPicture.style.display = 'none';
    }
}