/// <reference types="cypress" />
import { Given, When, Then, And, But } from 'cypress-cucumber-preprocessor/steps';
import { SobreMim } from '../../pages/SobreMim.page'

Given('que esteja na area sobre mim', () => {
    SobreMim.acessa_rota();
})

Then(`deve exibir fotografia`, () => {
    SobreMim.get_retrato().should('be.visible');
})

Then(`deve exibir título de apresentação`, () => {
    SobreMim.get_titulo().should('contain', 'Oi! Eu sou Filipe');
})