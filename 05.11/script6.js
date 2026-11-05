const student1 = { name: 'Алина', group: 'ВЕБ-21' };
const student2 = { name: 'Максим', group: 'ВЕБ-22' };

function showInfo() {
    console.log(`Студент: ${this.name}, Группа: ${this.group}`);
}

student1.showInfo = showInfo;
student2.showInfo = showInfo;

console.log("--- Вызов методов объектов ---");
student1.showInfo();
student2.showInfo();

console.log("--- Вызов через отдельную переменную ---");
const detachedShowInfo = student1.showInfo;
detachedShowInfo();