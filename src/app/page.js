export default function Home() {
  return (
    <body>
      <header class="cabecalho">
        <div class="container">
            <input type="checkbox" id="menu" class="container__botao"/>
            <label for="menu" class="container__rotulo">
                <span class="cabecalho__menu-hamburguer container__imagem"></span>
            </label>
            <ul class="lista-menu">
                <li class="lista-menu__titulo">Categorias</li>
                <li class="lista-menu__item"><a href="#" class="lista-menu__link">Financiamento</a></li>
                <li class="lista-menu__item"><a href="#" class="lista-menu__link">Seguro-Auto</a></li>
                <li class="lista-menu__item"><a href="#" class="lista-menu__link">Porto Faz</a></li>
                <li class="lista-menu__item"><a href="#" class="lista-menu__link">Consórcio Auto</a></li>
                <li class="lista-menu__item"><a href="#" class="lista-menu__link">Financiamento</a></li>
            </ul>
            <img src="images/Porto.png" alt="Logo da PortoSeguro" class="logo"/>
        </div>

        <ul class="opcoes">
            <input type="checkbox" id="opcoes-menu" class="opcoes__botao"/>
            <label for="opcoes-menu" class="opcoes__rotulo">
                <li class="opcoes__item">Categorias</li>
            </label>
            <ul class="lista-menu">
                <li class="lista-menu__item"><a href="#" class="lista-menu__link">Financiamento</a></li>
                <li class="lista-menu__item"><a href="#" class="lista-menu__link">Seguro-Auto</a></li>
                <li class="lista-menu__item"><a href="#" class="lista-menu__link">Porto Faz</a></li>
                <li class="lista-menu__item"><a href="#" class="lista-menu__link">Consórcio Auto</a></li>
                <li class="lista-menu__item"><a href="#" class="lista-menu__link">Financiamento</a></li>
            </ul>
            <li class="opcoes__item"><a href="#" class="opcoes__link">Home</a></li>
            <li class="opcoes__item"><a href="#" class="opcoes__link">Contato</a></li>
            <li class="opcoes__item"><a href="#" class="opcoes__link">Integrantes</a></li>
        </ul>

        <div class="container">
            <a href="#" class="container__link"><img src="/images/Usuario.svg" alt="Meu Perfil" class="container__imagem" /><p class="container__texto">Meu Perfil</p></a>
        </div>
    </header>


    <section class="banner">
        <h2 class="banner__titulo">Já sabe por onde começar?</h2>
        <p class="banner__texto">Encontre o que precisa para seu seguro!</p>
        <input type="search" class="banner__pesquisa" placeholder="Qual sua pesquisa?"/>
    </section>


    <section class="secao">
        <img src="/images/Porto.png" alt="PortoSeguro" class="porto__chatbot"/>
        <div class="secao__container">
            <div class="card">
                <div class="card__descricao">
                    <div class="descricao">
                        <h3 class="descricao__titulo">Utilize nosso chatbot para resolver
                            seu problema relacionado
                            a guincho da forma mais
                            rapida e eficaz possível!</h3>
                    </div>
                </div>
                <div class="card__botoes">
                    <a href="#" class="botoes__ancora">ChatBot!</a>
                </div>
            </div>
        </div>
    </section>

    <section class="secao">
        <div class="secao__container">
            <div class="card">
                <div class="card__descricao">
                    <div class="descricao">
                        <h2 class="resposta__bot"><img src="/images/Palm angels.svg"/>Olá, como posso ajudar?</h2>
                        <h2 class="resposta__usuario">Preciso de um guincho<img src="/images/Palm angels.svg"/></h2>
                        <h2 class="resposta__bot"><img src="/images/Palm angels.svg"/>Qual a situação do veículo?</h2>
                        <h2 class="resposta__usuario">Grave<img src="/images/Palm angels.svg"/></h2>
                        <h2 class="resposta__bot"><img src="/images/Palm angels.svg"/>Alguma dessas opções ocorreu?</h2>
                    </div>
                </div>
                <div class="card__botoes">
                    <a href="#" class="botoes__chatbot">Tombou</a>
                    <a href="#" class="botoes__chatbot">Bateu</a>
                    <a href="#" class="botoes__chatbot">Nenhuma das opções</a>
                </div>
            </div>
        </div>
    </section>


    <section class="topicos">
        <h2 class="topicos__titulo">TÓPICOS VISITADOS RECENTEMENTE</h2>
        <ul class="topicos__lista">
            <li class="topicos__item"><a href="#" class="topicos__link">Soluções Para Seu Veículo</a></li>
            <li class="topicos__item"><a href="#" class="topicos__link">Financiamento</a></li>
            <li class="topicos__item"><a href="#" class="topicos__link">Cartão de Crédito</a></li>
            <li class="topicos__item"><a href="#" class="topicos__link">Seguros</a></li>
            <li class="topicos__item"><a href="#" class="topicos__link">Veículos</a></li>
            <li class="topicos__item"><a href="#" class="topicos__link">Reparos</a></li>
            <li class="topicos__item"><a href="#" class="topicos__link">Assinatura</a></li>
        </ul>
    </section>


    <section class="contato">
        <div class="contato__descricao">
            <h2 class="contato__titulo">Fique por dentro das novidades!</h2>
            <p class="contato__texto">Atualizações de seguros, serviços e muito mais.</p>
        </div>
        <input type="email" placeholder="Cadastre seu e-mail" class="contato__email"/>
    </section>


    <hr/>
    <h2 class="rodape__titulo">Grupo Pamv</h2>
    <footer class="rodape">
        <div class="card__integrantes">
            <div class="card__descricao-integrantes">
                <div class="descricao__integrantes">
                    <h3 class="descricao__nome">Breno Giacoppini Câmara</h3>
                    <h2 class="descricao__rm">Procurar RM</h2>
                    <p class="descricao__funcao">Python</p>
                </div>
                <img src="/images/BrenoGiacoppini.jpg" alt="Breno Giacoppini Câmara" class="img__integrantes"/>
            </div>
            <div class="card__botoes-integrantes">
                <a href="#" class="botoes__ancora-integrantes">Saiba Mais</a>
            </div>
        </div>

        <div class="card__integrantes">
            <div class="card__descricao-integrantes">
                <div class="descricao__integrantes">
                    <h3 class="descricao__nome">Felipe Batista Gregório</h3>
                    <h2 class="descricao__rm">RM99985</h2>
                    <p class="descricao__funcao">DataBase & UX</p>
                </div>
                <img src="/images/FelipeBatista.jpg" alt="Felipe Batista Gregório" class="img__integrantes"/>
            </div>
            <div class="card__botoes-integrantes">
                <a href="#" class="botoes__ancora-integrantes">Saiba Mais</a>
            </div>
        </div>

        <div class="card__integrantes">
            <div class="card__descricao-integrantes">
                <div class="descricao__integrantes">
                    <h3 class="descricao__nome">Matheus Oliveira Macedo</h3>
                    <h2 class="descricao__rm">RM551155</h2>
                    <p class="descricao__funcao">Front-End</p>
                </div>
                <img src="/images/MatheusOliveira.jpg" alt="Matheus Oliveira Macedo" class="img__integrantes"/>
            </div>
            <div class="card__botoes-integrantes">
                <a href="#" class="botoes__ancora-integrantes">Saiba Mais</a>
            </div>
        </div>

        <div class="card__integrantes">
            <div class="card__descricao-integrantes">
                <div class="descricao__integrantes">
                    <h3 class="descricao__nome">Victor Freitas Silva</h3>
                    <h2 class="descricao__rm">RM99982</h2>
                    <p class="descricao__funcao">Java</p>
                </div>
                <img src="/images/VictorFreitas.jpg" alt="Victor Freitas Silva" class="img__integrantes"/>
            </div>
            <div class="card__botoes-integrantes">
                <a href="#" class="botoes__ancora-integrantes">Saiba Mais</a>
            </div>
        </div>
    </footer>
    </body>
  )
}
