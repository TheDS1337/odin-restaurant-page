import Page from "../page.js"

export default class extends Page
{
    fill() 
    {
        const p = document.createElement("p");

        p.textContent = "Menu page";

        const div = document.createElement("div");
        
        div.id = "content";
        div.appendChild(p);

        return { div };
    };
};