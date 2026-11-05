let paragraph = document.querySelector("#paragraph");

let deleteButton = document.querySelector("#delete");

deleteButton.addEventListener("click", function() {
    paragraph.remove();
});