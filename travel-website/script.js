let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');



window.onscroll = () =>{
  loginForm.classList.remove('active');
}
formBtn.addEventListener('click', () =>{
  loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
  loginForm.classList.remove('active');
});


function validemail() {
  let email = document.getElementById("email").value
  let erroremail = document.getElementById("erroremail")

  if (email.endsWith('gmail')) {
      erroremail.innerHTML = ""
  } else {
      erroremail.innerHTML = "please enter gmail.com";
      erroremail.style.color = 'red';
  }
}

function validpassword() {
  let password = document.getElementById("password").value;
  let errorpassword = document.getElementById("errorpassword");

  if (password.length < 3) {
      errorpassword.innerHTML = "please enter strong password"
      errorpassword.style.color = 'red';
  } else {

      errorpassword.innerHTML = ""
  }
}


function getFormvalue() {

  //sessionStorage.setItem('email',r_email.value)
  //sessionStorage.setItem('password',r_password.value)


  let r_email = document.getElementById("email");
  let r_password = document.getElementById("password");

  localStorage.setItem('email', r_email.value);
  localStorage.setItem('password', r_password.value);



  if(email.value == "" || password.value == ""){
      alert('please filled all inputes')
  }
  document.write(`
          {Email:${r_email.value}<br>
          Password:${r_password.value}}

      `);

};





let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-button').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-button').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}



 let login = document.querySelector('#login-btn');
let loginForm =document.querySelector('.login-form');
let formclose = document.querySelector('#form-close');

login.addEventListener('click', () =>{
  loginForm.classList.add('active');
});



window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.heading').classList.add('active');
    }else{
        document.querySelector('.heading').classList.remove('active');
    }
};
window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.heading').classList.add('active');
    }else{
        document.querySelector('.heading').classList.remove('active');
    }
};
const swiper = new Swiper(".home-slider", {
    loop:true, 
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

const swipers = new Swiper(".product-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});
const swiperr = new Swiper(".review-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
    },
});

const swip = new Swiper(".blogs-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
    },
});

const swipe = new Swiper(".clients-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});
