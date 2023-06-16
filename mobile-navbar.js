class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  // Obtém todas as imagens de slides
const slides = document.querySelectorAll('.slide');

// Variável para controlar o índice do slide atual
let currentSlide = 0;

// Função para mostrar o próximo slide
function showSlide() {
  // Oculta todos os slides
  slides.forEach(slide => slide.classList.remove('active'));

  // Exibe o slide atual
  slides[currentSlide].classList.add('active');
}

// Função para avançar para o próximo slide
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

// Chama a função nextSlide a cada 3 segundos (3000 milissegundos)
setInterval(nextSlide, 3000);

// Exibe o primeiro slide
showSlide();