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

    </body>
  )
}
