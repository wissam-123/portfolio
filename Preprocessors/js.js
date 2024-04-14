document.addEventListener("DOMContentLoaded", function() {
    var contactLink = document.getElementById("contact-link");

    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        var confirmation = confirm("Wil je doorgaan naar een andere website?");
        if (confirmation) {
            window.location.href = "https://www.andere-website.com";
            contactLink.classList.add("clicked");
        }
    });
});
