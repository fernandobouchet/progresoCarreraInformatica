enum CourseStatus {
  CURSANDO = 'CURSANDO',
  PENDIENTE = 'PENDIENTE',
  REGULARIZADA = 'REGULARIZADA',
  APROBADA = 'APROBADA',
}

type Career = {
  id: number;
  name: string;
  periods: {
    id: number;
    order: number;
    courses: Course[];
  }[];
};

type Course = {
  id: number;
  name: string;
  progress: {
    status: keyof typeof CourseStatus;
    qualification: number | null;
  }[];
};

type CareerProgress = {
  TOTAL: number;
  APROBADA: Course[];
  PENDIENTE: Course[];
  REGULARIZADA: Course[];
  CURSANDO: Course[];
};
