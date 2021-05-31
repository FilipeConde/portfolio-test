/// <reference types="cypress" />
import { Given, When, Then, And, But } from 'cypress-cucumber-preprocessor/steps';

Given('que esteja na página inicial', () => {
    cy.visit('/')
})

When(`clicar no link {string} da barra de navegação`, area => {
    cy.contains(area).click();
})

Then(`deve acessar a url contendo {string}`, rota => {
    cy.url().should('contain', rota);
})