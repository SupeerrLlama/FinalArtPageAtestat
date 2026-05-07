function getCurrentCategoryProducts() {
    const pageCategory = document.body.dataset.category;
    return LLAMA_PRODUCTS.filter(product => product.category === pageCategory);
}

function createProductCard(product) {
    const card = document.createElement("article");
    card.className = `poza product-card ${product.size || "medium"}`;

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-card-content">
            <span>${product.tag}</span>
            <h3>${product.title}</h3>
            <h1>Cumpara $${product.price}</h1>
            <button type="button" class="quick-add" data-product-id="${product.id}">Add to Basket</button>
        </div>
    `;

    return card;
}

function renderCategoryProducts(products) {
    const productGrid = document.querySelector("#product-grid");
    const emptyMessage = document.querySelector("#empty-products");

    if (!productGrid) {
        return;
    }

    productGrid.innerHTML = "";

    products.forEach(product => {
        productGrid.appendChild(createProductCard(product));
    });

    if (emptyMessage) {
        emptyMessage.style.display = products.length === 0 ? "block" : "none";
    }
}

function addProductById(productId, button) {
    const product = LLAMA_PRODUCTS.find(item => item.id === productId);

    if (!product || typeof addProductToBasket !== "function") {
        return;
    }

    addProductToBasket(product);
    button.textContent = "Added!";

    setTimeout(function () {
        button.textContent = "Add to Basket";
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".input");
    const allProducts = getCurrentCategoryProducts();

    renderCategoryProducts(allProducts);

    searchInput?.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();
        const filteredProducts = allProducts.filter(product => {
            return product.title.toLowerCase().includes(searchText)
                || product.tag.toLowerCase().includes(searchText);
        });

        renderCategoryProducts(filteredProducts);
    });

    document.querySelector("#product-grid")?.addEventListener("click", function (event) {
        const quickAddButton = event.target.closest(".quick-add");

        if (!quickAddButton) {
            return;
        }

        event.preventDefault();
        addProductById(quickAddButton.dataset.productId, quickAddButton);
    });
});
