import Page from "../page.js"

export default class extends Page
{
    fill() 
    {
        const pDOMElem = document.createElement("p");

        pDOMElem.textContent = "Our restaurant was ranked #1 in the city last year! We serve the most \
                                delicious meals and we take our customer satisfaction very seriously.";

        return { pDOMElem };
    };
};