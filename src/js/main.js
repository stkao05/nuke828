var questionSlider = new Glider(document.querySelector(".question-slider"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: ".dots",
  scrollLock: true,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
});

questionSlider.nextItem = () => {
  questionSlider.scrollItem(questionSlider.getCurrentSlide() + 1);
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

// for IE support
function toArray(nodelist) {
  const res = [];
  for (let node of nodelist) {
    res.push(node);
  }

  return res;
}

document.querySelectorAll(".question-box").forEach((elm) => QuestionBox(elm));

document.querySelectorAll(".answer-detail button").forEach((elm) =>
  elm.addEventListener("click", () => {
    questionSlider.nextItem();
  })
);
