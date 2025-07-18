import Page from "../page.js"

export default new class extends Page
{
    fill() 
    {
        const p = document.createElement("p");
        p.textContent = "I think you can figure it out, we sell pizzas";

        const div = document.createElement("div");        
        div.id = "content";
        div.appendChild(p);

        return { div };
    };
}();