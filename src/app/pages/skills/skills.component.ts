import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Front-End',
      icon: 'code',
      skills: [
        { name: 'HTML & CSS', percentage: 90 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'Angular', percentage: 80 },
        { name: 'Vue.js', percentage: 70 },
      ],
    },
    {
      title: 'Back-End',
      icon: 'storage',
      skills: [
        { name: 'Node.js', percentage: 75 },
        { name: 'Python', percentage: 70 },
        { name: 'Java', percentage: 65 },
        { name: 'Spring Boot', percentage: 60 },
        { name: '.NET', percentage: 55 },
      ],
    },
    {
      title: 'Android Development',
      icon: 'android',
      skills: [
        { name: 'Kotlin', percentage: 80 },
        { name: 'Android Studio', percentage: 75 },
        { name: 'React Native', percentage: 70 },
      ],
    },
    {
      title: 'DevOps & Others',
      icon: 'build',
      skills: [
        { name: 'Docker', percentage: 75 },
        { name: 'GitHub Pages', percentage: 70 },
        { name: 'SQL & Databases', percentage: 80 },
        { name: 'MongoDB', percentage: 65 },
        { name: 'OracleDB', percentage: 60 },
      ],
    },
  ];
}
