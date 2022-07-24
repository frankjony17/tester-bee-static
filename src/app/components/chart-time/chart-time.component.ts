import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/services/form.service';
import { MessageService } from 'primeng/api';
import { ChartService } from 'src/app/shared/services/chart.service';

@Component({
  selector: 'fks-chart-time',
  templateUrl: './chart-time.component.html',
  styleUrls: ['./chart-time.component.scss'],
})
export class ChartTimeComponent implements OnInit {
  constructor(public chartService: ChartService) {}

  ngOnInit(): void {}

  selectData(event: any): void {
    console.log(event);
  }
}
