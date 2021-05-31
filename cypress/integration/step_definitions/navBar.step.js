/// <reference types="cypress" />
import { Given, When, Then, And, But } from 'cypress-cucumber-preprocessor/steps';
import { NavBar } from '../../pages/NavBar.page'

Given('que esteja na página inicial', () => {
    cy.visit('/')
})

When(`clicar no link {string} da barra de navegação`, area => {
    NavBar.clicar_link(area);
})

Then(`deve acessar a url contendo {string}`, rota => {
    NavBar.validar_rota(rota);
})