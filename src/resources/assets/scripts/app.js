(function(){
    // Navbar Toggle
    const toggle = document.getElementById('toggle');
    const navbar = document.getElementById('navbar');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('toggle--change');
        navbar.classList.toggle('navbar--toggle');
    });

    // Navbar Dropdown Toggle
    const dropdowns = document.getElementsByClassName('navbar__dropdown');

    for(let dropdown of dropdowns) {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.previousElementSibling.classList.toggle('navbar__link--hover');
        });

        dropdown.addEventListener('mouseleave', () => {
           dropdown.previousElementSibling.classList.remove('navbar__link--hover');
        });
    }

    $( '#accordion' ).accordion({
        heightStyle: 'content'
    });

    $( '#spinner' ).spinner({
        min: 1,
        max: 100
    });
}());
