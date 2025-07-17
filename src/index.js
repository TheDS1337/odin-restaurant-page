import "./styles.css" 
import HomePage from "./pages/page_home.js"
import MenuPage from "./pages/page_menu.js"
import ReviewsPage from "./pages/page_reviews.js"
import AboutPage from "./pages/page_about.js"

const pages = {
    home: new HomePage(),
    menu: new MenuPage(),
    reviews: new ReviewsPage(),
    about: new AboutPage()
}

const navButtons = {
    home: document.querySelector("#home-button"),
    menu: document.querySelector("#menu-button"),
    reviews: document.querySelector("#reviews-button"),
    about: document.querySelector("#about-button")
}

Object.values(navButtons).forEach(button => {
    button.addEventListener("click", (event) => {
        switch( event.target.id.split('-').shift() ) {
            case 'home':
                pages.home.show();
                break;

            case 'menu':
                pages.menu.show();
                break;

            case 'reviews':
                pages.reviews.show();
                break;

            case 'about':
                pages.about.show();
                break;
        }
    });
})


pages.home.show();
