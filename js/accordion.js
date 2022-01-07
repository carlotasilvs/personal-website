var acc = document.getElementsByClassName("open");
var i;
var profile = document.getElementById("profileImgMobile");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var infoContainer = this.nextElementSibling;

    if (infoContainer.style.display === "block") {
        infoContainer.style.display = "none";
        this.classList.toggle("closed");
        this.classList.remove("active");
        profile.style.opacity = 1;
    } else {
        infoContainer.style.display = "block";
        this.classList.toggle("active");
        this.classList.remove("closed");
        profile.style.opacity = 0;
    }
  });
}