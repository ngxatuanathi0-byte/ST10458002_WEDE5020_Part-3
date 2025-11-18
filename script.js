/* ACCORDION */
const buttons = document.querySelectorAll(".accordion-btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.style.display =
      btn.nextElementSibling.style.display === "block" ? "none" : "block";
  });
});

/* DYNAMIC PRODUCTS */
const products = [
  { name: "Chocolate Cake" },
  { name: "Vanilla Cupcake" },
  { name: "Croissant" },
  { name: "Blueberry Muffin" },
  { name: "Banana Bread" }
];

function loadProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach(p => {
    const item = document.createElement("p");
    item.textContent = p.name;
    list.appendChild(item);
  });
}
loadProducts();

/* SEARCH FILTER */
document.getElementById("search").addEventListener("input", function() {
  const value = this.value.toLowerCase();
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products
    .filter(p => p.name.toLowerCase().includes(value))
    .forEach(p => {
      const item = document.createElement("p");
      item.textContent = p.name;
      list.appendChild(item);
    });
});

/* LIGHTBOX */
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.innerHTML = <img src="${img.src}">;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

/* FORM VALIDATION */
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message").value.trim();

  if (!name || !email || !msg) {
    alert("Please fill in all fields.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email.");
    return false;
  }

return true;
}