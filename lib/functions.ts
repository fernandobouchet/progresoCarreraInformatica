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

const getCareerAverageQualification = (courses: Course[]) => {
  let qualificationSum = 0;

  for (const course of courses) {
    if (course.progress)
      for (const status of course.progress) {
        if (status.qualification) {
          qualificationSum += status.qualification;
        }
      }
  }
  const averageQualification = (qualificationSum / courses.length).toPrecision(
    2
  );

  return averageQualification;
};

const updateUserCareerCache = (
  careerData: Career,
  userCourses: UserCourse[]
) => {
  // Loop through each period
  for (const period of careerData.periods) {
    for (const courses of period.courses) {
      const matchingCourse = userCourses.find(
        (course) => course.courseId === courses.id
      );

      // Update the period's course data if a match is found
      if (matchingCourse) {
        if (!courses.progress) {
          courses.progress = []; // Initialize progress as an array if it doesn't exist and push the new course progress
          courses.progress.push({
            qualification: matchingCourse.qualification,
            status: matchingCourse.status,
          });
        } else {
          // If exists just edit the current course progress
          courses.progress[0].qualification = matchingCourse.qualification;
          courses.progress[0].status = matchingCourse.status;
        }
      }
    }
  }
  return careerData; // Return the updated careerData
};

export {
  formatPeriodOrder,
  capitalizeFirstLetter,
  getCoursesProgress,
  getCareerAverageQualification,
  updateUserCareerCache,
};
