import MicroModal from "micromodal";

export function mountSectionKnowledge() {
  document.addEventListener("DOMContentLoaded", function () {
    MicroModal.init({
      disableScroll: true,
      disableFocus: true,
    });
  });
}
