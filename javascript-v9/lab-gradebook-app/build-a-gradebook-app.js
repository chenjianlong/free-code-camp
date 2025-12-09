function getAverage(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue) / arr.length;
  }
  
  function getGrade(score) {
    if (score == 100) {
      return "A+";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) != "F";
  }
  
  function studentMsg(scores, score) {
    const avg = getAverage(scores);
    const grade = getGrade(score);
    if (hasPassingGrade(score)) {
      return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
    } else {
      return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
    }
  }