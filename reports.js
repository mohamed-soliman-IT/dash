document.addEventListener("DOMContentLoaded", function (event) {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);
        const bodypd = document.getElementById(bodyId);
        const headerpd = document.getElementById(headerId);

        if (toggle && nav && bodypd && headerpd) {
            if (window.innerWidth > 768) {
                nav.classList.add('show');
                toggle.classList.add('bx-x');
                bodypd.classList.add('body-pd');
                headerpd.classList.add('body-pd');
            }

            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
                toggle.classList.toggle('bx-x');
                bodypd.classList.toggle('body-pd');
                headerpd.classList.toggle('body-pd');
            });
        }
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    const linkColor = document.querySelectorAll('.nav_link');
    function colorLink() {
        if (linkColor) {
            linkColor.forEach((l) => l.classList.remove('active'));
            this.classList.add('active');
        }
    }
    linkColor.forEach((l) => l.addEventListener('click', colorLink));
});
