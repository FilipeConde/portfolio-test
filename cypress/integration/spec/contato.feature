#language: pt
Funcionalidade: Contato

    Contexto: Área Contato
        Dado que esteja na area Contato

        Esquema do Cenário: enviar formulário sem preencher "<situação>"
            Quando enviar formulário sem preencher "<situação>"
            Então deve informar obrigatoriedade no campo com locator "<locator>"

            Exemplos:
            | nomeCampo | locator           |
            | nome      | .t-text.error     |
            | email     | .t-mail.error     |
            | mensagem  | .t-textarea.error |
