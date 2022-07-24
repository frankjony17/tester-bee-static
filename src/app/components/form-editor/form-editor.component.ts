import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'fks-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss'],
})
export class FormEditorComponent implements OnInit {
  editorOptions: JsonEditorOptions;
  data: any;
  @ViewChild(JsonEditorComponent, { static: false })
  editor: JsonEditorComponent;

  constructor() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];

    this.data = {
      products: [
        {
          name: 'car',
          product: [
            {
              name: 'honda',
              model: [
                { id: 'civic', name: 'civic' },
                { id: 'accord', name: 'accord' },
                { id: 'crv', name: 'crv' },
                { id: 'pilot', name: 'pilot' },
                { id: 'odyssey', name: 'odyssey' },
              ],
            },
          ],
        },
      ],
    };
  }

  getData(e: any): void {}

  ngOnInit(): void {}
}
