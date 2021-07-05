import "./splide";

export function mountSectionReason() {
  let splide = new Splide(document.querySelector(".section-reasons--slider"), {
    gap: 12,
    arrows: true,
  }).mount();

  let heroContainer = document.querySelector(".section-reasons--hero");

  splide.on("active", (data) => {
    //data.slide.setAttribute("tabindex", "-1");
    //data.slide.focus();

    const { index } = splide;
    heroContainer.setAttribute("data-hero-display", index);
  });

  // when changing to new slide, set focus to the new slide
  splide.on("moved", (newIndex) => {
    const slide = splide.Components.Elements.slides[newIndex];

    // at this point slide still has tabindex=-1 (due to Splide implementation)
    // so we explicitly set here so that we can focus()
    slide.setAttribute("tabindex", "-1");
    slide.focus();
  });
}
