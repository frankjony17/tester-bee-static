import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormService } from 'src/app/shared/services/form.service';
import { ChartService } from 'src/app/shared/services/chart.service';

@Component({
  selector: 'fks-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  data: any = {};
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
  count: number;
  endpoint: any[];
  status: any[];
  logs: any[];
  chartError: any;
  chartRequest: any;
  labelsTime: any[] = [];
  labelsSecond: any[] = [];

  constructor(
    private formService: FormService,
    private chartService: ChartService,
    private messageService: MessageService
  ) {
    this.labelsTime = [];
    this.chartRequest = {
      labels: [],
      datasets: [
        {
          label: '1xx',
          data: [],
          fill: false,
          borderColor: '#fff',
        },
        {
          label: '2xx',
          data: [],
          fill: false,
          borderColor: '#fff',
        },
        {
          label: '3xx',
          data: [],
          fill: false,
          borderColor: '#fff',
        },
        {
          label: '4xx',
          data: [],
          fill: false,
          borderColor: '#fff',
        },
        {
          label: '5xx',
          data: [],
          fill: false,
          borderColor: '#fff',
        },
      ],
    };

    this.chartService.setSecond(this.chartRequest);
    this.chartService.setTime(this.chartRequest);
    this.logs = [];

    for (
      let i = 0;
      this.formService.load?.request_count
        ? this.formService.load?.request_count <
          this.formService.form.numberRequests
        : i < this.formService.form.numberRequests;
      i++
    ) {
      this.loadTest(i);
      console.log(JSON.stringify(this.formService.load?.request_count));
    }
  }

  loadTest(i: number): void {
    setTimeout((): void => {
      this.formService.loadTest().subscribe(
        (data: any) => {
          // this.logsEmitter.next(this.logs);

          console.log(JSON.stringify(data));
          if (data.request_count === 0 || data.request_count !== this.count) {
            this.logs = [...data.table, ...this.logs];

            this.count = data.request_count;
            this.labelsTime.push(data.date_time.substring(11, 20));

            this.time.dataRequest1.push(
              this.time.dataRequest1.length
                ? data?.response_time_ms['1xx'] -
                    this.formService.load?.response_time_ms['1xx']
                : data?.response_time_ms['1xx']
            );

            this.time.dataRequest2.push(
              this.time.dataRequest2.length
                ? data?.response_time_ms['2xx'] -
                    this.formService.load?.response_time_ms['2xx']
                : data?.response_time_ms['2xx']
            );

            this.time.dataRequest3.push(
              this.time.dataRequest3.length
                ? data?.response_time_ms['3xx'] -
                    this.formService.load?.response_time_ms['3xx']
                : data?.response_time_ms['3xx']
            );

            this.time.dataRequest4.push(
              this.time.dataRequest4.length
                ? data?.response_time_ms['4xx'] -
                    this.formService.load?.response_time_ms['4xx']
                : data?.response_time_ms['4xx']
            );

            this.time.dataRequest5.push(
              this.time.dataRequest5.length
                ? data?.response_time_ms['5xx'] -
                    this.formService.load?.response_time_ms['5xx']
                : data?.response_time_ms['5xx']
            );

            this.labelsSecond.push(data.date_time.substring(11, 20));

            this.second.dataRequest1.push(
              this.second.dataRequest1.length
                ? data?.request_by_second['1xx'] -
                    this.formService.load?.request_by_second['1xx']
                : data?.request_by_second['1xx']
            );

            this.second.dataRequest2.push(
              this.second.dataRequest2.length
                ? data?.request_by_second['2xx'] -
                    this.formService.load?.request_by_second['2xx']
                : data?.request_by_second['2xx']
            );

            this.second.dataRequest3.push(
              this.second.dataRequest3.length
                ? data?.request_by_second['3xx'] -
                    this.formService.load?.request_by_second['3xx']
                : data?.request_by_second['3xx']
            );

            this.second.dataRequest4.push(
              this.second.dataRequest4.length
                ? data?.request_by_second['4xx'] -
                    this.formService.load?.request_by_second['4xx']
                : data?.request_by_second['4xx']
            );

            this.second.dataRequest5.push(
              this.second.dataRequest5.length
                ? data?.request_by_second['5xx'] -
                    this.formService.load?.request_by_second['5xx']
                : data?.request_by_second['5xx']
            );

            this.formService.setLoad(data);
            this.chartService.setSecond({
              labels: this.labelsSecond,
              datasets: [
                {
                  label: '1xx',
                  data: this.second.dataRequest1,
                  fill: false,
                  borderColor: '#FFEB3B',
                },
                {
                  label: '2xx',
                  data: this.second.dataRequest2,
                  fill: false,
                  borderColor: '#4CAF50',
                },
                {
                  label: '3xx',
                  data: this.second.dataRequest3,
                  fill: false,
                  borderColor: '#4bc0c0',
                },
                {
                  label: '4xx',
                  data: this.second.dataRequest4,
                  fill: false,
                  borderColor: '#FF9800',
                },
                {
                  label: '5xx',
                  data: this.second.dataRequest5,
                  fill: false,
                  borderColor: '#FF6384',
                },
              ],
            });
            this.chartService.setTime({
              labels: this.labelsTime,
              datasets: [
                {
                  label: '1xx',
                  data: this.time.dataRequest1,
                  fill: false,
                  borderColor: '#FFEB3B',
                },
                {
                  label: '2xx',
                  data: this.time.dataRequest2,
                  fill: false,
                  borderColor: '#4CAF50',
                },
                {
                  label: '3xx',
                  data: this.time.dataRequest3,
                  fill: false,
                  borderColor: '#4bc0c0',
                },
                {
                  label: '4xx',
                  data: this.time.dataRequest4,
                  fill: false,
                  borderColor: '#FF9800',
                },
                {
                  label: '5xx',
                  data: this.time.dataRequest5,
                  fill: false,
                  borderColor: '#FF6384',
                },
              ],
            });
          }
        },
        (error: any) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Atenção',
            detail: 'Erro ao buscar dados!',
          });

          console.log(error);
        }
      );
    }, this.formService.form.timeBetweenRequests * 1000 * (i + 1));
  }

  ngOnInit(): void {}
}
