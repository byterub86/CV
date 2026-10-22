document.querySelector(".entrar").addEventListener("click", function() {
    document.querySelector("nav").style.display = "block";
    document.querySelector("main").style.display = "block";
    document.querySelector(".introduccion").style.display = "none";
    document.body.classList.remove("intro");
});
