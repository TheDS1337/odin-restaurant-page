export default class Page
{
    static content = document.querySelector("#content");

    constructor()
    {
        Page.remove();
    }

    fill() {};

    show() 
    {
        Page.remove();
        Object.values(this.fill()).forEach(child => Page.content.appendChild(child));
    };

    static remove()
    {
        let firstChild = null;

        while( (firstChild = Page.content.firstChild) !== null )
            Page.content.removeChild(firstChild);
    }

    static getContentElement = () => Page.content;
};