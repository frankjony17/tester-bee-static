import { Component, OnInit, Injectable } from '@angular/core';
import { FormService } from 'src/app/shared/services/form.service';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fks-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss'],
})
@Injectable()
export class FormTestComponent implements OnInit {
  columns: any[];
  addItem: any;
  type: any[];
  selectedType: { name: string; code: number } = { name: 'POST', code: 1 };
  host = '';
  numberRequests = 1;
  recordResponse = false;
  timeBetweenRequests = 1;

  constructor(
    private formService: FormService,
    private messageService: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.columns = [{ index: 0 }];
    this.type = [
      { name: 'POST', code: 1 },
      { name: 'GET', code: 2 },
    ];
  }

  ngOnInit(): void {
    // this.addItem = this.formService.addItem({});
    // console.log(this.formService.payload);
    this.formService.clean(0).subscribe(
      (data: any) => {
        // console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  addColumn(): void {
    this.columns.push({ index: this.columns.length });
  }

  removeColumn(col: any): void {
    this.formService.payloads.splice(this.columns.indexOf(col));
    this.formService.convertList();
    this.columns.splice(this.columns.indexOf(col), 1);

    // this.columns.splice(-1, 1);
  }

  onSubmit(): void {
    const payload = {
      host: this.host,
      method: this.selectedType.name,
      payload: this.formService.form,
      numberRequests: this.numberRequests,
      recordResponse: this.recordResponse,
      unique_parameters: this.formService.uniqueParameters,
      timeBetweenRequests: this.timeBetweenRequests,
    };

    this.formService.onSubmit(payload).subscribe(
      (data: any) => {
        // this.logsEmitter.next(this.logs);

        // console.log(data);
        // let i = 0;
        // for (i = 0; i < 5; i++) {
        //   setTimeout(() => {
        this.router.navigate(['report']);
        // this.loadTest();
        // }, 9000);
        // }
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
  }
}
