import "./styles.css" 
import HomePage from "./pages/page_home.js"
import MenuPage from "./pages/page_menu.js"
import ReviewsPage from "./pages/page_reviews.js"
import AboutPage from "./pages/page_about.js"

const pages =
{
    home: {
        button: document.querySelector("#home-button"),
        instance: new HomePage()
    },
    menu: {
        button: document.querySelector("#menu-button"),
        instance: new MenuPage()
    },
    reviews: {
        button: document.querySelector("#reviews-button"),
        instance: new ReviewsPage()
    },
    about: {
        button: document.querySelector("#about-button"),
        instance: new AboutPage()
    }
}

const onNavButtonClick = (event) => {
    const buttonElement = event.target;

    switch( buttonElement.id.split('-').shift() ) {
        case 'home':
            pages.home.instance.show(buttonElement);
            break;

        case 'menu':
            pages.menu.instance.show(buttonElement);
            break;

        case 'reviews':
            pages.reviews.instance.show(buttonElement);
            break;

        case 'about':
            pages.about.instance.show(buttonElement);
            break;
    }
}

Object.values(pages).forEach(page => {
    page.button.addEventListener("click", onNavButtonClick);
})


pages.home.instance.show();
