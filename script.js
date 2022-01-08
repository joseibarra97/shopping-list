var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var actualLi = document.querySelectorAll("li");
var deleteButtons = Array.from(document.getElementsByClassName("deleteBtn"));

function markDone() {
    actualLi.forEach(function(item) {
        item.addEventListener("click", function() {
            item.classList.toggle("done");
        })
    })
}

function inputLength() {

    return input.value.length;

}

function createListElement() {
    var li = document.createElement("li");
    var newButton = document.createElement("button");
    newButton.appendChild(document.createTextNode("Delete"));
    newButton.classList.add("deleteBtn", "btn", "btn-danger");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(newButton);
    ul.appendChild(li);
    newButton.addEventListener("click", deleteItem);
    li.addEventListener("click", function() {
            li.classList.toggle("done");
        })
    input.value = "";



}

function addListAfterClick() {

    if (inputLength() > 0) {

        createListElement();

        }

}

function addListAfterKepress(event) {

    if (inputLength() > 0 && event.keyCode === 13) {

        createListElement();

    }
}

function deleteItem(event) {
    var parentLi = event.target.parentElement;
    parentLi.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKepress);

deleteButtons.forEach(function (element) {
  element.addEventListener("click", deleteItem);
});

markDone();
