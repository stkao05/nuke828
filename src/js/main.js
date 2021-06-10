function QuestionBox(questionBox) {
  const answer = questionBox.getAttribute("data-answer");

  const handleSelect = (event) => {
    console.log(event.target.value);

    const correctInput = questionBox.querySelector(`input[value=${answer}]`);
    correctInput.parentElement.classList.add("button-green");

    if (event.target.value !== answer) {
      event.target.parentElement.classList.add("button-red");
    }
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

// binding
document.querySelectorAll(".question-box").forEach((elm) => QuestionBox(elm));
