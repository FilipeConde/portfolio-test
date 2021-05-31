#language: pt
Funcionalidade: Barra de navegação

    Contexto: Página inicial
        Dado que esteja na página inicial

        Esquema do Cenário: acessar "<area>"
            Quando clicar no link "<area>" da barra de navegação
            Então deve acessar a url contendo "<rota>"

            Exemplos:
            | area      | rota       |
            | Sobre mim | /sobre-mim |
            | Serviços  | /servicos  |
            | Channel   | /channel   |
            | Contato   | /contato   |
