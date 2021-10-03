// Import
import model from "../../../views/partials/home/content.hbs";
import content from "../../json/home/content.json";
import refs from "../../refs/refs";



// Cards Insert
const cards = model(content);
refs.main.insertAdjacentHTML("beforeend", cards);

// Links
const ref = {
    list: document.querySelector(".content__list"),
};

// Target
localStorage.removeItem("content");
ref.list.addEventListener("click", e => {
    localStorage.setItem("content", `${e.target.id}`)
});