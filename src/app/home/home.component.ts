import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fks-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'home';

  resources = [
    { url: 'https://angular.io/tutorial', desc: 'Aprenda Angular', icon: 'assets/graduate.svg' },
    { url: 'https://angular.io/cli', desc: 'Crie estruturas com Angular CLI', icon: 'assets/code.svg' },
    { url: 'https://primefaces.org/primeng/showcase', desc: 'Use componentes PrimeNG', icon: 'assets/cubes.svg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
