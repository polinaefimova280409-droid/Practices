function checkAllCities() {
    console.log("Отправка запросов (Promise.allSettled)...");

    const urls = [
        'https://wttr.in/Moscow?format=j1',
        'https://wttr.in/London?format=j1',
        'https://wttr.inn/Paris?format=j1'
    ];

    const cityNames = ['Москва', 'Лондон', 'Париж'];

    const promises = urls.map(url => {
        return fetch(url).then(response => {
            if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
            return response.json();
        });
    });

    Promise.allSettled(promises)
        .then(results => {
            console.log(" Результаты всех запросов ");

            results.forEach((result, index) => {
                const city = cityNames[index];


                if (result.status === 'fulfilled') {
                    const temp = result.value.current_condition[0].temp_C;
                    console.log(`[${city}] Успех! Температура: ${temp}°C.`);
                }

                else if (result.status === 'rejected') {
                    console.log(`[${city}] Ошибка! Причина: ${result.reason.message}`);
                }
            });
        });
}