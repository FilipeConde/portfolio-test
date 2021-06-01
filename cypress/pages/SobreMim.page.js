const retrato = '.sc-bxivhb';
const titulo = 'h2';

export class SobreMim {
    static acessa_rota() {
        cy.visit('/sobre-mim')
    }

    static get_retrato() {
        return cy.get(retrato);
    }

    static get_titulo() {
        return cy.get(titulo);
    }
}