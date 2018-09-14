/**
 * Grades 0 <= 100
 * Grades < 40 is fail
 * Return an array consisting of rounded grades
 *
 */

const gradingStudents = grades => {
  let finalGrades = [];
  let i = 0;
  let newGrade = grades[i];
  let up = Math.ceil(grades[i]/5) * 5;
  for (i; i < grades; i++) {
    // first check if less than 38
    if (grades[i] < 38) {
      newGrade = grades[i];
      finalGrades.push(newGrade);
    } 
    // check if grades[i] is divisible by 5
    else if (grades[i] % 5 === 0) {
      newGrade = grades[i];
      finalGrades.push(newGrade);
    }
    // next round up to nearest multiple of 5 if difference between multiple of 5 is < 3
    else if (up - grades[i] < 3) {
      newGrade = up;
      finalGrades.push(newGrade);
    }
    // do not round up if not < 3
    else {
      newGrade = grades[i];
      finalGrades.push(newGrade);
    }
  }
  console.log(finalGrades);
}

let grades = [73, 67, 38, 33];

// expected output: [
// 75
// 67
// 40
// 33
// ]

gradingStudents(grades);
