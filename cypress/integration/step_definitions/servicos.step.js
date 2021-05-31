/// <reference types="cypress" />
import { Given, When, Then, And, But } from 'cypress-cucumber-preprocessor/steps';

Given('que esteja na area Serviços', () => {
    cy.visit('/servicos')
})

When(`acessar a {int}`, ordemGaleria => {
    cy.get(`.strip-gallery-item:nth-of-type(${ordemGaleria})`).click();
})

Then(`deve apresentar acesso para três galerias`, () => {
    cy.get('.strip-gallery-item').should('have.length', 3);
})

Then(`deve exibir título {string} em destaque`, galeria => {
    cy.get('.border').should('be.visible').and('have.text', galeria);
})

Then(`deve exibir galeria de imagens`, () => {
    cy.get('.thing-grid').should('be.visible');
})

Then(`deve exibir {int} imagens`, quantidadeImagens => {
    cy.scrollTo('bottom').get('.sc-bxivhb').should('be.visible').and('have.length', quantidadeImagens);
})