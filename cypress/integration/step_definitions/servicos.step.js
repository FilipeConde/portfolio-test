/// <reference types="cypress" />
import { Given, When, Then, And, But } from 'cypress-cucumber-preprocessor/steps';
import { Servicos } from '../../pages/Servicos.page'

Given('que esteja na area Serviços', () => {
    Servicos.acessa_rota();
})

When(`acessar a {int}`, ordemGaleria => {
    Servicos.acessa_galeria(ordemGaleria);
})

Then(`deve apresentar acesso para {int} galerias`, qtd => {
    Servicos.valida_qtd_galerias(qtd);
})

Then(`deve exibir título {string} em destaque`, galeria => {
    Servicos.valida_titulo_galeria(galeria);
})

Then(`deve exibir galeria de imagens`, () => {
    Servicos.area_de_imagens_is_visible();
})

Then(`deve exibir {int} imagens`, quantidadeImagens => {
    Servicos.imagens_qtd_visivel(quantidadeImagens);
})