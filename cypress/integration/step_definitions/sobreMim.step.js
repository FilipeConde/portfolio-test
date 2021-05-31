/// <reference types="cypress" />
import { Given, When, Then, And, But } from 'cypress-cucumber-preprocessor/steps';

Given('que esteja na area sobre mim', () => {
    cy.visit('/sobre-mim')
})

Then(`deve exibir fotografia`, () => {
    cy.get('.sc-bxivhb').should('be.visible');
})

Then(`deve exibir título de apresentação`, () => {
    cy.get('h2').should('contain', 'Oi! Eu sou Filipe');
})