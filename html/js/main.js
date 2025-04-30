//Elements by id
const btnLoadProductos = document.getElementById("btn-load");
const cardsContainer = document.getElementById("card-container");

//URL
const URLMain = "https://api.escuelajs.co/api/v1/products";
console.log(btnLoadProductos);

const LoadProducts = e => {
    console.log("click");
    const options = { "method": "Get" };
    fetch(URLMain, options)
        .then((res) => {
            console.log(res);
            res.json()
                .then((res) => {
                    console.log(res.length);
                    createCards(res);
                })
                .catch();
        })
        .catch((err) => {

        })


}
//createCards
function createCards(prods) {
    prods.forEach(e => {
        const img = e.images && e.images[1] ? e.images[1] : e.images[0];
        console.log(img);
        
        cardsContainer.insertAdjacentHTML("beforeend",
            `
        <div class="col">
          <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" src="${img}" alt="${e.tittle}" width="100%" height="225" style="object-fit: cover;">
            <div class="card-body">
              <p class="card-text"> ${e.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">$ ${e.price}</small>
              </div>
            </div>
          </div>
        </div>
        `
        )
    });
}
//Click
btnLoadProductos.addEventListener("click", LoadProducts);
