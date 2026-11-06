function fetchWithTimeout(url, ms) {

    const fetchPromise = fetch(url);

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Таймаут'));
        }, ms);
    });

    return Promise.race([fetchPromise, timeoutPromise]);
}

function runTests() {
    const testUrl = 'https://wttr.in/Moscow?format=j1';

    console.log(" Тест 1: Запрос с таймаутом 100 мс ");
    fetchWithTimeout(testUrl, 100)
        .then(response => {
            console.log("Успех", response.status);
        })
        .catch(error => {
            console.error("Ошибка:", error.message);
        });

    console.log(" Тест 2: Запрос с таймаутом 5000 мс ");
    fetchWithTimeout(testUrl, 5000)
        .then(response => {
            console.log("Успех! Данные пришли. Статус:", response.status);
            return response.json();
        })
        .then(data => {
            console.log("Температура:", data.current_weather.temperature, "°C");
        })
        .catch(error => {
            console.error("Ошибка:", error.message);
        });
}