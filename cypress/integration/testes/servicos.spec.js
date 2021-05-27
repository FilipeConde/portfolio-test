/// <reference types="cypress" />

context('Página "Serviços"', () => {
    before(() => {
        cy.visit('/servicos');
    })

    it('deve apresentar acesso para três galerias', () => {
        cy.get('.strip-gallery-item').should('have.length', 3);
    })

    describe('a primeira deve acessar galeria "Estúdio"', () => {
        it('acessa galeria a galeria', () => {
            cy.visit('/servicos');
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
        //elaborar teste para navegação de imagem na galeria
    })

    describe('a segunda deve acessar galeria "Exposição"', () => {
        it('acessa galeria a galeria', () => {
            cy.visit('/servicos');
            cy.get('.strip-gallery-item:nth-of-type(2)').click();
        })
        it('deve exibir título "Estúdio" em destaque', () => {
            cy.get('.border').should('be.visible').and('have.text', 'Exposição');
        })

        it('deve exibir galeria de imagens', () => {
            cy.get('.thing-grid').should('be.visible');
        })

        it('deve exibir 17 imagens', () => {
            cy.scrollTo('bottom').get('.sc-bxivhb').should('be.visible').and('have.length', 17);
        })
        //elaborar teste para navegação de imagem na galeria
    })

    describe('a terceira deve acessar galeria "Evento"', () => {
        it('acessa galeria a galeria', () => {
            cy.visit('/servicos');
            cy.get('.strip-gallery-item:nth-of-type(3)').click();
        })
        it('deve exibir título "Estúdio" em destaque', () => {
            cy.get('.border').should('be.visible').and('have.text', 'Evento');
        })

        it('deve exibir galeria de imagens', () => {
            cy.get('.thing-grid').should('be.visible');
        })

        it('deve exibir 7 imagens', () => {
            cy.scrollTo('bottom').get('.sc-bxivhb').should('be.visible').and('have.length', 7);
        })
        //elaborar teste para navegação de imagem na galeria
    })


})