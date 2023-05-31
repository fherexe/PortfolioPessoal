//--------------------------Hamburger Menu--------------------------

const menuHamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

menuHamburger.addEventListener('click', () =>{
  menu.classList.toggle('active');
  menuHamburger.classList.toggle('active');
  
  //toggle vai definir que quando clicar vai fazer a ação e quando clicar novamente vai desfazer
} ); //atribuir ação a uma função 


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
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("voltarTopo").style.display = "block";
  } else {
    document.getElementById("voltarTopo").style.display = "none";
  }
}

function voltarAoTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}