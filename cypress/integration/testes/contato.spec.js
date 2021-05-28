/// <reference types="cypress" />

const nomeText = 'teste';
const email = 'teste@qa.com.br';
const mensagem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at enim ultrices sapien fringilla pretium. Donec facilisis placerat nisl vitae tempor.';

context('Contato (envio de mensagem)', () => {
    before('acessa área de contato', () => {
        cy.visit('/contato');
    })

    describe('enviar vazio', () => {
        before('enviar', () => {
            cy.contains('Enviar').click();
        })

        it('deve exibir mensagem de campo obrigatório para o nome', () => {
            cy.get('.t-text > .field > .wf > .error-msg').should('be.visible');
        })

        it('deve exibir mensagem de campo obrigatório para o email', () => {
            cy.get('.t-mail > .field > .wf > .error-msg').should('be.visible');
        })

        it('deve exibir mensagem de campo obrigatório para a mensagem', () => {
            cy.get('.t-textarea > .field > .wf > .error-msg').should('be.visible');
        })
    })
    
    describe.only('enviar faltando nome', (email, mensagem) => {
        before('preencher email e mensagem e enviar', () => {
            cy.contains('Enviar').click();
        })

        it('deve exibir mensagem de campo obrigatório para o nome', () => {
            cy.get('.t-text > .field > .wf > .error-msg').should('be.visible');
        })

        it('deve exibir mensagem de campo obrigatório para o email', () => {
            cy.get('.t-mail > .field > .wf > .error-msg').should('be.visible');
        })

        it('deve exibir mensagem de campo obrigatório para a mensagem', () => {
            cy.get('.t-textarea > .field > .wf > .error-msg').should('be.visible');
        })
    })

})