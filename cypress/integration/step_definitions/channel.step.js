/// <reference types="cypress" />
import { Given, When, Then, And, But } from 'cypress-cucumber-preprocessor/steps';
import { Channel } from '../../pages/Channel.page'

Given('que esteja na area channel', () => {
    Channel.acessa_rota();
})

Then(`deve exibir um artigo em destaque`, () => {
    Channel.valida_artigo_destaque();
})

Then(`deve exibir {int} artigos na seção secundária com pequeno resumo`, (qtd) => {
        Channel.valida_artigos_secundarios(qtd);
})

Then(`deve exibir {int} cards para outros artigos`, (qtd) => {
    Channel.valida_artigos_extra(qtd);
})