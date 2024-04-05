export default function navbar() {
  const nav = document.querySelector("nav");
  nav.className = "navbar";
  const btns = btnSelectedLogic();
  return btns;
}

function btnSelectedLogic() {
  const btns = document.querySelectorAll("button");
  btns.forEach((x) => {
    x.addEventListener("click", () => {
      btns.forEach((y) => {
        y.classList.remove("btn-selected");
      });
      x.classList.add("btn-selected");
    });
  });
  return btns;
}
