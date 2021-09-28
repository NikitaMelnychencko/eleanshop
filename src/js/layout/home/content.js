// Import
import model from "../../../views/partials/home/content.hbs";
import content from "../../json/home/content.json";

//Import Images
// Mobile
import "../../../images/img/home/content/mobile/img-mob_1.jpg"
import "../../../images/img/home/content/mobile/img-mob_1@2x.jpg"
import "../../../images/img/home/content/mobile/img-mob_2.jpg"
import "../../../images/img/home/content/mobile/img-mob_2@x.jpg"
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
import "../../../images/img/home/content/mobile/img_1.jpg"
import "../../../images/img/home/content/mobile/img_1@2x.jpg"
import "../../../images/img/home/content/mobile/img_2.jpg"
import "../../../images/img/home/content/mobile/img_2@x.jpg"
import "../../../images/img/home/content/mobile/img_3.jpg"
import "../../../images/img/home/content/mobile/img_3@2x.jpg"
import "../../../images/img/home/content/mobile/img_4.jpg"
import "../../../images/img/home/content/mobile/img_4@2x.jpg"
import "../../../images/img/home/content/mobile/img_5.jpg"
import "../../../images/img/home/content/mobile/img_5@2x.jpg"
import "../../../images/img/home/content/mobile/img_6.jpg"
import "../../../images/img/home/content/mobile/img_6@2x.jpg"
import "../../../images/img/home/content/mobile/img_7.jpg"
import "../../../images/img/home/content/mobile/img_7@2x.jpg"
import "../../../images/img/home/content/mobile/img_8.jpg"
import "../../../images/img/home/content/mobile/img_8@2x.jpg"
import "../../../images/img/home/content/mobile/img_9.jpg"
import "../../../images/img/home/content/mobile/img_9@2x.jpg"
import "../../../images/img/home/content/mobile/img_10.jpg"
import "../../../images/img/home/content/mobile/img_10@2x.jpg"






// Links
const refs = {
    module: document.querySelector(".content"),
    cards: main(content)
};


// Cards Insert
refs.module.insertAdjacentHTML("beforeend", refs.cards);