
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



$(document).ready(function() {
    $('.fa-trash').on('click', function() {
        // Confirm deletion
        if (confirm("Are you sure you want to delete this row?")) {
            // If confirmed, remove the closest table row
            $(this).closest('tr').remove();
        }
    });
});








//                              for edit employee in table


document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to the pencil icon
    document.querySelectorAll('.icon.fa-pencil-alt').forEach(function (pencilIcon) {
        pencilIcon.addEventListener('click', function () {
            // Get the parent <tr> element
            var row = this.closest('tr');

            // Toggle edit mode for each <td> except the first one (index 0)
            for (var i = 1; i < row.cells.length - 1; i++) {
                var cell = row.cells[i];
                cell.classList.toggle('edit-mode');
                toggleContent(cell);
            }
        });
    });

    function toggleContent(cell) {
        // Toggle between text and input field
        if (cell.classList.contains('edit-mode')) {
            var textContent = cell.textContent;
            var input = document.createElement('input');
            input.type = 'text';
            input.value = textContent.trim();
            cell.textContent = '';
            cell.appendChild(input);
            input.focus();
        } else {
            var input = cell.querySelector('input');
            cell.textContent = input.value;
        }
    }
});