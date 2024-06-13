import { Component } from '@angular/core';
import { TimelineEvent } from '../../shared/models/timeline-event.model';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiencia: TimelineEvent[] = [
    { job: 'Desarrollador Frontend', company: 'Praxedes Midasoft', country: 'Colombia', date: '10/2022 - 04/2024' },
    { job: 'Desarrollador Backend', company: 'DEJ Software', country: 'Colombia', date: '03/2022 – 08/2022' },
    {
      job: 'Técnico En Sistemas Y Mantenimiento De Computo',
      company: 'Match Electronics Sas',
      country: 'Colombia',
      date: '03/2017 – 04/2020',
    },
    { job: 'Aprendiz Sena', company: 'Olimpia management', country: 'Colombia', date: '06/2016 – 01/2017' },
  ];
  estudio: TimelineEvent[] = [
    {
      job: 'Bachillerato Homologado',
      company: 'Ministerio De Educación, Formación Profesional Y Deportes',
      country: 'España',
      date: '2024',
    },
    {
      job: 'Técnico Laboral Desarrollo Web',
      company: 'Universidad Autónoma de Bucaramanga',
      country: 'Colombia',
      date: '2022',
    },
    { job: 'Técnico En Sistemas', company: 'SENA', country: 'Colombia', date: '2017' },
    { job: 'Bachiller Académico', company: 'Colegio Distrital Castilla', country: 'Colombia', date: '2015' },
  ];
  cursos: TimelineEvent[] = [
    { job: 'Scrum Foundation Professional Certificate (SFPC)', company: 'CertiProf', date: '2022' },
    { job: 'Fundamentos De Programación', company: 'Universidad Autónoma de Bucaramanga', date: '2022' },
    { job: 'Programación Básica', company: 'Universidad Autónoma de Bucaramanga', date: '2022' },
    { job: 'Desarrollo De Software', company: 'Universidad Autónoma de Bucaramanga', date: '2022' },
    { job: 'Desarrollo De Aplicaciones Web', company: 'Universidad Autónoma de Bucaramanga', date: '2022' },
    { job: '¡Web developer! Frontend development', company: 'Udemy', date: '2021' },
    { job: 'Programación En Python, Java Y Javascript', company: 'Udemy', date: '2021' },
    { job: 'Lenguaje De Programación C++ (Nivel I, II Y III)', company: 'SENA', date: '2021' },
    {
      job: 'Gestión De Proyectos Con Metodologías Ágiles Y Enfoques Lean',
      company: 'Fundación Telefónica',
      date: '2021',
    },
    { job: 'Inglés - English Dot Works 5', company: 'SENA', date: '2021' },
  ];
}
