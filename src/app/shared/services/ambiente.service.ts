import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import environment from 'src/environments/environment';
import desenv from 'src/environments/environment.desenv';
import hm from 'src/environments/environment.hm';
import prod from 'src/environments/environment.prod';
import piloto from 'src/environments/environment.piloto';

@Injectable({
  providedIn: 'root',
})
export class AmbienteService {
  private static instance: AmbienteService = null;

  env = {
    isLocalhost: false,
    isDesenvolvimento: false,
    isHomologacao: false,
    isPiloto: false,
    isProducao: false,
    isAppInCDN: false,
    staticDomain: '',
  };

  ready = false;

  constructor(private http: HttpClient) {}

  consultarAmbiente(): any {
    console.log('consultarAmbiente...');
    // return this.http
    //   .get('/gawcms/v3/api/gaw3/v2/dominios')
    //   .toPromise()
    //   .then((response) => {
    //     this.identifyEnviroment(response);
    //   });
    return this.identifyEnviroment({
      status: 'OK',
      messages: [],
      data: {
        localhost: [
          {
            dinamico: 'localhost.com',
          },
          {
            dinamico: 'localhost-com',
          },
          {
            dinamico: 'localhost-publico-externo.com',
          },
        ],
        desenvolvimento: [
          {
            dinamico: 'company.desenv.com',
          },
          {
            dinamico: 'company.desenv.com',
          },
          {
            dinamico: 'company-all.desenv.com',
          },
          {
            dinamico: 'company-fk.desenv.com',
          },
        ],
        homologacao: [
          {
            dinamico: 'company.hm.com',
          },
          {
            dinamico: 'company.hm.com',
          },
          {
            dinamico: 'company-all.hm.com',
          },
          {
            dinamico: 'company1.hm.com',
          },
          {
            dinamico: 'company2.hm.com',
          },
          {
            dinamico: 'company3.hm.com',
          },
          {
            dinamico: 'company-fk.hm.com',
          },
        ],
        piloto: [
          {
            dinamico: 'company-client.com',
          },
          {
            dinamico: 'company-client.com',
          },
          {
            dinamico: 'company-fk-piloto.com',
          },
        ],
        producao: [
          {
            dinamico: 'company.client.com',
          },
          {
            dinamico: 'company.intranet.com',
          },
          {
            dinamico: 'company-all.com',
          },
          {
            dinamico: 'company.all.com',
          },
          {
            dinamico: 'company-fk.com',
          },
        ],
      },
      statusCode: 200,
    });
  }

  identifyEnviroment(response: any): any {
    const locationHref = window.location.href;
    // const locationHref = 'company.hm.com';

    const mapaDominios = response.data;
    console.log('identifyEnviroment...');
    this.env.isLocalhost = this.elementsContainTerm(
      mapaDominios.localhost,
      locationHref
    );
    this.env.isDesenvolvimento = this.elementsContainTerm(
      mapaDominios.desenvolvimento,
      locationHref
    );
    this.env.isHomologacao = this.elementsContainTerm(
      mapaDominios.homologacao,
      locationHref
    );
    this.env.isPiloto = this.elementsContainTerm(
      mapaDominios.piloto,
      locationHref
    );
    this.env.isProducao = this.elementsContainTerm(
      mapaDominios.producao,
      locationHref
    );
    this.ready = true;
  }

  apiUrl(): string {
    this.consultarAmbiente();
    console.log('apiUrl...', this.env.isDesenvolvimento, this.env);
    if (this.env.isLocalhost) {
      return environment.API_URL;
    } else if (this.env.isDesenvolvimento) {
      return desenv.API_URL;
    } else if (this.env.isHomologacao) {
      return hm.API_URL;
    } else if (this.env.isPiloto) {
      return piloto.API_URL;
    } else if (this.env.isProducao) {
      return prod.API_URL;
    }
    console.log(this.env);
    return environment.API_URL;
  }

  elementsContainTerm(elements: any, term: any): boolean {
    for (const element of elements) {
      if (term.indexOf(element.dinamico) !== -1) {
        return true;
      }
    }
    return false;
  }

  getInstance(http: HttpClient): any {
    if (AmbienteService.instance === null) {
      AmbienteService.instance = new AmbienteService(http);
    }
    return AmbienteService.instance;
  }
}
