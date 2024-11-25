// Rasti mygtuką ir kūno elementą
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Perjungti temą
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme'); // Pridėti arba pašalinti tamsaus režimo klasę

    // Keisti mygtuko tekstą
    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Šviesus režimas';
    } else {
        themeToggleButton.textContent = 'Tamsus režimas';
    }
});

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', event => {
        // Prevent this line if links don't work:
        // event.preventDefault();
    });
});


// Scroll-to-Top Button Logic
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.classList.add('show');
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
