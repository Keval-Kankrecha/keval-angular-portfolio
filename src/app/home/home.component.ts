import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  cartoon = 'assets/header-img.png';

  jobTitles = [
    'Software Engineer',
    'Software Developer',
    'Web Developer',
    'FullStack Developer',
    'Node.js Developer',
    'NestJS Developer',
    'REST-API Developer',
    'Backend Developer',
  ];

  firstWord = '';
  secondWord = '';

  ngOnInit() {
    this.setRandomTitle();

    setInterval(() => {
      this.setRandomTitle();
    }, 5000);
  }

  setRandomTitle() {
    const random =
      this.jobTitles[Math.floor(Math.random() * this.jobTitles.length)];

    const parts = random.split(' ');

    this.firstWord = parts[0];
    this.secondWord = parts.slice(1).join(' ');
  }
}
