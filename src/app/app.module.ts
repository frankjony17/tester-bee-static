// Dependências Angular
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgJsonEditorModule } from 'ang-jsoneditor';

// Dependências do PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ChartModule } from 'primeng/chart';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToastModule } from 'primeng/toast';

// Dependências GAW
import {
  GAWHttpInterceptor,
  GAWHubClientService,
  GAWPaginaNaoEncontradaModule,
  GAWTemplateBaseModule,
  GAWPipesModule,
} from 'gaw-ng-lib';

// Dependências internas da aplicação
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { FormItemComponent } from './components/form-item/form-item.component';
import { ReportComponent } from './report/report.component';
import { FormEditorComponent } from './components/form-editor/form-editor.component';
import { ChartTimeComponent } from './components/chart-time/chart-time.component';
import { ChartSecondComponent } from './components/chart-second/chart-second.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    FormTestComponent,
    FormItemComponent,
    ReportComponent,
    FormEditorComponent,
    ChartTimeComponent,
    ChartSecondComponent,
  ],
  imports: [
    // Angular
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // PrimeNG
    ButtonModule,
    CardModule,
    PanelModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    InputNumberModule,
    ToggleButtonModule,
    ChartModule,
    ScrollPanelModule,
    ToastModule,

    // Components FK
    // FkTableModule,
    // FkPaginatorModule,
    NgJsonEditorModule,

    // GAW
    GAWTemplateBaseModule,
    GAWPaginaNaoEncontradaModule,
    GAWPipesModule,
  ],
  providers: [
    // Efetua a conexão com o OpenAjaxHub durante a inicialização da aplicação
    {
      provide: APP_INITIALIZER,
      useFactory: AppModule.initializeApp,
      deps: [GAWHubClientService],
      multi: true,
    },

    // Provê tratamentos genéricos de erros como por exemplo falha no login
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GAWHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  static initializeApp(
    gawHubClientService: GAWHubClientService
  ): () => Promise<any> {
    return (): Promise<any> => {
      return gawHubClientService.init();
    };
  }
}
