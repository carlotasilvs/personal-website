var me = document.querySelector(".bottom");
var meDistorted = document.querySelector(".top");

window.onload = function() {
    me.style.opacity = 0;
}

meDistorted.addEventListener("mouseenter", function () {
    me.style.opacity = 1;
    meDistorted.style.opacity = 0;
});

meDistorted.addEventListener("mouseleave", function () {
    me.style.opacity = 0;
    meDistorted.style.opacity = 1;
});