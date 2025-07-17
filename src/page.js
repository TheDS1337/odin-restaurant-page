export default class Page
{
    static main = document.querySelector("main");

    constructor()
    {
        Page.remove();
    }

    fill() {};

    show(button=null) 
    {
        Page.remove();
        Object.values(this.fill()).forEach(child => Page.main.appendChild(child));

        if( button ) {
            button.classList.toggle("button-clicked");

            for( const child of button.parentElement.children ) {
                if( child === button )
                    continue;

                child.classList.remove("button-clicked");
            }
        }
    };

    static remove()
    {
        let firstChild;
        
        while( firstChild = Page.main.firstChild )
            Page.main.removeChild(firstChild);
    }

    static getMainElement = () => Page.main;
};