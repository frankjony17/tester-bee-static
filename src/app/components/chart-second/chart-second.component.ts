import { Component, OnInit, Input } from '@angular/core';
import { FormService } from 'src/app/shared/services/form.service';
import { MessageService } from 'primeng/api';
import { ChartService } from 'src/app/shared/services/chart.service';

@Component({
  selector: 'fks-chart-second',
  templateUrl: './chart-second.component.html',
  styleUrls: ['./chart-second.component.scss'],
})
export class ChartSecondComponent implements OnInit {
  constructor(public chartService: ChartService) {}

  ngOnInit(): void {}

  selectData(event: any): void {
    console.log(event);
  }
}
