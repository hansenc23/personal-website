$('#navbar a, .btn, .link a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

let showMenu = false;

const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-content');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menuMobile.classList.add('show');
    showMenu = true;
    console.log(showMenu);
  } else {
    menuBtn.classList.remove('close');
    menuMobile.classList.remove('show');
    showMenu = false;
    console.log(showMenu);
  }
}
