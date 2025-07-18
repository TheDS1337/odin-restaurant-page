import Page from "../page.js"

export default new class extends Page
{
    fill() 
    {
        const p = document.createElement("p");
        p.textContent = "Best in the country, YO!";

        const div = document.createElement("div");        
        div.id = "content";
        div.appendChild(p);

        return { div };
    };
}();