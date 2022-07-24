import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  time: any = {
    dataRequest1: [],
    dataRequest2: [],
    dataRequest3: [],
    dataRequest4: [],
    dataRequest5: [],
  };

  second: any = {
    dataRequest1: [],
    dataRequest2: [],
    dataRequest3: [],
    dataRequest4: [],
    dataRequest5: [],
  };
  constructor() {}

  setTime(data: any): void {
    this.time = data;
  }

  setSecond(data: any): void {
    this.second = data;
  }
}
