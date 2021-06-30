import MicroModal from "micromodal";

export function mountSectionKnowledge() {
  document.addEventListener("DOMContentLoaded", function () {
    let currentModal;

    MicroModal.init({
      disableScroll: true,
      disableFocus: true,
      onShow: (modal) => {
        // allow one modal at the time
        if (currentModal) {
          MicroModal.close(currentModal.id);
        }
        currentModal = modal;
      },
    });

    //document.addEventListener("keydown", (event) => {
    //if (!currentModal) {
    //return;
    //}
    //if (event.key === "ArrowRight") {
    //MicroModal.close(currentModal.id);
    //MicroModal.show(deltaArticleId(currentModal.id, 1));
    //}
    //});
  });
}

function deltaArticleId(id, delta) {
  const num = parseInt(id.replace("article-", ""));
  return `article-${num + delta}`;
}
