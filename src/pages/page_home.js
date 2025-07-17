import Page from "../page.js"

export default class extends Page
{
    fill() 
    {
        const p = document.createElement("p");

        p.textContent = "Our restaurant was ranked #1 in the city last year! We serve the most \
                                delicious meals and we take our customer satisfaction very seriously.";

        const div = document.createElement("div");
        
        div.id = "content";
        div.appendChild(p);

        return { div };
    };
};