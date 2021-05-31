#language: pt
Funcionalidade: Serviços

    Contexto: Área Serviços
        Dado que esteja na area Serviços
        Então deve apresentar acesso para três galerias

        Esquema do Cenário: validar elementos da galeria "<galeria>"
            Quando acessar a <ordemGaleria>
            Então deve exibir título "<galeria>" em destaque
            E deve exibir galeria de imagens
            E deve exibir <quantidadeImagens> imagens

            Exemplos:
            | ordemGaleria | galeria   | quantidadeImagens |
            | 1            | Estúdio   | 13                |
            | 2            | Exposição | 17                |
            | 3            | Evento    | 7                 |
