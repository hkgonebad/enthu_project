document.addEventListener("DOMContentLoaded", function () {

    // Dropdwons
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function () {
            this.querySelector('.dropdown-menu').classList.remove('hidden');
        });

        dropdown.addEventListener('mouseleave', function () {
            this.querySelector('.dropdown-menu').classList.add('hidden');
        });
    });

    // Offcanvas Menu
    const navToggle = document.querySelector('.navToggle');
    const offCanvas = document.querySelector('.offCanvas');
    const offCanvasMenu = document.querySelector('.offCanvasMenu');

    navToggle.addEventListener('click', function () {
        offCanvas.classList.toggle('translate-x-full');
    });

    offCanvas.addEventListener('click', function (event) {
        if (!offCanvasMenu.contains(event.target)) {
            offCanvas.classList.add('translate-x-full');
        }
    });
});