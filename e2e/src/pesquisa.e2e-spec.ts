import { browser, logging, element, by, ElementFinder } from 'protractor';
import { PesquisaPage } from './pesquisa.po';

describe('Componente de pesquisa', () => {
    let pesquisaPage: PesquisaPage;

    beforeAll(() => {
        pesquisaPage = new PesquisaPage();
    });

    it('E deve navegar para o componente de pesquisa de clientes', () => {
        const pesquisaClienteButton: ElementFinder = element(by.cssContainingText('span.p-button-label', 'Pesquisa de clientes'));

        expect(pesquisaClienteButton.isPresent()).toBeTruthy();

        pesquisaClienteButton.click();
        browser.waitForAngular();

        expect(pesquisaPage.getTitleText()).toEqual('Você está na Pesquisa de Clientes');
    });

    it('E deve possibilitar a pesquisa de clientes', async () => {
        const formElement: ElementFinder = element(by.id('form'));
        const inputNome: ElementFinder = element(by.id('nome'));
        const pesquisaButton: ElementFinder = element(by.cssContainingText('span.p-button-label', 'Pesquisar'));

        expect(formElement.isPresent()).toBeTruthy();
        expect(inputNome.isPresent()).toBeTruthy();
        expect(pesquisaButton.isPresent()).toBeTruthy();

        inputNome.sendKeys('Maria');
        pesquisaButton.click();

        await browser.waitForAngular();

        const tableResultador: ElementFinder = element.all(by.css('.p-datatable-wrapper table tbody td')).first();
        expect(tableResultador.isDisplayed()).toBeTruthy();
    });

    // afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(jasmine.objectContaining({
    //   level: logging.Level.SEVERE,
    // } as logging.Entry));
    // });
});
