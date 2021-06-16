import MicroModal from "micromodal";

document.addEventListener("DOMContentLoaded", function () {
  MicroModal.init();
});

/* ------------ Generic ------------- */

function toArray(nodelist) {
  const res = [];
  for (let node of nodelist) {
    res.push(node);
  }

  return res;
}

/* ------------ Questions ------------- */

let questionSlider = new Splide(document.querySelector(".question-slider"), {
  gap: 12,
  arrows: false,
  pagination: false,
}).mount();

questionSlider.nextItem = () => {
  questionSlider.go(questionSlider.index + 1);
};

function QuestionBox(questionBox) {
  const answer = questionBox.getAttribute("data-answer");

  const handleSelect = (event) => {
    const correctOption = questionBox.querySelector(`input[value=${answer}]`)
      .parentElement;

    correctOption.classList.add("button-green");

    if (event.target.value !== answer) {
      event.target.parentElement.classList.add("button-red");
    }

    setTimeout(() => {
      questionSlider.nextItem();
    }, 200);
  };

  const radios = toArray(questionBox.querySelectorAll("input[type=radio]"));
  radios.forEach((elm) => elm.addEventListener("change", handleSelect));
}

document.querySelectorAll(".question-box").forEach((elm) => QuestionBox(elm));

document.querySelectorAll(".answer-detail button").forEach((elm) =>
  elm.addEventListener("click", () => {
    questionSlider.nextItem();
  })
);

/* ------------ Reasons ------------- */

let reasonSlider = new Splide(document.querySelector(".section-reasons--slider"), {
  gap: 12,
  arrows: true,
}).mount();

let heroContainer = document.querySelector(".section-reasons--hero");

reasonSlider.on("moved", () => {
  const { index } = reasonSlider;
  heroContainer.setAttribute("data-hero-display", index);
});
