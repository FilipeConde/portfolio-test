
const ARTIGO_DESTAQUE = '.big-article-feed-layout-1';
const ARTIGO_SECUNDARIO = '.feed-layout-one-section > :nth-child(';
const CARD_ARTIGO_EXTRA = '.wrapper-list > :nth-child';


export class Channel {
    static acessa_rota() {
        cy.visit('/channel')
    }

    static valida_artigo_destaque() {
        cy.get(ARTIGO_DESTAQUE).should('be.visible');
    }

    static valida_artigos_secundarios(id) {
        for(let i = 1; i <= id; i++) {
            cy.get(ARTIGO_SECUNDARIO + (i + 1) + ')').scrollIntoView().should('be.visible');
        }
    }

    static valida_artigos_extra(id) {
        for(let i = 1; i <= id; i++) {
            cy.get(CARD_ARTIGO_EXTRA + `(${i})`).should('be.visible');
        }
    }
}