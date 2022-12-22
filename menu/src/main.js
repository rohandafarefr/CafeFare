    let TotalB = document.getElementById('tb1');
    let downCart = document.getElementById('dcart');
    let basket = JSON.parse(localStorage.getItem("data")) || [];
    let shopPizza = document.getElementById('shopPizza')
    let generateShop =()=>{
        return (shopPizza.innerHTML = showPizzaData
            .map((x)=>{
                let{id,Name,Price,img} =x
                let search = basket.find((x)=>x.id === id) || []
            return `
            <div id=product-id-${id} class="item">
            <img class="img" src=${img} alt="">
                <div class="details">
                    <h3 class="name">${Name}</h3>
                    <div class="price-quantity">
                        <h2 class="price">₹ ${Price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join("")); 
    };
    generateShop();
    let shopBurger = document.getElementById('shopBurger')

    let generateShop1 =()=>{
        return (shopBurger.innerHTML = showBurgerData
            .map((x)=>{
                let{id,Name,Price,img} =x
                let search = basket.find((x)=>x.id === id) || []
            return `
            <div id=product-id-${id} class="item">
            <img class="img" src=${img} alt="">
                <div class="details">
                    <h3 class="name">${Name}</h3>
                    <div class="price-quantity">
                        <h2 class="price">₹ ${Price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join("")); 
    };
    generateShop1();
    let shopPasta = document.getElementById('shopPasta')

    let generateShop2 =()=>{
        return (shopPasta.innerHTML = showPastaData
            .map((x)=>{
                let{id,Name,Price,img} =x
                let search = basket.find((x)=>x.id === id) || []
            return `
            <div id=product-id-${id} class="item">
            <img class="img" src=${img} alt="">
                <div class="details">
                    <h3 class="name">${Name}</h3>
                    <div class="price-quantity">
                        <h2 class="price">₹ ${Price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join("")); 
    };
    generateShop2();

    let shopSandwich = document.getElementById('shopSandwich')

    let generateShop3 =()=>{
        return (shopSandwich.innerHTML = showSandwichData
            .map((x)=>{
                let{id,Name,Price,img} =x
                let search = basket.find((x)=>x.id === id) || []
            return `
            <div id=product-id-${id} class="item">
            <img class="img" src=${img} alt="">
                <div class="details">
                    <h3 class="name">${Name}</h3>
                    <div class="price-quantity">
                        <h2 class="price">₹ ${Price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join("")); 
    };
    generateShop3();

    let shopFries = document.getElementById('shopFries')

    let generateShop4 =()=>{
        return (shopFries.innerHTML = showFriesData
            .map((x)=>{
                let{id,Name,Price,img} =x
                let search = basket.find((x)=>x.id === id) || []
            return `
            <div id=product-id-${id} class="item">
            <img class="img" src=${img} alt="">
                <div class="details">
                    <h3 class="name">${Name}</h3>
                    <div class="price-quantity">
                        <h2 class="price">₹ ${Price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join("")); 
    };
    generateShop4();

    let shopSoup = document.getElementById('shopSoup')

    let generateShop5 =()=>{
        return (shopSoup.innerHTML = showSoupData
            .map((x)=>{
                let{id,Name,Price,img} =x
                let search = basket.find((x)=>x.id === id) || []
            return `
            <div id=product-id-${id} class="item">
            <img class="img" src=${img} alt="">
                <div class="details">
                    <h3 class="name">${Name}</h3>
                    <div class="price-quantity">
                        <h2 class="price">₹ ${Price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join("")); 
    };
    generateShop5();
    let shopShakes = document.getElementById('shopShakes')

    let generateShop6 =()=>{
        return (shopShakes.innerHTML = showShakesData
            .map((x)=>{
                let{id,Name,Price,img} =x
                let search = basket.find((x)=>x.id === id) || []
            return `
            <div id=product-id-${id} class="item">
            <img class="img" src=${img} alt="">
                <div class="details">
                    <h3 class="name">${Name}</h3>
                    <div class="price-quantity">
                        <h2 class="price">₹ ${Price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join("")); 
    };
    generateShop6();

    let shopCoffee = document.getElementById('shopCoffee')

    let generateShop7 =()=>{
        return (shopCoffee.innerHTML = showCoffeeData
            .map((x)=>{
                let{id,Name,Price,img} =x
                let search = basket.find((x)=>x.id === id) || []
            return `
            <div id=product-id-${id} class="item">
            <img class="img" src=${img} alt="">
                <div class="details">
                    <h3 class="name">${Name}</h3>
                    <div class="price-quantity">
                        <h2 class="price">₹ ${Price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join("")); 
    };
    generateShop7();

    let shopDrinks = document.getElementById('shopDrinks')

    let generateShop8 =()=>{
        return (shopDrinks.innerHTML = showDrinksData
            .map((x)=>{
                let{id,Name,Price,img} =x
                let search = basket.find((x)=>x.id === id) || []
            return `
            <div id=product-id-${id} class="item">
            <img class="img" src=${img} alt="">
                <div class="details">
                    <h3 class="name">${Name}</h3>
                    <div class="price-quantity">
                        <h2 class="price">₹ ${Price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join("")); 
    };
    generateShop8();

    let shopMojito = document.getElementById('shopMojito')

    let generateShop9 =()=>{
        return (shopMojito.innerHTML = showMojitoData
            .map((x)=>{
                let{id,Name,Price,img} =x
                let search = basket.find((x)=>x.id === id) || []
            return `
            <div id=product-id-${id} class="item">
            <img class="img" src=${img} alt="">
                <div class="details">
                    <h3 class="name">${Name}</h3>
                    <div class="price-quantity">
                        <h2 class="price">₹ ${Price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join("")); 
    };
    generateShop9();


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

        // console.log(basket);
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
        // console.log(basket);
        localStorage.setItem("data", JSON.stringify(basket));
    };
    let update = (id) => {
        let search = basket.find((x)=> x.id === id);
        // console.log(search.item);
        document.getElementById(id).innerHTML = search.item;
        calculation();
        TotalAmount();
    };

    let calculation =()=>{
        let cartIcon = document.getElementById('cartAmount');
        let cartIcon1 = document.getElementById('cartAmount1');
        cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x, y) => x + y, 0);
        cartIcon1.innerHTML = basket.map((x)=>x.item).reduce((x, y) => x + y, 0);
    }
    calculation();

    let TotalAmount = () =>{
        if (basket.length !==0) {
            downCart.style.display = 'block';
            let amount = basket.map((x) => {
                let { item, id } = x;
                let search = showItemData.find((y) => y.id === id) || [];
                return item * search.Price;
            }).reduce((x,y) => x + y , 0)
            TotalB.innerHTML = `
            <div class="tb2">
            <h2 class="tb1">Total : ₹ ${amount}</h2>
            </div>
            `
            
        }
        else return;
    };
    TotalAmount();
    
