async function getWeather() {
    console.log('Начинается запрос погоды...');
    try {
        let response = await fetch('https://wttr.in/Moscow?format=j1');
        console.log('Ответ от сервера получен, статус:', response.status);

        let data = await response.json();
        console.log('Данные успешно преобразуны в JSON:', data);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}