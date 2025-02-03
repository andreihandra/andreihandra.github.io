const SERVICE = "Service"

document.addEventListener("DOMContentLoaded", function() {

    populateUpperMenu()

    let priceRange = document.getElementById("price-range");

    function initializeSlider() {
        onSliderValueChange()
        priceRange.addEventListener("input", onSliderValueChange)
    }

    initializeSlider();

    let foods = JSON.parse(localStorage.getItem("foods"));

    if (foods.length == 0) {
        initializeFoods()
        foods = getFoodsFromStorage();
    }

    populateDishes(foods);
});

function loseFocus(menu) {
    menu.blur();
}

function onSliderValueChange() {
    let value = document.getElementById("price-range").value;
    document.getElementById("start-label").innerHTML = `$${value}`;
}

function getFoodsFromStorage() {
    return JSON.parse(localStorage.getItem("foods"));
}

function setFoodsToStorage(foods) {
    localStorage.setItem("foods", JSON.stringify(foods));
}

function initializeFoods() {
    const foods = [
        { title: "Pasta Carbonara", image:"carbonara.jpeg", description: "Second courses", price: "$12"},
        { title: "Chicken soup", image:"carbonara.jpeg", description: "Entrees", price: "$6"},
        { title: "Vitamin Salad", image:"carbonara.jpeg", description: "Salads", price: "$9"},
        { title: "Pasta with Walnut", image:"carbonara.jpeg", description: "Second courses", price: "$16"},
        { title: "Pizza", image:"carbonara.jpeg", description: "First dish", price: "$20"},
        { title: "Classic Hamburger", image:"carbonara.jpeg", description: "First dish", price: "$25"},
        { title: "Garlic Bread", image:"carbonara.jpeg", description: "Entrees", price: "$4"},
        { title: "Lasagna", image:"carbonara.jpeg", description: "First dish", price: "$21"},
    ]
    setFoodsToStorage(foods);
}

function populateDishes(foods) {
    let foodSection = document.getElementById("food-section");

    foods.forEach(food => {
        let foodDiv = document.createElement("div");
        foodDiv.classList.add("food");

        let img = document.createElement("img");
        img.classList.add("food-image");
        img.src = food.image;
        img.alt = food.title;

        let title = document.createElement("h3");
        title.innerText = food.title;

        let description = document.createElement("h5");
        description.innerText = food.description;

        let price = document.createElement("h4");
        price.innerText = food.price;

        foodDiv.appendChild(img);
        foodDiv.appendChild(title);
        foodDiv.appendChild(description);
        foodDiv.appendChild(price);

        foodSection.appendChild(foodDiv);  
    });
}

function populateUpperMenu() {
    let upperMenu = document.getElementById("upper-menu");
    let buttons = getUpperMenuButtons();

    buttons.forEach((button, index) => {
        let btn = document.createElement("button");
        btn.classList.add("upper-menu-button");
        btn.innerText = button;
        if(button == SERVICE) {
            btn.addEventListener("click", function() {
                location.href = "dashboard.html";
            })
        }

        upperMenu.appendChild(btn);

        if (index != buttons.length - 1) {
            let span = document.createElement("span");
            span.classList.add("dot");
            upperMenu.appendChild(span);
        }

    });
}

function getUpperMenuButtons() {
    return ["Home", "About", "Service", "Blog", "Contacts" ]
}
