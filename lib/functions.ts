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

const updateCourseInCache = (
  updatedUserCourse: UpdatedUserCourseResponse,
  cacheData: CareerFullData,
  courseId: number
) => {
  console.log(updatedUserCourse);
  console.log(cacheData);
  console.log(courseId);
  const updatedPeriods = cacheData.data.career.periods.map((cachedPeriod) => {
    const updatedCourses = cachedPeriod.courses.map((cachedCourse) => {
      if (cachedCourse.id === courseId) {
        const updatedProgress = [updatedUserCourse.data];
        return {
          ...cachedCourse,
          progress: updatedProgress,
        };
      }
      return cachedCourse;
    });

    return {
      ...cachedPeriod,
      courses: updatedCourses,
    };
  });

  const updatedCacheData = {
    ...cacheData,
    data: {
      ...cacheData.data,
      career: {
        ...cacheData.data.career,
        periods: updatedPeriods,
      },
    },
  };

  return updatedCacheData;
};

export { formatPeriodOrder, capitalizeFirstLetter, updateCourseInCache };
