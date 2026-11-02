let link = document.getElementById("link");

let currentHref = link.getAttribute("href");
console.log("1. Текущая ссылка (получение):", currentHref); 

link.setAttribute("href", "https://yandex.ru");
console.log("2. Новая ссылка (изменение):", link.getAttribute("href")); 

let hasTarget = link.hasAttribute("target");
console.log("3. Есть ли атрибут target? (проверка):", hasTarget); 

link.setAttribute("target", "_blank");
console.log("3. Есть ли атрибут target теперь?:", link.hasAttribute("target")); 

link.removeAttribute("href");
console.log("4. Ссылка после удаления href (удаление):", link.getAttribute("href")); 

console.log("Итоговый элемент:", link);