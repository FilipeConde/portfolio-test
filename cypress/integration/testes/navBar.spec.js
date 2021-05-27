/// <reference types="cypress" />

context('Navigarion Bar', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('deve acessar área "sobre mim" ao clicar no link', () => {
        cy.get('.effect6 > :nth-child(1) > .b').click();
        cy.url().should('contain', 'https://www.filipeconde.com.br/sobre-mim/');
    })

    it('deve acessar área "serviços" ao clicar no link', () => {
        cy.get('.effect6 > :nth-child(2) > .b').click();
        cy.url().should('contain', 'https://www.filipeconde.com.br/servicos/');
    })

    it('deve acessar área "channel" ao clicar no link', () => {
        cy.get('.effect6 > :nth-child(3) > .b').click();
        cy.url().should('contain', 'https://www.filipeconde.com.br/channel/');
    })

    it('deve acessar área "contato" ao clicar no link', () => {
        cy.get('.effect6 > :nth-child(4) > .b').click();
        cy.url().should('contain', 'https://www.filipeconde.com.br/contato/');

    })
})
