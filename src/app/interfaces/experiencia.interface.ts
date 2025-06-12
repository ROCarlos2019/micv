export interface Experiencia {
  titulo: string;
  periodo: string;
  cargo: string;
  tecnologiasResumen: string;
  descripcionGeneral: string;
  bullets: string[];
  tecnologiasFinales: string;
  icono: string;
}

export interface Experiencias {
  [key: string]: Experiencia;
}
