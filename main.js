//--------------------------Hamburger Menu--------------------------

const menuHamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');
const navLinks = document.querySelectorAll('.navLink');

menuHamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuHamburger.classList.toggle('active');
});

content.addEventListener('click', () => {
  if (menuHamburger.classList.contains('active')) {
    menu.classList.remove('active');
    menuHamburger.classList.remove('active');
  }
});

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    if (menuHamburger.classList.contains('active')) {
      menu.classList.remove('active');
      menuHamburger.classList.remove('active');
    }
  });
});


//-------------------- Marque ---------------------
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

//-------------------- Botão voltar ao topo  ---------------------

window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
    document.getElementById("voltarTopo").style.display = "block";
  } else {
    document.getElementById("voltarTopo").style.display = "none";
  }
}

function voltarAoTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//----------------reCAPTCHA------------
