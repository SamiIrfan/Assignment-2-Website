const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
navLinks.classList.toggle("show");
});


/* Navigation Highlight */

const links = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {

const linkPage = link.getAttribute("href");

if(linkPage === currentPage){
link.classList.add("active");
}

});