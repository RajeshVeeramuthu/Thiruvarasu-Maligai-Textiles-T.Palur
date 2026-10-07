async function loadComponent(path, target) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Unable to load ${path}: ${response.status}`);
  }
  target.innerHTML = await response.text();
}

function loadScript(path) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = path;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Unable to load ${path}.`));
    document.body.append(script);
  });
}

async function initializePageComponents() {
  try {
    await Promise.all([
      loadComponent(
        "./components/header.html",
        document.querySelector("#siteHeader"),
      ),
      loadComponent(
        "./components/footer.html",
        document.querySelector("#siteFooter"),
      ),
      loadComponent(
        "./components/skeleton.html",
        document.querySelector("#sharedSkeleton"),
      ),
    ]);
    await loadScript("./js/catalog-skeleton.js");
    await loadScript("./js/function.js");
  } catch (error) {
    console.error("Unable to initialize the homepage components.", error);
    const errorMessage = document.createElement("p");
    errorMessage.className = "component-load-error";
    errorMessage.setAttribute("role", "alert");
    errorMessage.textContent =
      "Some page content could not be loaded. Please refresh the page.";
    document.querySelector("main").prepend(errorMessage);
  }
}

initializePageComponents();
