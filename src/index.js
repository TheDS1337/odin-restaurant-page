import "./styles.css" 

const onNavButtonClick = (event) => {
    const buttonElement = event.target;
    pages[buttonElement.id.split('-').shift()].instance.show(buttonElement);
}

async function loadPages()
{
    const keys = [ "home", "menu", "reviews", "about" ];

    for( const key of keys ) {
        let page = {
            button: document.querySelector(`#${key}-button`),
            instance: (await import(`./pages/page_${key}.js`)).default
        };

        page.button.addEventListener("click", onNavButtonClick);
        pages[key] = page;
    };

    Object.values(pages).at(0).instance.show();

    return pages;
}

let pages = { };
loadPages();