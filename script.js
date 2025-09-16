// function for navbar to scroll from one page to another

document.querySelector('.nav--links--part').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('.nav--links--part')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
///////////////////////


   const navLinks = document.querySelectorAll('.nav--links--part[data-page]');

    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault(); 
        const page = link.getAttribute('data-page');
        window.location.href = page;
      });
    });


// when you click the buttons it show the hidden data
document.addEventListener("DOMContentLoaded", () => {
  const btnProjects = document.querySelector(".projects");
  const btnCertificates = document.querySelector(".certificate");
  const btnTechStack = document.querySelector(".tech-stack");

  const projectsSection = document.getElementById("projects-section");
  const certificatesSection = document.getElementById("certificates-section");
  const techStackSection = document.getElementById("techstack-section");

  function hideAll() {
    projectsSection.style.display = "none";
    certificatesSection.style.display = "none";
    techStackSection.style.display = "none";
  }

  btnProjects.addEventListener("click", () => {
    hideAll();
    projectsSection.style.display = "block";
  });

  btnCertificates.addEventListener("click", () => {
    hideAll();
    certificatesSection.style.display = "block";
  });

  btnTechStack.addEventListener("click", () => {
    hideAll();
    techStackSection.style.display = "block";
  });

  hideAll();
  projectsSection.style.display = "block";
});

////////////
// used to show the animation
document.addEventListener("DOMContentLoaded", function () {
  lottie.loadAnimation({
    container: document.querySelector('#animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './animation/Coding (1).json'
  });
});

////////////////

window.addEventListener('DOMContentLoaded', () => {
  const firstBtns = document.querySelectorAll('.first-btn');
  const secondBtns = document.querySelectorAll('.second-btn');
  secondBtns.forEach(btn => {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(50px)';
    btn.style.pointerEvents = 'none';
    btn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    btn.style.boxShadow = 'none';
  });

// remove shadow 
  firstBtns.forEach(btn => {
    btn.style.boxShadow = 'none';
  });

  // After 3 seconds animation will show  buttons and add shadows
  setTimeout(() => {
    firstBtns.forEach(btn => {
      btn.style.boxShadow =
        '0 0 8px #6e578a, 0 0 15px #6c6184, inset 0 0 10px #6b5e83';
    });
    secondBtns.forEach(btn => {
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0)';
      btn.style.pointerEvents = 'auto';

      btn.style.boxShadow =
        '0 0 8px #6e578a, 0 0 15px #6c6184, inset 0 0 10px #6b5e83';

      // Also apply other original styles
      btn.style.width = '200px';
      btn.style.height = '40px';
      btn.style.margin = '30px 5px';
      btn.style.backgroundColor = 'rgb(22, 1, 43)';
      btn.style.color = '#fff';
      btn.style.border = 'none';
      btn.style.fontSize = '1.2rem';
      btn.style.borderRadius = '8px';
      btn.style.cursor = 'pointer';
      btn.style.transition = 'box-shadow 0.5s ease-in-out ,0.3s ease, opacity 0.5s ease, transform 0.5s ease';
    });
  }, 3000);
// 

  secondBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      btn.style.transform = 'translateY(50px)';
      btn.style.opacity = '0';

      setTimeout(() => {
        btn.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        btn.style.transform = 'translateY(0)';
        btn.style.opacity = '1';
      }, 300);
    });
  });
});

// in this part we made a slider 

const slider = () => {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = slide =>
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);

  const createDots = () =>
    slides.forEach((_, i) =>
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
    );

  const activateDot = slide => {
    document.querySelectorAll('.dots__dot').forEach(dot => 
      dot.classList.toggle('dots__dot--active', dot.dataset.slide == slide));
  };

  const nextSlide = () => {
    curSlide = (curSlide + 1) % maxSlide;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = () => {
    curSlide = (curSlide - 1 + maxSlide) % maxSlide;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = () => {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });
  dotContainer.addEventListener('click', e => {
    if (e.target.classList.contains('dots__dot')) {
      const slide = +e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
// const hamburger = document.querySelector('.hamburger');
// const navLinks2 = document.querySelector('.nav--links--part');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });