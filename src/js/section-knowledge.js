import MicroModal from "micromodal";
import { on } from "delegated-events";

export function mountSectionKnowledge() {
  document.addEventListener("DOMContentLoaded", function () {
    ModalManager.init();
  });
}

const modalOption = {
  disableScroll: true,
  disableFocus: true,
  openTrigger: "none",
  closeTrigger: "none",
};

const ModalManager = {
  modalId: null,

  init() {
    on("click", "[data-micromodal-trigger]", (event) => {
      const modalId = event.target.getAttribute("data-micromodal-trigger");
      const skipAnimation = event.target.hasAttribute(
        "data-micromodal-skip-animation"
      );

      this.show(modalId, { skipAnimation });
    });

    on("click", "[data-micromodal-close]", () => {
      this.close();
    });

    document.addEventListener("keydown", (event) => {
      if (!this.modalId) {
        return;
      }
      if (event.key === "ArrowRight") {
        this.show(delta(this.modalId, 1), { skipAnimation: true });
      }
      if (event.key === "ArrowLeft") {
        this.show(delta(this.modalId, -1), { skipAnimation: true });
      }
    });
  },
  show(id, { skipAnimation } = {}) {
    if (skipAnimation) {
      document.documentElement.classList.add("micromodal-skip-animation");
    } else {
      document.documentElement.classList.remove("micromodal-skip-animation");
    }

    if (this.modalId) {
      MicroModal.close(this.modalId);
    }

    MicroModal.show(id, modalOption);

    // when an modal has been opened and scrolled, we want to reset
    // the scroll position when it is re-opened
    const modal = document.querySelector(`#${id}`);
    modal.scrollTo(0, 0);

    this.modalId = id;
  },
  close() {
    if (this.modalId) {
      MicroModal.close(this.modalId);
    }
    this.modalId = null;
  },
};

function delta(id, delta) {
  const num = parseInt(id.replace("article-", ""));
  return `article-${num + delta}`;
}
