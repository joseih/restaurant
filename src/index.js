import "./style.css";
import navbar from "./navbar.js";
import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

const btns = navbar();

btns[0].addEventListener("click", () => {
  homePage();
});
btns[1].addEventListener("click", () => {
  menuPage();
});
btns[2].addEventListener("click", () => {
  contactPage();
});
