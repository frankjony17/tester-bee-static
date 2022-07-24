import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import { GAWPaginaNaoEncontradaComponent } from 'gaw-ng-lib';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { pageTitle: 'Página Inicial' },
  },
  {
    path: 'report',
    component: ReportComponent,
    data: { pageTitle: 'Relatório' },
  },
  {
    matcher: gawFallbackMatcher,
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: '**', component: GAWPaginaNaoEncontradaComponent },
];

function gawFallbackMatcher(url: UrlSegment[]): { consumed: UrlSegment[] } {
  const isPathEmptyOrRPCToken =
    url.length === 0 || (url.length === 1 && url[0].path === 'rpctoken');

  return isPathEmptyOrRPCToken ? { consumed: url } : null;
}

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
