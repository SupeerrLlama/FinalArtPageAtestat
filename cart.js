const CART_STORAGE_KEY = "llamaShopBasket";

function getBasketItems() {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
}

function saveBasketItems(items) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

function formatMoney(amount) {
    return "$" + amount.toFixed(2);
}

function getProductFromPage() {
    const title = document.querySelector(".product-title")?.textContent.trim();
    const priceText = document.querySelector(".product-price")?.textContent || "";
    const image = document.querySelector(".product-image img")?.getAttribute("src") || "";
    const price = Number(priceText.replace(/[^0-9.]/g, ""));

    if (!title || Number.isNaN(price)) {
        return null;
    }

    return {
        id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title,
        price,
        image
    };
}

function addProductToBasket(product) {
    const items = getBasketItems();
    const existingItem = items.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        items.push({ ...product, quantity: 1 });
    }

    saveBasketItems(items);
}

window.addProductToBasket = addProductToBasket;

function removeProductFromBasket(productId) {
    const items = getBasketItems()
        .map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity - 1 };
            }

            return item;
        })
        .filter(item => item.quantity > 0);

    saveBasketItems(items);
    renderBasketPage();
}

function clearBasket() {
    saveBasketItems([]);
    renderBasketPage();
}

function calculateBasketTotal(items) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

function renderBasketPage() {
    const basketList = document.querySelector("#basket-list");
    const basketTotal = document.querySelector("#basket-total");
    const emptyMessage = document.querySelector("#empty-basket");

    if (!basketList || !basketTotal) {
        return;
    }

    const items = getBasketItems();
    basketList.innerHTML = "";

    if (emptyMessage) {
        emptyMessage.style.display = items.length === 0 ? "block" : "none";
    }

    items.forEach(item => {
        const basketItem = document.createElement("article");
        basketItem.className = "basket-item";
        basketItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="basket-item-info">
                <h2>${item.title}</h2>
                <p>${formatMoney(item.price)} x ${item.quantity}</p>
            </div>
            <div class="basket-item-actions">
                <strong>${formatMoney(item.price * item.quantity)}</strong>
                <button type="button" data-remove-id="${item.id}">Remove</button>
            </div>
        `;
        basketList.appendChild(basketItem);
    });

    basketTotal.textContent = formatMoney(calculateBasketTotal(items));
}

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButton = document.querySelector(".add-to-cart");

    if (addToCartButton) {
        addToCartButton.addEventListener("click", function () {
            const product = getProductFromPage();

            if (!product) {
                return;
            }

            addProductToBasket(product);
            addToCartButton.textContent = "Added!";

            setTimeout(function () {
                addToCartButton.textContent = "Add to Cart";
            }, 1000);
        });
    }

    renderBasketPage();

    document.querySelector("#basket-list")?.addEventListener("click", function (event) {
        const removeButton = event.target.closest("[data-remove-id]");

        if (removeButton) {
            removeProductFromBasket(removeButton.dataset.removeId);
        }
    });

    document.querySelector(".checkout-button")?.addEventListener("click", function () {
        clearBasket();
    });
});
