const createUserCourse = async (
  id: number,
  updatedCourse: UpdatedUserCourse
) => {
  const response = await fetch(`/api/user/courses`, {
    method: 'POST',
    body: JSON.stringify({ courseId: id, ...updatedCourse }),
  });
  return response.json();
};

const updateUserCourse = async (
  id: number,
  updatedCourse: UpdatedUserCourse
) => {
  const response = await fetch(`/api/user/courses/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ courseId: id, ...updatedCourse }),
  });
  return response.json();
};

export { createUserCourse, updateUserCourse };
