import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl) as Promise<unknown>;
    }

    getTitleText(): Promise<string> {
        return element.all(by.css('fks-app-root fks-layout .cabecalho span')).first().getText() as Promise<string>;
    }
}
