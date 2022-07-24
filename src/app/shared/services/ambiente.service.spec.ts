import { TestBed } from '@angular/core/testing';
import { AmbienteService } from './ambiente.service';
import { HttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

const mock: any = {
  status: 'OK',
  messages: [],
  data: {
    localhost: [
      {
        estatico: 'localhost.static.com',
        dinamico: 'localhost.com',
        mqtt: 'wss://127.0.0.1:8000/',
      },
      {
        estatico: 'localhost.static.com',
        dinamico: 'localhost-com',
      },
      {
        estatico: 'localhost.static.com',
        dinamico: 'localhost-publico-externo.com',
      },
      {
        estatico: 'localhost.static.com',
        dinamico: 'localhost.all.com',
      },
      {
        estatico: 'localhost.static.com',
        dinamico: 'localhost.desenv.com',
        mqtt: 'wss://127.0.0.1:8000/',
      },
    ],
    desenvolvimento: [
      {
        estatico: 'desenv.static.com',
        dinamico: 'company.desenv.com',
        mqtt: 'wss://127.0.0.1:8000/',
      },
      {
        estatico: 'desenv.static.com',
        dinamico: 'company.desenv.com',
      },
      {
        estatico: 'desenv.static.com',
        dinamico: 'company-all.desenv.com',
      },
      {
        estatico: 'desenv.static.com',
        dinamico: 'company-fk.desenv.com',
      },
    ],
    homologacao: [
      {
        estatico: 'hm.static.com',
        dinamico: 'company.hm.com',
      },
      {
        estatico: 'hm.static.com',
        dinamico: 'company.hm.com',
      },
      {
        estatico: 'hm.static.com',
        dinamico: 'company-all.hm.com',
      },
      {
        estatico: 'hm.static.com',
        dinamico: 'company-fk.hm.com',
      },
    ],
    piloto: [
      {
        estatico: 'piloto.static.com:49286',
        dinamico: 'company-client.com',
      },
      {
        estatico: 'piloto.static.com:49286',
        dinamico: 'company-client.com',
      },
      {
        estatico: 'piloto.static.com:49286',
        dinamico: 'company-fk-client.com',
      },
    ],
    producao: [
      {
        estatico: 'static.com:49286',
        dinamico: 'company.client.com',
      },
      {
        estatico: 'static.com:49286',
        dinamico: 'company.com.br',
      },
      {
        estatico: 'static.com:49286',
        dinamico: 'company-all.com',
      },
      {
        estatico: 'estatico.all.com',
        dinamico: 'company.all.com',
      },
      {
        estatico: 'static.com:49286',
        dinamico: 'company-fk.client.com',
      },
    ],
  },
  statusCode: 200,
};

describe('AmbienteService', () => {
  let ambienteService: AmbienteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AmbienteService],
    });
    ambienteService = TestBed.inject(AmbienteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should call', () => {
    expect(AmbienteService).toBeTruthy();
  });

  it('should call consultarAmbiente', () => {
    ambienteService.consultarAmbiente();
    expect(ambienteService).toBeTruthy();
  });

  it('should call consultarAmbiente', () => {
    ambienteService.apiUrl();
    expect(ambienteService).toBeTruthy();
  });

  it('should call elementsContainTerm', () => {
    ambienteService.elementsContainTerm(
      [
        {
          estatico: 'localhost.static.com',
          dinamico: 'localhost.desenv.com',
          mqtt: 'wss://127.0.0.1:8000/',
        },
      ],
      [
        {
          estatico: 'localhost.static.com',
          dinamico: 'localhost.desenv.com',
          mqtt: 'wss://127.0.0.1:8000/',
        },
      ]
    );
    expect(ambienteService).toBeTruthy();
  });

  it('should call consultarAmbiente', () => {
    ambienteService.identifyEnviroment(mock);
    expect(ambienteService).toBeTruthy();
  });
});
