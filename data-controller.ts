import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}
// for returning html strings as single string
// https://stackoverflow.com/questions/44062723/mapping-an-object-and-then-setting-innerhtml-on-the-page-results-in-commas-betwe
function renderProducts(prods: Product[]): void {
    const mainContainer = document.getElementById("main-container");
    if (!mainContainer) return; //get rid of maincontainer can possibly be null error
    mainContainer.innerHTML = ''; // Clear screen
    const productsHTML = prods.map(generateProductHTML).join('');
    mainContainer.innerHTML = productsHTML;
}

function getByCategory(category: string): void {
    const filteredProducts = products.filter(product => product.category === category); //filter based on passed in catergory from on click
    renderProducts(filteredProducts);
}

function getByRating(minRating: number): void {
    const filteredProducts = products.filter(product => product.rating > minRating); //filter based on rating from on click
    renderProducts(filteredProducts);
}

export { renderProducts, getByCategory, getByRating };