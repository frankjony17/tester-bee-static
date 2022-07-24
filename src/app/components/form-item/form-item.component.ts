import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'fks-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
})
export class FormItemComponent implements OnInit {
  @Input() item: any;
  @Input() index: number;
  @Output() addItem: any = new EventEmitter();

  options: any[];
  key: string;
  value: any;
  selectedOption: { name: string; code: string } = {
    name: 'Padrão',
    code: '',
  };

  payload: any = {};
  uniqueParameters: any = {};

  constructor(private formService: FormService) {
    this.options = [
      { name: 'Padrão', code: '' },
      { name: 'Texto aleatório', code: 'str' },
      { name: 'Número aleatório', code: 'int' },
    ];
    this.key = '';
    // this.name = this.item.name;
  }

  ngOnInit(): void {
    // console.log(this.item);
    // console.log(this.formService.payload);
  }

  handleValue(text: any): void {
    this.payload = {
      index: this.index,
      key: this.key,
      value: this.value,
      option: this.selectedOption.code,
    };
    // this.uniqueParameters['index'] = this.index;

    this.formService.handleItem(this.payload, this.index);
  }

  onPayload(): void {}
}
