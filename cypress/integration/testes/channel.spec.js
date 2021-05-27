/// <reference types= "cypress" />

context('Channel (blog)', () => {
    before('acessa área do blog', () => {
        cy.visit('/channel')
    })
    it('deve exibir um artigo em destaque', () => {
        cy.get('.big-article-feed-layout-1').should('be.visible');
    })
    
    it('deve exibir dois artigos na seção secundária com pequeno resumo', () => {
        cy.get('.feed-layout-one-section > :nth-child(2)').scrollIntoView().should('be.visible');
        cy.get('.feed-layout-one-section > :nth-child(3)').scrollIntoView().should('be.visible');
    })

    it('deve exibir dois cards para outros artigos', () => {
        cy.get('.wrapper-list > :nth-child(1)').should('be.visible');
        cy.get('.wrapper-list > :nth-child(2)').should('be.visible');
    })
})