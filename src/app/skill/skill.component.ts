import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-skill',
  standalone: false,
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  skillData = [
    {
      category: 'Languages',
      items: [
        { title: 'HTML', icon: 'simpleHtml5', displayValue: 'HTML5' },
        { title: 'CSS', icon: 'simpleCss', displayValue: 'CSS3' },
        {
          title: 'Javascript',
          icon: 'simpleJavascript',
          displayValue: 'JavaScript',
        },
        { title: 'Python', icon: 'simplePython', displayValue: 'Python' },
        { title: 'Java', icon: 'bootstrapFiletypeJava', displayValue: 'Java' },
      ],
    },
    {
      category: 'Frameworks & Databases',
      items: [
        {
          title: 'Node.js',
          icon: 'diNodejsPlainWordmark',
          displayValue: 'Node.js',
        },
        { title: 'NestJS', icon: 'simpleNestjs', displayValue: 'NestJS' },
        { title: 'Angular', icon: 'simpleAngular', displayValue: 'Angular' },
        { title: 'MongoDB', icon: 'simpleMongodb', displayValue: 'MongoDB' },
        { title: 'MySQL', icon: ' simpleMysql', displayValue: 'MySQL' },
      ],
    },
    {
      category: 'Platforms & Tools',
      items: [
        { title: 'Docker', icon: 'simpleDocker', displayValue: 'Docker' },
        { title: 'Clickup', icon: 'simpleClickup', displayValue: 'ClickUp' },
        { title: 'Git', icon: 'simpleGit', displayValue: 'Git' },
        { title: 'RabbitMQ', icon: 'simpleRabbitmq', displayValue: 'RabbitMQ' },
      ],
    },
  ];
}
