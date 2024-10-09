document.addEventListener('DOMContentLoaded', function () {
    
    let menuIcon = document.querySelector(".hamburg");
    let dropmenu = document.querySelector(".dropmenu");
    let cancelIcon = document.querySelector("#cancel");


    
    if (!menuIcon || !dropmenu || !cancelIcon) {
        console.error("One or more elements are missing in the DOM.");
        return;
    }

    
    function toggleMenu() {
        
        let visibility = window.getComputedStyle(dropmenu).visibility;
        
        if (visibility === "visible") {
            
            dropmenu.style.visibility = "hidden";
            dropmenu.classList.remove("visible");
        } else {
            
            dropmenu.style.visibility = "visible";
            dropmenu.classList.add("visible");
        }
    }

    
    menuIcon.addEventListener('click', toggleMenu);

    cancelIcon.addEventListener('click', function () {
        dropmenu.style.visibility = "hidden"; 
        dropmenu.classList.remove("visible"); 
    });
    
    // Hide the menu when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!dropmenu.contains(event.target) && event.target !== menuIcon) {
            dropmenu.style.visibility = "hidden"; 
            dropmenu.classList.remove("visible"); 
        }
    });
});

let divs = document.querySelectorAll('section.div');
let navlinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    let top = window.scrollY;  // Get the current scroll position
    divs.forEach(sec => {
        let offset = sec.offsetTop;  // Get the offset of the section
        let height = sec.offsetHeight;  // Get the height of the section
        let id = sec.getAttribute('id');  // Get the id of the section

        // Check if the section is in the viewport
        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all nav links
            navlinks.forEach(links => {
                links.classList.remove('active');
            });

            // Add 'active' class to the correct nav link based on the id
            let activeLink = document.querySelector('nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};



