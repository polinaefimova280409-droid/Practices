'use strict';
const employee = {
    name: 'Иван Иванов',
    position: 'Frontend-разработчик',
    department: 'IT-отдел',
    
    showCard() {
        console.log(`Сотрудник: ${this.name}, Должность: ${this.position}, Отдел: ${this.department}`);
    }
};

console.log(' Пункт 3: Вызов как метода объекта ');
employee.showCard();

console.log('\n Пункт 4: Потеря контекста ');
const detachedShowCard = employee.showCard;

try {
    detachedShowCard(); 
} catch (error) {
    console.log('Результат: Ошибка!', error.message);
    console.log('Вывод: при вызове без объекта this стал undefined (в строгом режиме), поэтому обратиться к свойствам не удалось.');
}

console.log('\n Пункт 5: Исправление через bind() ');
const boundShowCard = employee.showCard.bind(employee);
boundShowCard(); 

console.log('\n Пункт 6: Методы call() и apply() ');
function showCardInCity(city) {
    console.log(`Сотрудник ${this.name} работает в городе ${city}.`);
}

showCardInCity.call(employee, 'Москва');

showCardInCity.apply(employee, ['Санкт-Петербург']);

console.log('\n Пункт 7: События ');
const button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
    console.log(' Обычная функция ');
    console.log('this:', this); 
    console.log('event.currentTarget:', event.currentTarget);
    console.log('Сравнение (this === event.currentTarget):', this === event.currentTarget);
});


button.addEventListener('click', (event) => {
    console.log(' Стрелочная функция ');
    console.log('this:', this);
    console.log('event.currentTarget:', event.currentTarget);
    console.log('Сравнение (this === event.currentTarget):', this === event.currentTarget);
});