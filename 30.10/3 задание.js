const phoneBook = new Map();

phoneBook.set('Ivanov', '+7-900-111-22-33');
phoneBook.set('Petrova', '+7-900-444-55-66');
phoneBook.set('Sidorov', '+7-900-777-88-99');

console.log("Номер Petrova:", phoneBook.get('Petrova'));

phoneBook.delete('Sidorov');

console.log("Размер справочника:", phoneBook.size);
console.log("Есть ли Sidorov?", phoneBook.has('Sidorov'));

const namesArray = [...phoneBook.keys()];
console.log("Массив имен:", namesArray);

console.log("Содержимое справочника:");
phoneBook.forEach((phone, name) => {
    console.log(`${name}: ${phone}`);
});
