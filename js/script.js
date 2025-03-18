function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error('Error loading component:', error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header-container", "components/header.html");
    loadComponent("body-container", "components/body.html");
});
