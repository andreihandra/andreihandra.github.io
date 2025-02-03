const add = "add"

function toggleFields(action) {
    let addDiv = document.getElementById("add");
    let removeDiv = document.getElementById("remove")
    if (action == add) {
        addDiv.style.display = "block";
        removeDiv.style.display = "none";
    } else {
        addDiv.style.display = "none";
        removeDiv.style.display = "block";
    }
}

function removeFood() {
    let title = document.getElementById("foodName").value;
    let foods = getFoodsFromStorage();
    let newFoods = foods.filter(food => food.title.toLowerCase() != title.toLowerCase());
    if (newFoods.length != foods.length) {
        setFoodsToStorage(newFoods);
        alert("Foods removed successfully");
        let res = confirm("Would you like to remove other foods?")
        if (res == false) {
            window.location.href = document.referrer || "index.html"
        }
    } else {
        alert(`There were no foods with the title of ${title}`);
    }

}

function addFood() {
    let title = document.getElementById("title").value;
    let image = document.getElementById("image").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;

    if(title == "" || image == "" || description == "" || price == "") {
        alert("All fields are mandatory");
    } else {
        let foods = getFoodsFromStorage();
        foods.push({title: title, image: image, description: description, price: `$${price}`});
        setFoodsToStorage(foods);
        alert("Item added successfully");
        let res = confirm("Would you like to add more items?");
        if (res == false) {
            window.history.back();
        }
    }
}

function getFoodsFromStorage(){
    return JSON.parse(localStorage.getItem("foods"));
}

function setFoodsToStorage(foods) {
    localStorage.setItem("foods",JSON.stringify(foods));
}
