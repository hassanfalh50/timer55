const targets = Array.from(
  document.querySelectorAll(".cust-table a.sq-button.w")
);

targets.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    if (anchor.getAttribute("data-enabled")) {
      return;
    }

    e.preventDefault();
    let i = 10;
    anchor.style.pointerEvents = "none";
    const timer = setInterval(() => {
      if (i > 0) {
        anchor.innerHTML = i;

        i--;
      } else {
        anchor.innerHTML = "حمل الآن";
        anchor.setAttribute("data-enabled", true);
        anchor.style.pointerEvents = "auto";
        clearInterval(timer);
      }
    }, 1000);
  });
});
