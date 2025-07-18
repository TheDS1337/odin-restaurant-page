import Page from "../page.js"

export default new class extends Page
{
    fill() 
    {
        const p = document.createElement("p");

        p.textContent = "Reviews page";

        const rev1 = (() => {
            const p = document.createElement("p");
            p.textContent = "Honestly numero uno - Someone";

            const div = document.createElement("div");
            div.id = "content";
            div.appendChild(p);

            return div;
        })();

        const rev2 = (() => {
            const p = document.createElement("p");
            p.textContent = "Pizza that makes a grown man cry - a grown man";

            const div = document.createElement("div");
            div.id = "content";
            div.appendChild(p);

            return div;
        })();

        return { rev1, rev2 };
    };
}();