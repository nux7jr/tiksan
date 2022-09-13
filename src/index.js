const slider = () => {
  const slides = document.querySelectorAll(".slide");
  for (slide of slides) {
    slide.addEventListener("click", (slide) => {
      clearClass();
      // console.log(slide.target);
      slide.target.classList.add("active");
    });
  }
  function clearClass() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
};
slider();

const popUp = () => {
  const slidesBtns = document.querySelectorAll(".slide__button");
  for (btn of slidesBtns) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const popUp = document.querySelector(".popUp");
      popUp.classList.add("popUp--active");
    });
  }
  const closeBtn = document.querySelector(".popUp__closeButton");
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const popUp = document.querySelector(".popUp");
    popUp.classList.remove("popUp--active");
  });
};
popUp();
