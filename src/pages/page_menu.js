import Page from "../page.js"

export default class extends Page
{
    fill() 
    {
        const pDOMElem = document.createElement("p");

        pDOMElem.textContent = "Menu page";

        return { pDOMElem };
    };
};