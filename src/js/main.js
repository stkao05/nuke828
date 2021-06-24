import MicroModal from "micromodal";
import "./splide.min";
import "@stkao05/layout-grid";
import { mountQuestionSection } from "./section-question";

document.addEventListener("DOMContentLoaded", function () {
  MicroModal.init({
    disableScroll: true,
    disableFocus: true,
  });
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

mountQuestionSection();

/* ------------ Reasons ------------- */

let reasonSlider = new Splide(
  document.querySelector(".section-reasons--slider"),
  {
    gap: 12,
    arrows: true,
  }
).mount();

let heroContainer = document.querySelector(".section-reasons--hero");

reasonSlider.on("moved", () => {
  const { index } = reasonSlider;
  heroContainer.setAttribute("data-hero-display", index);
});
