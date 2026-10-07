const categoryPageCopy = {
  groceries: {
    en: {
      title: "Everyday groceries",
      intro:
        "Find pantry staples and cooking essentials at Thiruvarasu Maligai, your local grocery store in T. Palur.",
      label: "Groceries",
      pageTitle: "Groceries in T. Palur | Thiruvarasu Maligai",
      description:
        "Shop everyday groceries at Thiruvarasu Maligai in T. Palur. Browse pantry essentials and confirm current stock and prices with the store.",
    },
    ta: {
      title: "அன்றாட மளிகைப் பொருட்கள்",
      intro:
        "தா.பழூர் திருவரசு மளிகையில் வீட்டிற்குத் தேவையான சமையல் மற்றும் மளிகைப் பொருட்களைப் பாருங்கள்.",
      label: "மளிகைப் பொருட்கள்",
      pageTitle: "தா.பழூர் மளிகைப் பொருட்கள் | திருவரசு மளிகை",
      description:
        "திருவரசு மளிகை, தா.பழூரில் கிடைக்கும் மளிகைப் பொருட்களைப் பாருங்கள்.",
    },
  },
  textiles: {
    en: {
      title: "Clothing & textiles",
      intro:
        "Browse clothing and textiles at Paapathi Textiles in T. Palur, from comfortable everyday wear to traditional styles.",
      label: "Textiles",
      pageTitle: "Clothing & Textiles in T. Palur | Paapathi Textiles",
      description:
        "Explore clothing and textiles at Paapathi Textiles in T. Palur, from everyday wear to traditional styles. Contact the store to confirm availability.",
    },
    ta: {
      title: "ஆடைகள் & துணிகள்",
      intro:
        "தா.பழூர் பாப்பாத்தி டெக்ஸ்டைல்ஸில் அன்றாட ஆடைகள் மற்றும் பாரம்பரிய உடைகளைப் பாருங்கள்.",
      label: "ஆடைகள் & துணிகள்",
      pageTitle: "தா.பழூர் ஆடைகள் & துணிகள் | பாப்பாத்தி டெக்ஸ்டைல்ஸ்",
      description:
        "பாப்பாத்தி டெக்ஸ்டைல்ஸ், தா.பழூரில் கிடைக்கும் ஆடைகள் மற்றும் துணிகளைப் பாருங்கள்.",
    },
  },
  jewels: {
    en: {
      title: "Jewellery & accessories",
      intro:
        "Explore traditional-style imitation jewellery and colourful accessories at Thiruvarasu Maligai in T. Palur.",
      label: "Jewellery",
      pageTitle: "Imitation Jewellery in T. Palur | Thiruvarasu Maligai",
      description:
        "Browse imitation jewellery and accessories at Thiruvarasu Maligai in T. Palur. Check the online catalogue and contact the store to confirm availability.",
    },
    ta: {
      title: "நகைகள் & அணிகலன்கள்",
      intro:
        "தா.பழூர் திருவரசு மளிகையில் பாரம்பரிய வடிவிலான செயற்கை நகைகள் மற்றும் வண்ணமயமான அணிகலன்களைப் பாருங்கள்.",
      label: "நகைகள்",
      pageTitle: "தா.பழூர் செயற்கை நகைகள் | திருவரசு மளிகை",
      description:
        "திருவரசு மளிகை, தா.பழூரில் கிடைக்கும் நகைகள் மற்றும் அணிகலன்களைப் பாருங்கள்.",
    },
  },
};

const categoryNames = {
  groceries: { en: "Groceries", ta: "மளிகைப் பொருட்கள்" },
  textiles: { en: "Textiles", ta: "ஆடைகள் & துணிகள்" },
  jewels: { en: "Jewellery", ta: "நகைகள்" },
};

let categoryLanguage =
  localStorage.getItem("siteLanguage") === "ta" ? "ta" : "en";
const pageCategory = document.body.dataset.category;
const pageFolder = document.body.dataset.imageFolder;
const pageRoot = document.querySelector("#categoryProducts");
let loadedCategoryProducts = null;
const selectedCategorySizes = new Map();
const categoryQuantities = new Map();
const cartStorageKey = "thiruvarasuOrderCart";
let orderCart = loadOrderCart();

function escapeCategoryHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}

function categoryText(key) {
  const text = {
    en: {
      home: "Home",
      groceries: "Groceries",
      textiles: "Textiles",
      jewels: "Jewellery",
      topbar: "Open daily, 9:00 am–9:00 pm · Here for your everyday needs",
      mainNavigation: "Main navigation",
      menu: "Toggle navigation",
      language: "தமிழ்",
      languageLabel: "View in Tamil",
      loadError: "Products could not be loaded. Please try again.",
      retry: "Try again",
      disclaimer:
        "Catalogue and prices are illustrative. Please confirm availability and current prices with the store.",
      price: "each",
      back: "Back to all categories",
      size: "Size",
      chooseSize: "Choose a size",
      quantity: "Quantity",
      addToOrder: "Add to order",
      cart: "Your order",
      emptyCart: "Your order is empty.",
      continueShopping: "Continue shopping",
      remove: "Remove",
      decrease: "Decrease quantity",
      increase: "Increase quantity",
      completeOrder: "Send order on WhatsApp",
      itemsInOrder: "items",
      addedToOrder: "Added to your order",
      selectSizeError: "Please choose a size first.",
      priceVaries: "Price varies by size · Confirm on WhatsApp",
      orderGreeting: "Hello! I'd like to order:",
      orderSize: "Size",
      orderQuantity: "Quantity",
      orderTotalLabel: "Estimated total",
      orderPrice: "Please confirm the current price for this size.",
      orderDisclaimer:
        "Please confirm availability and current prices with the store.",
      customerDetails: "Customer details",
      customerName: "Full name",
      customerMobile: "Mobile number",
      customerEmail: "Email address",
      doorNumber: "Door number",
      streetName: "Street name",
      place: "Place / town",
      nearestLandmark: "Nearest landmark",
      requiredFields:
        "All fields are required. Enter a valid email and Indian mobile number.",
      customerNameOrder: "Name",
      customerMobileOrder: "Mobile no",
      customerEmailOrder: "Email",
      addressOrder: "Address",
      dateTime: "Date",
      orderSummary: "Order summary",
      tableHeader: "S.No | Item | Qty | Price",
      totalAmount: "Total amount",
    },
    ta: {
      home: "முகப்பு",
      groceries: "மளிகைப் பொருட்கள்",
      textiles: "ஆடைகள் & துணிகள்",
      jewels: "நகைகள்",
      topbar:
        "தினமும் காலை 9 மணி முதல் இரவு 9 மணி வரை திறந்திருக்கும் · உங்கள் அன்றாடத் தேவைகளுக்கு",
      mainNavigation: "முதன்மை வழிசெலுத்தல்",
      menu: "வழிசெலுத்தலை மாற்றவும்",
      language: "English",
      languageLabel: "ஆங்கிலத்தில் பார்க்க",
      loadError: "பொருட்களை ஏற்ற முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
      retry: "மீண்டும் முயற்சி",
      disclaimer:
        "பொருட்கள் மற்றும் விலைகள் விளக்கத்திற்காக மட்டுமே. இருப்பு மற்றும் தற்போதைய விலைகளை கடையில் உறுதிப்படுத்தவும்.",
      price: "ஒவ்வொன்றும்",
      back: "அனைத்து வகைகளுக்கும் திரும்பு",
      size: "அளவு",
      chooseSize: "அளவைத் தேர்ந்தெடுக்கவும்",
      quantity: "எண்ணிக்கை",
      addToOrder: "ஆர்டரில் சேர்க்க",
      cart: "உங்கள் ஆர்டர்",
      emptyCart: "உங்கள் ஆர்டரில் பொருட்கள் இல்லை.",
      continueShopping: "தொடர்ந்து பார்க்க",
      remove: "நீக்கவும்",
      decrease: "எண்ணிக்கையைக் குறைக்கவும்",
      increase: "எண்ணிக்கையை அதிகரிக்கவும்",
      completeOrder: "WhatsApp-இல் ஆர்டரை அனுப்பவும்",
      itemsInOrder: "பொருட்கள்",
      addedToOrder: "உங்கள் ஆர்டரில் சேர்க்கப்பட்டது",
      selectSizeError: "முதலில் அளவைத் தேர்ந்தெடுக்கவும்.",
      priceVaries: "அளவுக்கு ஏற்ப விலை மாறும் · WhatsApp-இல் உறுதிப்படுத்தவும்",
      orderGreeting: "வணக்கம்! இந்தப் பொருளை ஆர்டர் செய்ய விரும்புகிறேன்:",
      orderSize: "அளவு",
      orderQuantity: "எண்ணிக்கை",
      orderTotalLabel: "தோராயமான மொத்தம்",
      orderPrice: "இந்த அளவிற்கான தற்போதைய விலையை உறுதிப்படுத்தவும்.",
      orderDisclaimer:
        "இருப்பு மற்றும் தற்போதைய விலைகளை கடையில் உறுதிப்படுத்தவும்.",
      customerDetails: "வாடிக்கையாளர் விவரங்கள்",
      customerName: "முழுப் பெயர்",
      customerMobile: "கைபேசி எண்",
      customerEmail: "மின்னஞ்சல் முகவரி",
      doorNumber: "கதவு எண்",
      streetName: "தெருப் பெயர்",
      place: "ஊர் / நகரம்",
      nearestLandmark: "அருகிலுள்ள அடையாளம்",
      requiredFields:
        "அனைத்து விவரங்களையும் நிரப்பவும். சரியான மின்னஞ்சல் மற்றும் இந்திய கைபேசி எண்ணை உள்ளிடவும்.",
      customerNameOrder: "பெயர்",
      customerMobileOrder: "கைபேசி எண்",
      customerEmailOrder: "மின்னஞ்சல்",
      addressOrder: "முகவரி",
      dateTime: "தேதி",
      orderSummary: "ஆர்டர் சுருக்கம்",
      tableHeader: "வ.எண் | பொருள் | எண்ணிக்கை | விலை",
      totalAmount: "மொத்தத் தொகை",
    },
  };
  return text[categoryLanguage][key];
}

function renderCategoryProducts(products) {
  pageRoot.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
            <div class="product-image-wrap">
                <img class="product-image" src="./src/product_imgs/${pageFolder}/${escapeCategoryHtml(product.image)}"
                    alt="${escapeCategoryHtml(product.alt[categoryLanguage])}" loading="lazy" decoding="async">
            </div>
            <div class="product-card-body">
                <span class="product-category">${escapeCategoryHtml(categoryNames[pageCategory][categoryLanguage])}</span>
                <h2 class="product-title">${escapeCategoryHtml(product.name[categoryLanguage])}</h2>
                <p class="product-detail">${escapeCategoryHtml(product.detail[categoryLanguage])}</p>
                ${
                  product.priceVariesBySize
                    ? `<p class="product-detail product-size-price-note" data-size-price-for="${escapeCategoryHtml(product.id)}">${categoryText("priceVaries")}</p>`
                    : `<div class="product-price-row">
                        <strong class="product-price">${formatCategoryPrice(product.price)}</strong>
                        <span>${categoryText("price")}</span>
                    </div>`
                }
                ${
                  product.sizes?.length
                    ? `<label class="product-size"><span>${categoryText("size")}</span>
                        <select class="form-select" data-order-size="${escapeCategoryHtml(product.id)}" aria-label="${categoryText("size")} — ${escapeCategoryHtml(product.name[categoryLanguage])}" required>
                            <option value="">${categoryText("chooseSize")}</option>
                            ${product.sizes.map((size) => `<option value="${escapeCategoryHtml(size)}"${selectedCategorySizes.get(product.id) === size ? " selected" : ""}>${escapeCategoryHtml(localizeCategorySize(size))}</option>`).join("")}
                        </select>
                    </label>`
                    : ""
                }
                <label class="category-quantity"><span>${categoryText("quantity")}</span>
                    <input class="form-control" type="number" min="1" max="99" value="${categoryQuantities.get(product.id) || 1}" inputmode="numeric" data-order-quantity="${escapeCategoryHtml(product.id)}" aria-label="${categoryText("quantity")} — ${escapeCategoryHtml(product.name[categoryLanguage])}">
                </label>
                <button class="btn product-add-button" type="button" data-add-to-order="${escapeCategoryHtml(product.id)}">
                    <span>${categoryText("addToOrder")}</span><span aria-hidden="true">＋</span>
                </button>
            </div>
        </article>`,
    )
    .join("");
  pageRoot.setAttribute("aria-busy", "false");
  products.forEach((product) => {
    if (product.priceVariesBySize && selectedCategorySizes.has(product.id)) {
      updateCategorySizePrice(product.id);
    }
  });
}

function updateCategorySizePrice(productId) {
  const product = loadedCategoryProducts?.find(
    (entry) => entry.id === productId,
  );
  const sizeSelect = pageRoot.querySelector(
    `[data-order-size="${CSS.escape(productId)}"]`,
  );
  const priceNote = pageRoot.querySelector(
    `[data-size-price-for="${CSS.escape(productId)}"]`,
  );
  if (!product || !sizeSelect || !priceNote) {
    return;
  }

  const unitPrice = product.sizePrices?.[sizeSelect.value];
  priceNote.textContent =
    unitPrice === undefined
      ? categoryText("priceVaries")
      : `${formatCategoryPrice(unitPrice)} / ${categoryText("price")}`;
}

function formatCategoryPrice(price) {
  return new Intl.NumberFormat(categoryLanguage === "ta" ? "ta-IN" : "en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

function localizeCategorySize(size) {
  const muzham = /^(\d+) muzham$/.exec(size);
  return muzham && categoryLanguage === "ta" ? `${muzham[1]} முழம்` : size;
}

function loadOrderCart() {
  const storedCart = localStorage.getItem(cartStorageKey);
  if (!storedCart) {
    return [];
  }
  try {
    const cart = JSON.parse(storedCart);
    if (!Array.isArray(cart)) {
      throw new TypeError("Stored order must be an array.");
    }
    return cart.filter(
      (item) =>
        item &&
        typeof item.key === "string" &&
        item.product &&
        typeof item.product.id === "string" &&
        item.product.name &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0,
    );
  } catch (error) {
    console.error("Unable to read the saved order.", error);
    return [];
  }
}

function saveOrderCart() {
  localStorage.setItem(cartStorageKey, JSON.stringify(orderCart));
}

function orderItemPrice(item) {
  if (
    item.variant &&
    item.product.sizePrices &&
    Object.hasOwn(item.product.sizePrices, item.variant)
  ) {
    return item.product.sizePrices[item.variant];
  }
  return item.product.priceVariesBySize ? undefined : item.product.price;
}

function renderOrderCart() {
  const itemCount = orderCart.reduce((total, item) => total + item.quantity, 0);
  const total = orderCart.reduce((sum, item) => {
    const price = orderItemPrice(item);
    return price === undefined || sum === null
      ? null
      : sum + price * item.quantity;
  }, 0);
  document.querySelector("#orderBar").hidden = orderCart.length === 0;
  document.querySelector("#orderCount").textContent = String(itemCount);
  document.querySelector("#orderBarTotal").textContent =
    total === null ? categoryText("priceVaries") : formatCategoryPrice(total);

  const cartContent = document.querySelector("#categoryOrderItems");
  if (orderCart.length === 0) {
    cartContent.innerHTML = `<p class="empty-order">${categoryText("emptyCart")}</p>`;
  } else {
    cartContent.innerHTML = orderCart
      .map((item) => {
        const name = escapeCategoryHtml(
          item.product.name[categoryLanguage] || item.product.name.en,
        );
        const variant = item.variant
          ? `<span class="cart-item-variant">${categoryText("size")}: ${escapeCategoryHtml(localizeCategorySize(item.variant))}</span>`
          : "";
        const price = orderItemPrice(item);
        const priceText =
          price === undefined
            ? categoryText("priceVaries")
            : `${formatCategoryPrice(price)} × ${item.quantity} = ${formatCategoryPrice(price * item.quantity)}`;
        return `<article class="cart-item" data-cart-item="${escapeCategoryHtml(item.key)}">
                <div class="cart-item-main"><strong>${name}</strong>${variant}<span>${priceText}</span></div>
                <div class="cart-item-actions">
                    <div class="quantity-input-group quantity-input-group-small">
                        <button class="quantity-step" type="button" data-cart-change="-1" data-cart-key="${escapeCategoryHtml(item.key)}" aria-label="${categoryText("decrease")}">−</button>
                        <span class="cart-quantity">${item.quantity}</span>
                        <button class="quantity-step" type="button" data-cart-change="1" data-cart-key="${escapeCategoryHtml(item.key)}" aria-label="${categoryText("increase")}">+</button>
                    </div>
                    <button class="remove-cart-item" type="button" data-cart-remove="${escapeCategoryHtml(item.key)}" aria-label="${categoryText("remove")}">×</button>
                </div>
            </article>`;
      })
      .join("");
  }
  document.querySelector("#categoryOrderTotal").textContent =
    total === null ? categoryText("priceVaries") : formatCategoryPrice(total);
  document.querySelector("#categoryOrderTotals").hidden =
    orderCart.length === 0;
  document.querySelector("#sendCategoryOrder").disabled =
    orderCart.length === 0;
}

function addProductToOrder(productId) {
  const product = loadedCategoryProducts?.find(
    (entry) => entry.id === productId,
  );
  if (!product) {
    console.error(`Unknown catalog product: ${productId}`);
    return;
  }
  const sizeSelect = pageRoot.querySelector(
    `[data-order-size="${CSS.escape(productId)}"]`,
  );
  const variant = sizeSelect?.value || "";
  if (sizeSelect && !variant) {
    sizeSelect.setCustomValidity(categoryText("selectSizeError"));
    sizeSelect.reportValidity();
    sizeSelect.addEventListener(
      "change",
      () => sizeSelect.setCustomValidity(""),
      { once: true },
    );
    return;
  }
  const quantityInput = pageRoot.querySelector(
    `[data-order-quantity="${CSS.escape(productId)}"]`,
  );
  const quantity = Number(quantityInput.value);
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
    quantityInput.setCustomValidity(
      categoryLanguage === "ta"
        ? "1 முதல் 99 வரையிலான எண்ணிக்கையை உள்ளிடவும்."
        : "Enter a quantity from 1 to 99.",
    );
    quantityInput.reportValidity();
    quantityInput.addEventListener(
      "input",
      () => quantityInput.setCustomValidity(""),
      { once: true },
    );
    return;
  }
  categoryQuantities.set(productId, quantity);

  const key = `${product.id}:${variant}`;
  const existingItem = orderCart.find((item) => item.key === key);
  if (existingItem) {
    existingItem.quantity = Math.min(99, existingItem.quantity + quantity);
  } else {
    orderCart.push({ key, product, variant, quantity });
  }
  saveOrderCart();
  renderOrderCart();
  const button = pageRoot.querySelector(
    `[data-add-to-order="${CSS.escape(productId)}"]`,
  );
  button.querySelector("span:first-child").textContent =
    `${categoryText("addedToOrder")} (${orderCart.reduce((sum, item) => sum + item.quantity, 0)})`;
  window.setTimeout(() => {
    if (button.isConnected) {
      button.querySelector("span:first-child").textContent =
        categoryText("addToOrder");
    }
  }, 1600);
}

function updateOrderItem(key, change) {
  const item = orderCart.find((entry) => entry.key === key);
  if (!item) {
    console.error(`Unknown saved order item: ${key}`);
    return;
  }
  item.quantity += change;
  if (item.quantity <= 0) {
    orderCart = orderCart.filter((entry) => entry.key !== key);
  } else {
    item.quantity = Math.min(99, item.quantity);
  }
  saveOrderCart();
  renderOrderCart();
}

function sendOrderToWhatsApp(customer) {
  if (orderCart.length === 0) {
    console.error("Cannot start a WhatsApp order with an empty cart.");
    return;
  }
  const total = orderCart.reduce((sum, item) => {
    const price = orderItemPrice(item);
    return price === undefined || sum === null
      ? null
      : sum + price * item.quantity;
  }, 0);
  const rows = orderCart.map((item, index) => {
    const price = orderItemPrice(item);
    const variant = item.variant
      ? ` (${categoryText("orderSize")}: ${localizeCategorySize(item.variant)})`
      : "";
    const itemTotal =
      price === undefined
        ? categoryText("orderPrice")
        : formatCategoryPrice(price * item.quantity);
    return `${index + 1} | ${item.product.name[categoryLanguage] || item.product.name.en}${variant} | ${item.quantity} | ${itemTotal}`;
  });
  const message = [
    `${categoryText("dateTime")}: ${new Intl.DateTimeFormat(
      categoryLanguage === "ta" ? "ta-IN" : "en-IN",
      {
        dateStyle: "medium",
        timeStyle: "short",
      },
    ).format(new Date())}`,
    "",
    `${categoryText("customerDetails")}:`,
    `${categoryText("customerNameOrder")}: ${customer.name}`,
    `${categoryText("customerMobileOrder")}: ${customer.mobile}`,
    `${categoryText("customerEmailOrder")}: ${customer.email}`,
    `${categoryText("addressOrder")}: ${customer.doorNo}, ${customer.street}, ${customer.place}, ${customer.landmark}`,
    "",
    `${categoryText("orderSummary")}:`,
    categoryText("tableHeader"),
    ...rows,
    `${categoryText("totalAmount")}: ${total === null ? categoryText("priceVaries") : formatCategoryPrice(total)}`,
  ].join("\n");
  window.open(
    `https://wa.me/919787202630?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

function renderOrderCartShell() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
        <div class="order-bar category-order-bar" id="orderBar" hidden>
            <button class="order-cart-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#categoryOrderDrawer">
                <span class="order-cart-icon" aria-hidden="true">▣</span>
                <span><strong><span id="categoryCartLabel"></span> · <span id="orderCount">0</span></strong>
                    <small id="orderBarTotal"></small></span>
            </button>
            <button class="btn btn-whatsapp" type="button" data-bs-toggle="offcanvas" data-bs-target="#categoryOrderDrawer">
                <span aria-hidden="true">→</span><span id="categoryCheckoutLabel"></span>
            </button>
        </div>
        <div class="offcanvas offcanvas-end order-drawer" tabindex="-1" id="categoryOrderDrawer" aria-labelledby="categoryOrderTitle">
            <div class="offcanvas-header">
                <div><p class="eyebrow mb-2"><span></span><span id="categoryCartEyebrow"></span></p>
                    <h2 class="offcanvas-title" id="categoryOrderTitle"></h2></div>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div id="categoryOrderItems" aria-live="polite"></div>
                <div class="order-totals" id="categoryOrderTotals">
                    <div class="order-grand-total"><strong id="categoryTotalLabel"></strong><strong id="categoryOrderTotal"></strong></div>
                    <p class="order-price-note" id="categoryOrderDisclaimer"></p>
                    <form class="customer-details-form" id="categoryCustomerForm" novalidate>
                        <h3 id="categoryCustomerHeading"></h3>
                        <p class="customer-details-note" id="categoryCustomerNote"></p>
                        <div class="customer-fields-grid">
                            <div class="customer-field customer-field-wide">
                                <label for="categoryCustomerName" id="categoryCustomerNameLabel"></label>
                                <input class="form-control" id="categoryCustomerName" name="customerName" type="text" autocomplete="name" maxlength="80" required>
                            </div>
                            <div class="customer-field">
                                <label for="categoryCustomerMobile" id="categoryCustomerMobileLabel"></label>
                                <input class="form-control" id="categoryCustomerMobile" name="mobile" type="tel" autocomplete="tel-national" inputmode="numeric" pattern="[6-9][0-9]{9}" maxlength="10" required>
                            </div>
                            <div class="customer-field">
                                <label for="categoryCustomerEmail" id="categoryCustomerEmailLabel"></label>
                                <input class="form-control" id="categoryCustomerEmail" name="email" type="email" autocomplete="email" maxlength="254" required>
                            </div>
                            <div class="customer-field">
                                <label for="categoryCustomerDoor" id="categoryCustomerDoorLabel"></label>
                                <input class="form-control" id="categoryCustomerDoor" name="doorNo" type="text" autocomplete="address-line1" maxlength="40" required>
                            </div>
                            <div class="customer-field">
                                <label for="categoryCustomerStreet" id="categoryCustomerStreetLabel"></label>
                                <input class="form-control" id="categoryCustomerStreet" name="street" type="text" autocomplete="address-line2" maxlength="100" required>
                            </div>
                            <div class="customer-field">
                                <label for="categoryCustomerPlace" id="categoryCustomerPlaceLabel"></label>
                                <input class="form-control" id="categoryCustomerPlace" name="place" type="text" autocomplete="address-level2" maxlength="80" required>
                            </div>
                            <div class="customer-field">
                                <label for="categoryCustomerLandmark" id="categoryCustomerLandmarkLabel"></label>
                                <input class="form-control" id="categoryCustomerLandmark" name="landmark" type="text" maxlength="100" required>
                            </div>
                        </div>
                        <p class="customer-form-error" id="categoryCustomerError" role="alert" hidden></p>
                        <button class="btn btn-whatsapp btn-whatsapp-full" id="sendCategoryOrder" type="submit" disabled></button>
                    </form>
                    <a class="category-continue-link" href="./index.html#categories" id="continueShoppingLink"></a>
                </div>
            </div>
        </div>`,
  );
}

function handleCategoryOrderSubmission(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (orderCart.length === 0) {
    console.error("Cannot send an empty order.");
    return;
  }
  if (!form.checkValidity()) {
    form.querySelector(":invalid")?.focus();
    form.reportValidity();
    return;
  }
  const formData = new FormData(form);
  sendOrderToWhatsApp({
    name: formData.get("customerName").trim(),
    mobile: formData.get("mobile").trim(),
    email: formData.get("email").trim(),
    doorNo: formData.get("doorNo").trim(),
    street: formData.get("street").trim(),
    place: formData.get("place").trim(),
    landmark: formData.get("landmark").trim(),
  });
}

function applyCategoryLanguage(language) {
  categoryLanguage = language;
  const copy = categoryPageCopy[pageCategory][language];
  document.documentElement.lang = language;
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('meta[property="og:title"]').content = copy.pageTitle;
  document.querySelector('meta[property="og:description"]').content =
    copy.description;
  document.querySelector('meta[property="og:locale"]').content =
    language === "ta" ? "ta_IN" : "en_IN";
  document.querySelector("#categoryTitle").textContent = copy.title;
  document.querySelector("#categoryIntro").textContent = copy.intro;
  document.querySelector("#categoryEyebrow").textContent = copy.label;
  document.querySelector("#categoryHomeLink").textContent =
    categoryText("home");
  document.querySelector("#categoryTopbar").textContent =
    categoryText("topbar");
  document
    .querySelector(".site-nav")
    .setAttribute("aria-label", categoryText("mainNavigation"));
  document
    .querySelector("#categoryMenuToggle")
    .setAttribute("aria-label", categoryText("menu"));
  document.querySelector("#categoryDisclaimer").textContent =
    categoryText("disclaimer");
  document.querySelector("#categoryBackLink").textContent =
    categoryText("back");
  document.querySelectorAll("[data-category-nav]").forEach((link) => {
    link.textContent = categoryText(link.dataset.categoryNav);
  });
  const toggle = document.querySelector("#languageToggle");
  toggle.textContent = categoryText("language");
  toggle.setAttribute("aria-label", categoryText("languageLabel"));
  toggle.lang = language === "en" ? "ta" : "en";
  document.querySelector("#categoryCartLabel").textContent =
    categoryText("cart");
  document.querySelector("#categoryCartEyebrow").textContent =
    categoryText("cart");
  document.querySelector("#categoryOrderTitle").textContent =
    categoryText("cart");
  document.querySelector("#categoryCheckoutLabel").textContent =
    categoryText("completeOrder");
  document.querySelector("#categoryTotalLabel").textContent =
    categoryText("orderTotalLabel");
  document.querySelector("#categoryOrderDisclaimer").textContent =
    categoryText("disclaimer");
  document.querySelector("#categoryCustomerHeading").textContent =
    categoryText("customerDetails");
  document.querySelector("#categoryCustomerNote").textContent =
    categoryText("requiredFields");
  document.querySelector("#categoryCustomerNameLabel").textContent =
    categoryText("customerName");
  document.querySelector("#categoryCustomerMobileLabel").textContent =
    categoryText("customerMobile");
  document.querySelector("#categoryCustomerEmailLabel").textContent =
    categoryText("customerEmail");
  document.querySelector("#categoryCustomerDoorLabel").textContent =
    categoryText("doorNumber");
  document.querySelector("#categoryCustomerStreetLabel").textContent =
    categoryText("streetName");
  document.querySelector("#categoryCustomerPlaceLabel").textContent =
    categoryText("place");
  document.querySelector("#categoryCustomerLandmarkLabel").textContent =
    categoryText("nearestLandmark");
  document.querySelector("#sendCategoryOrder").textContent =
    categoryText("completeOrder");
  document.querySelector("#continueShoppingLink").textContent =
    categoryText("continueShopping");
  if (loadedCategoryProducts) {
    renderCategoryProducts(loadedCategoryProducts);
  }
  renderOrderCart();
  localStorage.setItem("siteLanguage", language);
}

async function loadCategoryProducts() {
  window.renderCatalogSkeleton(pageRoot);
  try {
    const response = await fetch(`./data/${pageCategory}.json`);
    if (!response.ok) {
      throw new Error(
        `Unable to load ${pageCategory}.json: ${response.status}`,
      );
    }
    const products = await response.json();
    if (!Array.isArray(products)) {
      throw new TypeError(`Invalid product catalog: ${pageCategory}.json`);
    }
    loadedCategoryProducts = products;
    renderCategoryProducts(products);
  } catch (error) {
    console.error(`Unable to load the ${pageCategory} catalog.`, error);
    pageRoot.setAttribute("aria-busy", "false");
    pageRoot.innerHTML = `<div class="catalog-error" role="alert"><p>${categoryText("loadError")}</p><button class="btn btn-primary-custom" id="retryCatalog">${categoryText("retry")}</button></div>`;
    document
      .querySelector("#retryCatalog")
      .addEventListener("click", loadCategoryProducts, { once: true });
  }
}

pageRoot.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-to-order]");
  if (addButton) {
    addProductToOrder(addButton.dataset.addToOrder);
  }
});

renderOrderCartShell();
document
  .querySelector("#categoryOrderDrawer")
  ?.addEventListener("click", (event) => {
    const quantityButton = event.target.closest("[data-cart-change]");
    if (quantityButton) {
      updateOrderItem(
        quantityButton.dataset.cartKey,
        Number(quantityButton.dataset.cartChange),
      );
      return;
    }
    const removeButton = event.target.closest("[data-cart-remove]");
    if (removeButton) {
      updateOrderItem(removeButton.dataset.cartRemove, -99);
    }
  });

document
  .querySelector("#categoryCustomerForm")
  ?.addEventListener("submit", handleCategoryOrderSubmission);

window.addEventListener("storage", (event) => {
  if (event.key === cartStorageKey) {
    orderCart = loadOrderCart();
    renderOrderCart();
  }
});

pageRoot.addEventListener("change", (event) => {
  if (event.target.matches("[data-order-size]")) {
    const productId = event.target.dataset.orderSize;
    selectedCategorySizes.set(productId, event.target.value);
    updateCategorySizePrice(productId);
  } else if (event.target.matches("[data-order-quantity]")) {
    categoryQuantities.set(
      event.target.dataset.orderQuantity,
      Number.parseInt(event.target.value, 10) || 1,
    );
  }
});

document.querySelector("#languageToggle").addEventListener("click", () => {
  applyCategoryLanguage(document.documentElement.lang === "en" ? "ta" : "en");
});

applyCategoryLanguage(categoryLanguage);
loadCategoryProducts();
