const CourseStatus: {
  CURSANDO: 'CURSANDO';
  PENDIENTE: 'PENDIENTE';
  REGULARIZADA: 'REGULARIZADA';
  APROBADA: 'APROBADA';
};

type CareerFullData = {
  data: {
    career: {
      id: number;
      name: string;
      periods: {
        id: number;
        order: number;
        courses: Course[];
      }[];
    };
  };
};

type UpdatedUserCourse = {
  status: keyof typeof CourseStatus;
  qualification?: number;
};

type UpdatedUserCourseResponse = {
  data: {
    status: keyof typeof CourseStatus;
    qualification?: number;
  };
};

type Course = {
  id: number;
  name: string;
  progress: {
    status: keyof typeof CourseStatus;
    qualification?: number;
  }[];
};
