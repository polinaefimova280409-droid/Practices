function checkWeather(temperature) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (temperature > 0) {
                resolve("Тепло!");
            }
            else {
                reject(new Error("Холодно!"));
            }
        }, 1000);
    });
}

console.log("Старт проверки погоды ");

console.log("Запрос погоды для 5 градусов ");
checkWeather(5)
    .then((result) => {
        console.log("Успех (.then):", result);
    })
    .catch((error) => {
        console.error("Ошибка (.catch):", error.message);
    });

console.log("Запрос погоды для -5 градусов ");
checkWeather(-5)
    .then((result) => {
        console.log("Успех (.then):", result);
    })
    .catch((error) => {
        console.error("Ошибка (.catch):", error.message);
    });