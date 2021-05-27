/// <reference types="cypress" />

context('Página "Serviços"', () => {
    beforeEach(() => {
        cy.visit('/servicos');
    })

    it('deve apresentar acesso para três galerias', () => {
        cy.get('.strip-gallery-item').should('have.length', 3);
    })

    describe('a primeira deve acessar galeria "Estúdio"', () => {
        it('acessa galeria a galeria', () => {
            cy.get('.strip-gallery-item:nth-of-type(1)').click();
        })
        it('deve exibir título "Estúdio" em destaque', () => {
            cy.get('.border').should('be.visible').and('have.text', 'Estúdio');
        })

        it('deve exibir galeria de imagens', () => {
            cy.get('.thing-grid').should('be.visible');
        })

        it('deve exibir 13 imagens', () => {
            cy.scrollTo('bottom').get('.sc-bxivhb').should('be.visible').and('have.length', 13);
        })
    })
    //elaborar teste para navegação de imagem na galeria
})