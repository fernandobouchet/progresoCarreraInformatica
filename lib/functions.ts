const formatPeriodOrder = (order: number) => {
  const positions = ['', '1er', '2do', '3er', '4to', '5to'];
  return positions[order];
};

const capitalizeFirstLetter = (word: string) => {
  const firstLetterCapitalized = word.charAt(0).toUpperCase();
  const remainingLetters = word.slice(1).toLowerCase();
  const capitalizedWord = `${firstLetterCapitalized}${remainingLetters}`;
  return capitalizedWord;
};

const getCoursesProgress = (career: Career) => {
  const coursesProgress: CareerProgress = {
    TOTAL: 0,
    APROBADA: [],
    PENDIENTE: [],
    REGULARIZADA: [],
    CURSANDO: [],
  };

  for (const period of career.periods) {
    for (const course of period.courses) {
      const progressStatus = course?.progress
        ? course?.progress[0]?.status
        : 'PENDIENTE';
      coursesProgress.TOTAL += 1;
      if (!progressStatus) {
        coursesProgress.PENDIENTE.push(course);
      } else {
        coursesProgress[progressStatus].push(course);
      }
    }
  }

  return coursesProgress;
};
export { formatPeriodOrder, capitalizeFirstLetter, getCoursesProgress };
