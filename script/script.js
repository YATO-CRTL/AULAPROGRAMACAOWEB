// script/script.js

const app = document.getElementById("app");

// Templates das páginas
const templates = {
  index: `
    <section class="hero">
      <div class="hero-inner">
        <h1>Adote um Herói</h1>
        <p class="tagline">Transforme a vida de um animal e ganhe um amigo fiel 🐶💜</p>
        <div class="cta">
          <a href="#" data-page="cadastro" class="btn primary">Quero Ajudar</a>
          <a href="#" data-page="projetos" class="btn">Conhecer Projetos</a>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="about-container">
        <h2>Quem Somos</h2>
        <p>
          Somos uma ONG dedicada ao resgate, cuidado e adoção de animais em situação de vulnerabilidade.
          Nosso objetivo é oferecer uma nova chance para os peludinhos encontrarem um lar cheio de amor e carinho 💜
          <br>
          Acreditamos que cada animal é um herói, lutando todos os dias por afeto, cuidado e uma segunda oportunidade.
        </p>
        <ul>
          <li>🐕 Resgate de animais abandonados</li>
          <li>🍖 Campanhas de alimentação solidária</li>
          <li>🏡 Feiras de adoção responsável</li>
        </ul>
      </div>
    </section>

    <section class="container">
      <h2>Animais para Adoção</h2>
      <div class="cards-grid">
        <div class="card">
          <img src="./imagens/aslan.JPG" alt="Cachorro">
          <div class="card-body">
            <h3>Aslan</h3>
            <p>Um golden cheio de energia e amor pra dar. Adora brincar e está pronto para encontrar um lar feliz. 🐾</p>
            <a href="#" data-page="cadastro" class="btn primary">Quero Adotar</a>
          </div>
        </div>
        <div class="card">
          <img src="./imagens/bel.jpeg" alt="gatinha">
          <div class="card-body">
            <h3>bel</h3>
            <p>Meiga e carinhosa, Luna é uma gatinha calma que ama um colinho e longas sonecas no sol 🌞💜</p>
            <a href="#" data-page="cadastro" class="btn primary">Quero Adotar</a>
          </div>
        </div>
        <div class="card">
          <img src="./imagens/caramelo.jpg" alt="Cachorrinho">
          <div class="card-body">
            <h3>Max</h3>
            <p>Pequeno no tamanho, mas gigante no coração. Max adora correr e brincar com outros pets 🐕✨</p>
            <a href="#" data-page="cadastro" class="btn primary">Quero Adotar</a>
          </div>
        </div>
        <div class="card">
          <img src="./imagens/mia.jpg" alt="gatinha">
          <div class="card-body">
            <h3>Mia</h3>
            <p>Curiosa e divertida, Mia é uma companheira fiel que vai encher sua casa de alegria e ronronados 😺💖</p>
            <a href="#" data-page="cadastro" class="btn primary">Quero Adotar</a>
          </div>
        </div>
      </div>
    </section>
  `,

  projetos: `
    <section class="hero" style="background-image: linear-gradient(rgba(10,0,25,0.7), rgba(10,0,25,0.9)), url(./imagens/capa.projeto.jpg); background-size:cover;">
      <div class="hero-inner">
        <h1>Nossos Projetos</h1>
        <p class="tagline">Amor, cuidado e esperança para cada vida de quatro patas. 💜</p>
        <div class="cta">
          <a href="#" data-page="index" class="btn">Voltar ao Início</a>
          <a href="#" data-page="cadastro" class="btn primary">Quero Participar</a>
        </div>
      </div>
    </section>

    <section class="container">
      <h2>Projetos Comunitários</h2>
      <p style="text-align:center;color:var(--subtext);max-width:800px;margin:0 auto;">
        A ONG <strong>Adote um Herói</strong> realiza diversas ações que levam cuidado, carinho e alimentação para animais em situação de rua.
        Cada gesto é um passo para um mundo com mais amor e compaixão. 💜
      </p>

      <div class="cards-grid">
        <div class="card">
          <img src="./imagens/raçao.solidaria.jpg" alt="Voluntários alimentando cães">
          <div class="card-body">
            <h3>Alimentação Solidária</h3>
            <p>Toda semana, voluntários levam ração e água para cães e gatos em praças e bairros carentes. Um gesto simples que transforma vidas. 🐕</p>
          </div>
        </div>
        <div class="card">
          <img src="./imagens/cuidado.solidario.jpg" alt="Mutirão de banho e tosa">
          <div class="card-body">
            <h3>Mutirão de Cuidados</h3>
            <p>Organizamos eventos com banho, tosa e atendimento veterinário gratuito, trazendo dignidade e conforto para os peludinhos 💧🐾</p>
          </div>
        </div>
        <div class="card">
          <img src="./imagens/feira.de.adoção.jpg" alt="Adoção responsável">
          <div class="card-body">
            <h3>Feiras de Adoção</h3>
            <p>Realizamos feiras de adoção responsáveis, com acompanhamento e orientação sobre cuidados com os novos heróis 🏡💜</p>
          </div>
        </div>
        <div class="card">
          <img src="./imagens/rações.jpg" alt="Doação de ração">
          <div class="card-body">
            <h3>Campanhas de Doação</h3>
            <p>Recebemos e distribuímos doações de ração e medicamentos para famílias que acolhem animais em situação de vulnerabilidade 🦴💖</p>
          </div>
        </div>
      </div>
    </section>
  `,

  cadastro: `
    <section class="container">
      <h2>Formulário de Cadastro</h2>
      <p style="text-align:center;color:var(--subtext);">Preencha o formulário abaixo para se cadastrar como voluntário ou adotante 💜</p>

      <form class="form" id="cadastroForm">
        <label for="nome">Nome completo</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required>
        <label for="cpf">CPF</label>
        <input type="text" id="cpf" name="cpf" placeholder="Ex: 123.456.789-00" required>
        <label for="nascimento">Data de nascimento</label>
        <input type="date" id="nascimento" name="nascimento" required>
        <label for="telefone">Número de telefone</label>
        <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required>
        <h3 style="color:var(--roxo);margin-top:1rem;">Endereço</h3>
        <label for="rua">Rua</label>
        <input type="text" id="rua" name="rua" placeholder="Ex: Rua das Flores" required>
        <label for="numero">Número</label>
        <input type="text" id="numero" name="numero" placeholder="Ex: 123" required>
        <label for="bairro">Bairro</label>
        <input type="text" id="bairro" name="bairro" placeholder="Ex: Jardim Esperança" required>
        <label for="cidade">Cidade</label>
        <input type="text" id="cidade" name="cidade" placeholder="Ex: São Paulo" required>
        <label for="estado">Estado</label>
        <input type="text" id="estado" name="estado" placeholder="Ex: SP" maxlength="2" required>
        <label for="cep">CEP</label>
        <input type="text" id="cep" name="cep" placeholder="Ex: 00000-000" required>

        <button type="submit" class="btn primary">Enviar Cadastro</button>
      </form>
    </section>
  `
};

// Função para renderizar página
function carregarPagina(pagina) {
  app.innerHTML = templates[pagina] || "<h2>Página não encontrada</h2>";

  // Adicionar listeners nos links internos do template
  app.querySelectorAll("[data-page]").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      const page = el.getAttribute("data-page");
      carregarPagina(page);
      history.pushState({ page }, "", "#" + page);
    });
  });

  // Listener do formulário
  const form = document.getElementById("cadastroForm");
  if(form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Cadastro enviado com sucesso! 💜");
      form.reset();
    });
  }
}

// Navbar funcionando separado
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    carregarPagina(page);
    history.pushState({ page }, "", "#" + page);
  });
});

// Carregar página inicial
const initialPage = location.hash.replace("#", "") || "index";
carregarPagina(initialPage);

// Detecta back/forward
window.addEventListener("popstate", e => {
  const page = e.state?.page || "index";
  carregarPagina(page);
});
  



// Menu hambúrguer

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Alterna o menu ao clicar no hambúrguer
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Fecha o menu ao clicar em algum link
  document.querySelectorAll('nav a[data-page]').forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
