/// <reference types="cypress" />
import { Given, When, Then, And, But } from 'cypress-cucumber-preprocessor/steps';
import { Channel } from '../../pages/Channel.page'

Given('que esteja na area channel', () => {
    Channel.acessa_rota();
})

Then(`deve exibir um artigo em destaque`, () => {
    Channel.get_artigo_destaque().should('be.visible');
})

Then(`deve exibir dois artigos na seção secundária com pequeno resumo`, () => {
    Channel.get_artigo_secundario_um().scrollIntoView().should('be.visible');
    Channel.get_artigo_secundario_dois().scrollIntoView().should('be.visible');})

Then(`deve exibir dois cards para outros artigos`, () => {
    Channel.get_artigo_extra_um().should('be.visible');
    Channel.get_artigo_extra_dois().should('be.visible');
})