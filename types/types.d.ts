const CourseStatus: {
  CURSANDO: 'CURSANDO';
  PENDIENTE: 'PENDIENTE';
  REGULARIZADA: 'REGULARIZADA';
  APROBADA: 'APROBADA';
};

type Career = {
  id: number;
  name: string;
  periods: {
    id: number;
    order: number;
    courses: Course[];
  }[];
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
  qualification?: number | null;
};

type UpdatedUserCourseResponse = {
  data: {
    status: keyof typeof CourseStatus;
    qualification?: number | null;
  };
};

type Course = {
  id: number;
  name: string;
  progress: {
    status: keyof typeof CourseStatus;
    qualification?: number | null;
  }[];
};

type CareerProgress = {
  APROBADA: string[];
  PENDIENTE: string[];
  REGULARIZADA: string[];
  CURSANDO: string[];
};
