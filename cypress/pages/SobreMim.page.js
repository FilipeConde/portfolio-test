const RETRATO = '.sc-bxivhb';
const TITULO = 'h2';

export class SobreMim {
    static acessa_rota() {
        cy.visit('/sobre-mim')
    }

    static valida_retrato() {
        cy.get(RETRATO).should('be.visible');
    }

    static valida_titulo() {
        cy.get(TITULO).should('contain', 'Oi! Eu sou Filipe');
    }
}