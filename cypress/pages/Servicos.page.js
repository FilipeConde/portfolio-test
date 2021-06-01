
const GALERIAS = '.strip-gallery-item';
const AREA_DE_IMAGENS = '.thing-grid';
const IMAGENS = '.sc-bxivhb';

export class Servicos {
    static acessa_rota() {
        cy.visit('/servicos')
    }

    static acessa_galeria(ordemGaleria) {
        //const galeria = `.strip-gallery-item:nth-of-type(${ordemGaleria})`;
        return cy.get(GALERIAS + `:nth-of-type(${ordemGaleria})`).click();
    }

    static get_galerias() {
        return cy.get(GALERIAS);
    }

    static valida_qtd_galerias(qtd) {
        this.get_galerias()
            .should('have.length', qtd);
    }

    static get_titulo_galeria() {
        return cy.get('.border');
    }

    static valida_titulo_galeria(titulo) {
        this.get_titulo_galeria()
            .should('be.visible')
            .and('have.text', titulo);
    }

    static area_de_imagens_is_visible() {
        cy.get(AREA_DE_IMAGENS).should('be.visible');
    }

    static imagens_qtd_visivel(quantidade) {
        cy.scrollTo('bottom').get(IMAGENS).should('be.visible').and('have.length', quantidade);

    }
}