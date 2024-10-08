
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

let aboutpage=document.querySelector('.scrollable_content');
window.getComputedStyle(aboutpage).overflowY= scroll;

