//search box
const toggle = document.querySelector('.form .icon');
const fromWrapper = document.querySelector('.form');

toggle.addEventListener('click', function(){
    const icon = this.querySelector('.fas');
    this.classList.toggle('active');
    fromWrapper.classList.toggle('active');

    if(this.classList.contains('active')){
        icon.classList.replace('fa-search','fa-times');
    }else{
        icon.classList.replace('fa-times','fa-search');
    }
});



const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
}

function close(){
    mainMenu.style.top = "-150%";
}

//const test = document.querySelector(".sec-content");
//test.style.backgroundImage = "url('images/web.jpg')";


// Initialize Swiper

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });


//sticky-menu
  window.onscroll = function() {sticktMenu()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function sticktMenu() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  

  
  

