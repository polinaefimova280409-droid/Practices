const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');
const changeButton = document.getElementById('change');

changeButton.addEventListener('click', function() {
    titleElement.textContent = 'Добро пожаловать!';
    descriptionElement.textContent = 'Мы изучаем JavaScript и DOM';
});
