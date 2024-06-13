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
        { name: 'JavaScript', percentage: 90 },
        { name: 'Angular', percentage: 80 },
        { name: 'Vue.js', percentage: 70 },
      ],
    },
    {
      title: 'Back-End',
      icon: 'storage',
      skills: [
        { name: 'Node.js', percentage: 80 },
        { name: 'Python', percentage: 70 },
        { name: 'Java', percentage: 75 },
        { name: 'Spring Boot', percentage: 75 },
        { name: '.NET', percentage: 60 },
      ],
    },
    {
      title: 'Android Development',
      icon: 'android',
      skills: [
        { name: 'Kotlin', percentage: 70 },
        { name: 'Android Studio', percentage: 75 },
        { name: 'React Native', percentage: 80 },
      ],
    },
    {
      title: 'DevOps & Others',
      icon: 'build',
      skills: [
        { name: 'Docker', percentage: 75 },
        { name: 'GitHub Pages', percentage: 90 },
        { name: 'SQL & Databases', percentage: 85 },
        { name: 'MongoDB', percentage: 75 },
        { name: 'OracleDB', percentage: 70 },
      ],
    },
  ];
}
