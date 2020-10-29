import { Project } from 'src/app/core/model/project.interface';
import { Status } from 'src/app/core/model/status.enum';

export const PROJECTS: Project[] = [
  {
    id: 'mi-primer-proyecto',
    title: 'Mi primer proyecto',
    description: 'Este es un proyecto de prueba. Para ver de qué soy capaz.',
    start: new Date(2020, 9, 10),
    end: new Date(2020, 9, 30),
    budget: 1000,
    status: Status.InProgress,
  },
  {
    id: 'el-super-proyecto',
    title: 'El super proyecto',
    description: 'Ahora ya me he lanzado y voy con más confianza y recursos.',
    start: new Date(2020, 10, 9),
    end: new Date(2020, 11, 31),
    budget: 9000,
    status: Status.InProgress,
  },
];
