
const artigoDestaque = '.big-article-feed-layout-1';
const artigoSecundarioUm = '.feed-layout-one-section > :nth-child(2)';
const artigoSecundarioDois = '.feed-layout-one-section > :nth-child(3)';
const cardArtigoExtraUm = '.wrapper-list > :nth-child(1)';
const cardArtigoExtraDois = '.wrapper-list > :nth-child(2)';


export class Channel {
    static acessa_rota() {
        cy.visit('/channel')
    }

    static get_artigo_destaque() {
        return cy.get(artigoDestaque);
    }

    static get_artigo_secundario_um() {
        return cy.get(artigoSecundarioUm);
    }
    
    static get_artigo_secundario_dois() {
        return cy.get(artigoSecundarioDois);
    }

    static get_artigo_extra_um() {
        return cy.get(cardArtigoExtraUm);
    }

    static get_artigo_extra_dois() {
        return cy.get(cardArtigoExtraDois);
    }
}