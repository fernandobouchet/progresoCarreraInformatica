enum CourseStatus {
  CURSANDO = 'CURSANDO',
  PENDIENTE = 'PENDIENTE',
  REGULARIZADA = 'REGULARIZADA',
  APROBADA = 'APROBADA',
}

type Course = {
  id: number;
  name: string;
  progress: {
    status: keyof typeof CourseStatus;
    qualification: number;
  }[];
};
