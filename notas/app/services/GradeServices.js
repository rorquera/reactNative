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
