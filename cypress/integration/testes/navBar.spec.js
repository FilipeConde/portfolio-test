/// <reference types="cypress" />

context('Navigarion Bar', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('deve acessar área "sobre mim" ao clicar no link', () => {
        cy.get('.effect6 > :nth-child(1) > .b').click();
        cy.url().should('contain', 'https://www.filipeconde.com.br/sobre-mim/');
        cy.get('.sc-bxivhb').should('be.visible');
        cy.get('h2').should('contain', 'Oi! Eu sou Filipe');
    })

    it('deve acessar área "serviços" ao clicar no link', () => {
        cy.get('.effect6 > :nth-child(2) > .b').click();
        cy.url().should('contain', 'https://www.filipeconde.com.br/servicos/');
        cy.get('.strip-gallery-item').should('have.length', 3);
    })

    it('deve acessar área "channel" ao clicar no link', () => {
        cy.get('.effect6 > :nth-child(3) > .b').click();
        cy.url().should('contain', 'https://www.filipeconde.com.br/channel/');
        cy.get('.feed-layout-one-section > :nth-child(1)').should('be.visible');
        cy.get('.feed-layout-one-section > :nth-child(2)').scrollIntoView().should('be.visible');
        cy.get(':nth-child(3) > :nth-child(1) > .medium-article-cover').should('be.visible');
    })

    it('deve acessar área "contato" ao clicar no link', () => {
        cy.get('.effect6 > :nth-child(4) > .b').click();
        cy.url().should('contain', 'https://www.filipeconde.com.br/contato/');

    })
})
