const students = [
  { name: 'Anna', grade: 5 },
  { name: 'Ivan', grade: 4 },
  { name: 'Anna', grade: 5 },
  { name: 'Petr', grade: 3 },
  { name: 'Olga', grade: 4 },
  { name: 'Ivan', grade: 4 } 
];

const uniqueStudents = [...new Set(students.map(student => JSON.stringify(student)))]
  .map(str => JSON.parse(str));

console.log("1. Уникальные студенты без повторяющихся записей:");
console.log(uniqueStudents);

const gradeMap = new Map();

students.forEach(student => {
  const grade = student.grade;
  const name = student.name;

  if (!gradeMap.has(grade)) {
    gradeMap.set(grade, []);
  }

  gradeMap.get(grade).push(name);
});

console.log("\n2. Вывод по оценкам:");

gradeMap.forEach((names, grade) => {
  
  console.log(`Оценка ${grade}: ${names.join(', ')}`);
});

const uniqueGrades = [...gradeMap.keys()];
console.log("\n3. Массив всех уникальных оценок:", uniqueGrades);
