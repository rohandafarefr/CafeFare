let label = document.getElementById('label');
let cartcont = document.getElementById('cartcont');
let contcart = document.getElementById('contcart');
let cartDisplay = document.getElementById('cart-container');
let ShoppingCart = document.getElementById('shopping-cart');
let basket = JSON.parse(localStorage.getItem("data")) || [];
let calculation =()=>{
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x, y) => x + y, 0);
}
calculation();

let generateCartItems = () =>{
    if(basket.length !== 0){
        cartDisplay.style.display = 'block';
        return ( ShoppingCart.innerHTML = basket.map((x) =>{
            let {id, item } = x;
            let search = showItemData.find((y) => y.id === id) || [];
            let {img,Name,Price} = search
            return `
            <div class="cart-item">
            <img src=${img} class="imgc" />
            <div class="details">
            <div class="title-price-x">
            <h4 class="title-price">
                <p class="cname">${Name}</p>
                <p class="cart-item-price">₹ ${Price}</p>
            </h4>
            <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
            </div>

            <div class="buttons1">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">${item}</div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>

            <h3 class="h3price">₹ ${item * search.Price}</h3>
            </div>
            </div>
            `;
            
        }));
    }
    else{
        cartDisplay.style.display = 'none';
        ShoppingCart.innerHTML = ''
        label.innerHTML = `
        <h2 class="h2fc">Cart is Empty</h2>
        <a href="menu.html">
        <button class="HomeBtn">Back to Menu</button>
        </a>
        `;
    }
};

generateCartItems();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem);

    if(search === undefined){
        basket.push({
            id: selectedItem,
            item: 1,
        });
    }
    else{
        search.item +=1;
    }

    generateCartItems();
    update(selectedItem);
    localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem);
    if(search === undefined)return;
    else if(search.item === 0) return;
    else{
        search.item -=1;
    }
    
    update(selectedItem);
    basket = basket.filter((x) => x.item !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
    let search = basket.find((x)=> x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();
};

let removeItem = (id) =>{
    let selectedItem = id;
    basket = basket.filter((x)=>x.id !== selectedItem);
    generateCartItems();
    TotalAmount();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
    basket = []
    generateCartItems();
    calculation();
    TotalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
};
let placed= () => {
    alert("Order Placed Successfully!!");
    window.location = '../index.html';
    basket = []
    generateCartItems();
    calculation();
    TotalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () =>{
    if (basket.length !==0) {
        let amount = basket.map((x) => {
            let { item, id } = x;
            let search = showItemData.find((y) => y.id === id) || [];
            return item * search.Price;
        }).reduce((x,y) => x + y , 0)
        generateCartItems();
        cartcont.innerHTML = `
        <div class="contcart">
        <h2 class="tb">Total : ₹ ${amount}</h2>
        <button onclick="clearCart()" class="removeAll">Clear Cart</button>
        <button onclick="placed()" class="checkout">Place Order</button>
        </div>
        `
        
    }
    else return;
};
TotalAmount();