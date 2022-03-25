export const FoodCard = (foodObj) => {
    let string = ""
    string += ` <div class="col-sm-6 g-4">
    <div class="card">
    <div class="h-100">
    <img src="./assets/images/${foodObj.imageURL}" class="card-img-top" alt="${foodObj.imageURL}">
    </div>
        <div class="card-body">
            <h5 class="card-title">${foodObj.name}</h5>
            <p class="card-text">${foodObj.description}</p>
            <p>Price: $${foodObj.price}</p>`
    if(foodObj.isVegetarian === true){
        string += `<image src="./assets/images/icon-veg.png" alt="vegetarian icon"></image>`;
    }
    string += `
        <form action="/action_page.php">
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="1" max="100">
        <input type="submit" value="Submit">
        </form>
        <button type="button" class="btn btn-primary">Example Bootstrap Button</button>
        </div>
        </div>
        </div>
    `
    return string
}
