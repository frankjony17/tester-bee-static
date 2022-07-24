import { AppPage } from './app.po';
import { browser, logging, element, by, ElementFinder } from 'protractor';

// Este é um arquivo de teste e2e.
// Testes e2e é uma maneira de testar se o fluxo de uma applicação
// está acontecendo conforme esperado.

describe('Página inicial', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('O component arh-layout deve estar presente.', () => {
        page.navigateTo();

        browser.waitForAngular();

        expect(element(by.css('arh-app-root arh-layout')).isPresent()).toBeTruthy();
    });

    it('E deve mostrar um título.', () => {
        expect(page.getTitleText()).toEqual('Você está na Página Inicial');
    });

    it('E deve conter a logotipo do FK', () => {
        expect(element(by.css('arh-layout .cabecalho .logo-fk')).isPresent()).toBeTruthy();
    });

    it('E deve conter informações sobre o app', () => {
        const novoComponentButton: ElementFinder = element(by.cssContainingText('span.p-button-label', 'Novo Componente'));
        const adicionarDep: ElementFinder = element(by.cssContainingText('span.p-button-label', 'Adicionar Dependência'));
        const rodarTestes: ElementFinder = element(by.cssContainingText('span.p-button-label', 'Rodar e observar testes'));
        const build: ElementFinder = element(by.cssContainingText('span.p-button-label', 'Construir para produção'));
        const terminal: ElementFinder = element(by.css('.terminal'));

        expect(novoComponentButton.isPresent()).toBeTruthy();
        expect(adicionarDep.isPresent()).toBeTruthy();
        expect(rodarTestes.isPresent()).toBeTruthy();
        expect(build.isPresent()).toBeTruthy();
        expect(terminal.isPresent()).toBeTruthy();

        novoComponentButton.click();
        expect(terminal.getText()).toContain('ng generate component xyz --project bar');

        adicionarDep.click();
        expect(terminal.getText()).toContain('ng add _____');

        rodarTestes.click();
        expect(terminal.getText()).toContain('npm test');

        build.click();
        expect(terminal.getText()).toContain('npm run build');
    });

    // afterEach(async () => {
        // Assert that there are no errors emitted from the browser
    //    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    //    expect(logs).not.toContain(jasmine.objectContaining({level: logging.Level.SEVERE,} as logging.Entry));
    // });
});
