import "./styles.css" 

const contentDOMElem = document.querySelector("#content");

if( contentDOMElem ) {
    const pDOMElem = document.createElement("p");

    pDOMElem.textContent = "Our restaurant was ranked #1 in the city last year! We serve the most \
                            delicious meals and we take our customer satisfaction very seriously.";

    contentDOMElem.appendChild(pDOMElem);
}