function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    document.addEventListener("DOMContentLoaded", function() {
        const switchInput = document.getElementById('switch');
        switchInput.checked = false;
        toggleSidebar();
    });
    const switchInput = document.getElementById('switch');


    if (switchInput.checked) {
        sidebar.style.width = window.innerWidth <= 768 ? '100%' : '250px';
    } else {
        sidebar.style.width = '0';
    }
}