let element = document.getElementById("message");

console.log("Начальные классы:", element.className); 

element.classList.add("active");
console.log("После добавления active:", element.className);

let isActive = element.classList.contains("active");
console.log("Есть ли класс active?", isActive);

element.classList.remove("text");
console.log("После удаления text:", element.className);

element.classList.toggle("hidden");
console.log("После toggle (скрыли):", element.className); 

setTimeout(function() {
    element.classList.toggle("hidden");
    console.log("После второго toggle (показали):", element.className);
}, 2000);