document.addEventListener('DOMContentLoaded', function() {
    const planet = document.querySelector('.moving-planet');
    planet.style.opacity = 0;

    setTimeout(() => {
        planet.style.opacity = 1; 
    }, 1); 
});

document.addEventListener('DOMContentLoaded', function() {
    const cloud = document.querySelector('.moving-cloud');
    cloud.style.opacity = 0;

    setTimeout(() => {
        cloud.style.opacity = 1; 
    }, 1); 
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const closeButton = document.getElementById("close-button");
    const links = document.querySelectorAll(".link");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active"); 
    });

    closeButton.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });

    function updateActiveLink() {
        const scrollPos = window.scrollY || window.pageYOffset;

        links.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    links.forEach(link => link.classList.remove("active")); 
                    link.classList.add("active"); 
                }
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
});