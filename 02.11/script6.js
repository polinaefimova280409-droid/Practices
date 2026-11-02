let inputElement = document.getElementById("username");
let resultElement = document.getElementById("result");

console.log("Исходное значение поля:", inputElement.value);

inputElement.value = "Полина"; 

resultElement.textContent = "Новое значение поля: " + inputElement.value;

console.log("Измененное значение поля:", inputElement.value);