// Import
import model from "../../../views/partials/home/content.hbs";
import content from "../../json/home/content.json";

//Import Images
// Mobile
import "../../../images/img/home/content/mobile/img-mob_1.jpg"
import "../../../images/img/home/content/mobile/img-mob_1@2x.jpg"
import "../../../images/img/home/content/mobile/img-mob_2.jpg"
import "../../../images/img/home/content/mobile/img-mob_2@2x.jpg"
import "../../../images/img/home/content/mobile/img-mob_3.jpg"
import "../../../images/img/home/content/mobile/img-mob_3@2x.jpg"
import "../../../images/img/home/content/mobile/img-mob_4.jpg"
import "../../../images/img/home/content/mobile/img-mob_4@2x.jpg"
import "../../../images/img/home/content/mobile/img-mob_5.jpg"
import "../../../images/img/home/content/mobile/img-mob_5@2x.jpg"
import "../../../images/img/home/content/mobile/img-mob_6.jpg"
import "../../../images/img/home/content/mobile/img-mob_6@2x.jpg"
import "../../../images/img/home/content/mobile/img-mob_7.jpg"
import "../../../images/img/home/content/mobile/img-mob_7@2x.jpg"
import "../../../images/img/home/content/mobile/img-mob_8.jpg"
import "../../../images/img/home/content/mobile/img-mob_8@2x.jpg"
import "../../../images/img/home/content/mobile/img-mob_9.jpg"
import "../../../images/img/home/content/mobile/img-mob_9@2x.jpg"
import "../../../images/img/home/content/mobile/img-mob_10.jpg"
import "../../../images/img/home/content/mobile/img-mob_10@2x.jpg"
// Desktop
import "../../../images/img/home/content/desk/img_1.jpg"
import "../../../images/img/home/content/desk/img_1@2x.jpg"
import "../../../images/img/home/content/desk/img_2.jpg"
import "../../../images/img/home/content/desk/img_2@2x.jpg"
import "../../../images/img/home/content/desk/img_3.jpg"
import "../../../images/img/home/content/desk/img_3@2x.jpg"
import "../../../images/img/home/content/desk/img_4.jpg"
import "../../../images/img/home/content/desk/img_4@2x.jpg"
import "../../../images/img/home/content/desk/img_5.jpg"
import "../../../images/img/home/content/desk/img_5@2x.jpg"
import "../../../images/img/home/content/desk/img_6.jpg"
import "../../../images/img/home/content/desk/img_6@2x.jpg"
import "../../../images/img/home/content/desk/img_7.jpg"
import "../../../images/img/home/content/desk/img_7@2x.jpg"
import "../../../images/img/home/content/desk/img_8.jpg"
import "../../../images/img/home/content/desk/img_8@2x.jpg"
import "../../../images/img/home/content/desk/img_9.jpg"
import "../../../images/img/home/content/desk/img_9@2x.jpg"
import "../../../images/img/home/content/desk/img_10.jpg"
import "../../../images/img/home/content/desk/img_10@2x.jpg"


// Links
const refs = {
    main: document.querySelector("main"),
    cards: model(content)
};


// Cards Insert
refs.main.insertAdjacentHTML("beforeend", refs.cards);