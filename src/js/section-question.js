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
  const nextButtons = sliderElm.querySelectorAll(".button-next-quetion");
  const optionItems = sliderElm.querySelectorAll(".option-list-item");

  slider.on("active", (data) => {
    const activeSlide = data.slide;

    nextButtons.forEach((button) => {
      button.setAttribute("tabindex", "-1");
    });

    const nextBtn = activeSlide.querySelector(".button-next-quetion");
    if (nextBtn) {
      nextBtn.setAttribute("tabindex", "0");
    }

    optionItems.forEach((item) => {
      item.setAttribute("tabindex", "-1");
    });
    activeSlide.querySelectorAll(".option-list-item").forEach((item) => {
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

export function mountSectionQuestion() {
  mountSlider();
  mountQuestionBox();
  mountAnswerBox();
}
