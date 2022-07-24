import { browser, by, element } from 'protractor';

export class PesquisaPage {

    getTitleText(): Promise<string> {
        return element.all(by.css('fks-app-root fks-layout .cabecalho span')).first().getText() as Promise<string>;
    }
}
