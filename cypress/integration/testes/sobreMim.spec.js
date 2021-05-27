/// <reference types="cypress" />

context('Página "Sobre mim"', () => {
    beforeEach(() => {
        cy.visit('/sobre-mim')
    })

    it('deve exibir fotografia', () => {
        cy.get('.sc-bxivhb').should('be.visible');
    })

    it('deve exibir título de apresentação', () => {
        cy.get('h2').should('contain', 'Oi! Eu sou Filipe');
    })
})