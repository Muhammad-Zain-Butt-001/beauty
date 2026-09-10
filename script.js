    
    const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");


// Open Menu
menuBtn.addEventListener("click", () => {

    mobileMenu.classList.remove("translate-x-full");

    overlay.classList.remove("hidden");

});


// Close Menu
closeBtn.addEventListener("click", () => {

    mobileMenu.classList.add("translate-x-full");

    overlay.classList.add("hidden");

});


// Close when clicking overlay
overlay.addEventListener("click", () => {

    mobileMenu.classList.add("translate-x-full");

    overlay.classList.add("hidden");

});
  