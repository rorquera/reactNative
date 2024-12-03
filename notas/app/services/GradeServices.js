let grades = [
  {
    subject: 'Matematicas',
    grade: '10',
  },
  {
    subject: 'Física',
    grade: '9.2',
  },
];

export const saveGrade = (grade) => {
  grades.push(grade);
  console.log(JSON.stringify(grades));
};

export const getGrades = () => {
  return grades;
};

// export const upgradeGrade = (nota) => {
//   let gradeRetrieved = find(nota.subject);
//   if (gradeRetrieved != null) {
//     console.log(JSON.stringify(gradeRetrieved))
//     gradeRetrieved.grade = nota.grade;
//   }
// };

// const find = (subject) => {
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i].subject == subject) {
//       return grades[i];
//     }
//   }
//   return null;
// };

export const upgradeGrade = (nota) => {
  // Crea una copia del array original
  const updatedGrades = grades.map((grade) => {
    if (grade.subject === nota.subject) {
      // Crea un nuevo objeto con la nota actualizada
      return { ...grade, grade: nota.grade };
    }
    // Si no coincide, devuelve el objeto sin cambios
    return grade;
  });
  // Asigna el nuevo array al array original
  grades = updatedGrades;
  console.log(JSON.stringify(updatedGrades));
};
