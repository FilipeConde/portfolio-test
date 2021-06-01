/// <reference types="cypress" />
import { Given, When, Then, And, But } from 'cypress-cucumber-preprocessor/steps';
import { SobreMim } from '../../pages/SobreMim.page'

Given('que esteja na area sobre mim', () => {
    SobreMim.acessa_rota();
})

Then(`deve exibir fotografia`, () => {
    SobreMim.valida_retrato();
})

Then(`deve exibir título de apresentação`, () => {
    SobreMim.valida_titulo();
})