import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized, } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'fks-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  pageTitle: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.subscribeRouterChanges();
  }

  private subscribeRouterChanges(): void {
    this.router.events
      .pipe(filter(event => event instanceof RoutesRecognized))
      .subscribe((data: RoutesRecognized) => {
        const routerData = data.state.root.firstChild.data;
        this.pageTitle = routerData.pageTitle;
      });
  }
}
