import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from 'gaw-ng-lib';
import { Observable } from 'rxjs';
import { AmbienteService } from './ambiente.service';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  emitirPayload = new EventEmitter<any>();
  form: any = {};
  payload: any = {};
  payloads: any[] = [];
  load: {
    table: any[];
    request_by_second: any;
    response_time_ms: any;
    request_count: number;
    date_time: string;
  };
  uniqueParameters: any = {};

  constructor(private http: HttpClient) {}

  convertList(): void {
    let result: any;
    result = {};
    let uniqueParameters: any = {};
    uniqueParameters = {};
    this.payloads.map((item, i) => {
      if (item.option === 'str') {
        result[item.key] = Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, '')
          .substr(0, 10);
        uniqueParameters[item.key] = item.option;
      } else if (item.option === 'int') {
        uniqueParameters[item.key] = item.option;
        result[item.key] = Math.floor(Math.random() * 1000) + 1;
      } else {
        result[item.key] = item.value;
        // this.removeUniqueParameters(item);
      }
    });

    this.uniqueParameters = uniqueParameters;
    this.form = result;
  }

  handleItem(item: any, index: number = null): void {
    this.payload = item;
    // this.emitirPayload.emit(this.payload);
    const filter = this.payloads.filter((value) => {
      return value?.index === index;
    });

    if (filter.length === 0) {
      this.payloads.push(item);
    } else {
      this.payloads.splice(this.payloads.indexOf(item));
      this.payloads.push(item);
    }
    this.convertList();
  }

  onSubmit(values: any): any {
    console.log(JSON.stringify(values));
    const ambienteService = new AmbienteService(this.http);
    console.log('this.ambienteService.apiUrl()', ambienteService.apiUrl());

    const url = `${ambienteService.apiUrl()}/bee/basic/test`;

    this.form = values;

    const dados = {
      host: values.host,
      method: values.method,
      payload: values.payload,
      number_of_requests: values.numberRequests ? values.numberRequests : 0,
      record_response: values.recordResponse,
      unique_parameters: values.unique_parameters,
      time_between_requests: values.timeBetweenRequests
        ? values.timeBetweenRequests
        : 0,
    };

    return this.http.post(url, dados);
  }

  loadTest(): any {
    const ambienteService = new AmbienteService(this.http);
    console.log('this.ambienteService.apiUrl()', ambienteService.apiUrl());

    const url = `${ambienteService.apiUrl()}/bee/load/test`;

    const dados = {
      endpoint: this.form.host.split('com').pop(),
    };

    // console.log(JSON.stringify(dados));

    return this.http.post(url, dados);
  }

  clean(days: number): any {
    const ambienteService = new AmbienteService(this.http);
    console.log('this.ambienteService.apiUrl()', ambienteService.apiUrl());

    const url = `${ambienteService.apiUrl()}/bee/clean`;

    const dados = {
      days,
    };

    // console.log(JSON.stringify(dados));

    return this.http.post(url, dados);
  }

  setLoad(item: any): void {
    this.load = item;
  }
}
