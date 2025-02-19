document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "https://api.escuelajs.co/api/v1/categories";
    const categoriesContainer = document.getElementById("categories");

    fetch(API_URL)
        .then(response => response.json())
        .then(categories => {
            categories.forEach(category => {
                const categoryCard = `
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img src="${category.image}" class="card-img-top" alt="${category.name}">
                            <div class="card-body">
                                <h5 class="card-title text-center">${category.name}</h5>
                            </div>
                        </div>
                    </div>
                `;
                categoriesContainer.innerHTML += categoryCard;
            });
        })
        .catch(error => console.error("Error al obtener categorías:", error));
});

