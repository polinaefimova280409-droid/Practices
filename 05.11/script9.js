const btnRegular = document.getElementById('regular');
const btnArrow = document.getElementById('arrow');

btnRegular.addEventListener('click', function(event) {
    console.log(" ОБЫЧНАЯ ФУНКЦИЯ ");
    console.log("Значение this:", this);
    console.log("Значение event.currentTarget:", event.currentTarget);
});

btnArrow.addEventListener('click', (event) => {
    console.log(" СТРЕЛОЧНАЯ ФУНКЦИЯ ");
    console.log("Значение this:", this);
    console.log("Значение event.currentTarget:", event.currentTarget);
});