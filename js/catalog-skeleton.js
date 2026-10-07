window.renderCatalogSkeleton = function (container, count = 4) {
  let template = document.querySelector("#catalogSkeletonTemplate");
  if (!template) {
    template = document.createElement("template");
    template.innerHTML = `
      <div class="product-card skeleton-card" aria-hidden="true">
          <div class="product-image-wrap skeleton-block"></div>
          <div class="product-card-body">
              <span class="skeleton-line skeleton-short"></span>
              <span class="skeleton-line"></span>
              <span class="skeleton-line skeleton-medium"></span>
          </div>
      </div>`;
  }
  container.setAttribute("aria-busy", "true");
  container.replaceChildren(
    ...Array.from({ length: count }, () => template.content.cloneNode(true)),
  );
};
