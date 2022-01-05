var acc = document.getElementsByClassName("open");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var infoContainer = this.nextElementSibling;

    if (infoContainer.style.display === "block") {
        infoContainer.style.display = "none";
    } else {
        infoContainer.style.display = "block";
    }
  });
}