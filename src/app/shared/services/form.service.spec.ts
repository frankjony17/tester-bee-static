import { TestBed } from '@angular/core/testing';
import { FormService } from './form.service';
import { HttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('AmbienteService', () => {
  let pesquisaClienteService: FormService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FormService],
    });
    pesquisaClienteService = TestBed.inject(FormService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should call', () => {
    expect(FormService).toBeTruthy();
  });
});
