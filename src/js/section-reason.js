import "./splide.min";

export function mountSectionReason() {
  let reasonSlider = new Splide(
    document.querySelector(".section-reasons--slider"),
    {
      gap: 12,
      arrows: true,
    }
  ).mount();

  let heroContainer = document.querySelector(".section-reasons--hero");

  reasonSlider.on("active", (data) => {
    //data.slide.setAttribute("tabindex", "-1");
    //data.slide.focus();

    const { index } = reasonSlider;
    heroContainer.setAttribute("data-hero-display", index);
  });
}
