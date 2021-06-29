import "./splide.min";

let slider;

function mountSlider() {
  const sliderElm = document.querySelector(".question-slider");

  slider = new Splide(sliderElm, {
    gap: 12,
    arrows: false,
    pagination: false,
  }).mount();

  // focus control: only allow focus of active slide
  const focusableItems = sliderElm.querySelectorAll("button, a");

  slider.on("active", (data) => {
    const activeSlide = data.slide;

    // at this point slide still has tabindex=-1 (due to Splide implementation)
    // so we explicitly set here so that we can focus()
    //activeSlide.setAttribute("tabindex", "-1");
    //activeSlide.focus();

    focusableItems.forEach((item) => {
      item.setAttribute("tabindex", "-1");
    });
    activeSlide.querySelectorAll("button, a").forEach((item) => {
      item.setAttribute("tabindex", "0");
    });
  });
}

function forwardSlider() {
  slider.go(slider.index + 1);
}

function toArray(nodelist) {
  const res = [];
  for (let node of nodelist) {
    res.push(node);
  }

  return res;
}

function mountQuestionBox() {
  function mount(box) {
    const answer = box.getAttribute("data-answer");

    const handleAnswerSelect = (event) => {
      const correctOption = box.querySelector(`button[data-value=${answer}]`);
      correctOption.classList.add("button-green");

      const selectedAnswer = event.target.getAttribute("data-value");

      if (selectedAnswer !== answer) {
        event.target.classList.add("button-red");
      }

      setTimeout(() => {
        forwardSlider();
      }, 1000);
    };

    const buttons = toArray(box.querySelectorAll(".option-list-item"));
    buttons.forEach((elm) => elm.addEventListener("click", handleAnswerSelect));
  }

  document.querySelectorAll(".question-box").forEach((elm) => mount(elm));
}

function mountAnswerBox() {
  document.querySelectorAll(".answer-detail button").forEach((elm) =>
    elm.addEventListener("click", () => {
      forwardSlider();
    })
  );
}

function mountSmoothAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

export function mountSectionQuestion() {
  mountSlider();
  mountQuestionBox();
  mountAnswerBox();
  mountSmoothAnchorScroll();
}
