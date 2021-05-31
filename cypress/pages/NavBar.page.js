
export class NavBar {
    static clicar_link(opcao) {
        cy.contains(opcao).click();
        
    }

    static validar_rota(rota) {
        cy.url().should('contain', rota);
    }
}