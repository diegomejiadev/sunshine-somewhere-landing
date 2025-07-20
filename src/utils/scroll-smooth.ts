const MARGIN_NAVBAR = 70;

export const SmoothScrolling = (id: string) => {
  // const element = document.getElementById(id)!
  // element.scrollIntoView({behavior: "smooth", })

  const element = document.getElementById(id)!;
  const dims = element.getBoundingClientRect();
  window.scrollTo({
    left: window.scrollX,
    top: dims.top - MARGIN_NAVBAR,
    behavior: "smooth",
  });
};
