var Pizza = document.getElementById('shopPizza');
var btnPizza = document.getElementById('btnPizza');
var subPizza = document.getElementsByClassName('subPizza');
var Burger = document.getElementById('shopBurger');
var btnBurger = document.getElementById('btnBurger');
var subBurger = document.getElementsByClassName('subBurger');
var Pasta = document.getElementById('shopPasta');
var btnPasta = document.getElementById('btnPasta');
var subPasta = document.getElementsByClassName('subPasta');
var Sandwich = document.getElementById('shopSandwich');
var btnSandwich = document.getElementById('btnSandwich');
var subSandwich = document.getElementsByClassName('subSandwich');
var Fries = document.getElementById('shopFries');
var btnFries = document.getElementById('btnFries');
var subFries = document.getElementsByClassName('subFries');
var Soup = document.getElementById('shopSoup');
var btnSoup = document.getElementById('btnSoup');
var subSoup = document.getElementsByClassName('subSoup');
var Shakes = document.getElementById('shopShakes');
var btnShakes = document.getElementById('btnShakes');
var subShakes = document.getElementsByClassName('subShakes');
var Coffee = document.getElementById('shopCoffee');
var btnCoffee = document.getElementById('btnCoffee');
var subCoffee = document.getElementsByClassName('subCoffee');
var Drinks = document.getElementById('shopDrinks');
var btnDrinks = document.getElementById('btnDrinks');
var subDrinks = document.getElementsByClassName('subDrinks');
var Mojito = document.getElementById('shopMojito');
var btnMojito = document.getElementById('btnMojito');
var subMojito = document.getElementsByClassName('subMojito');
var display = 0;
function showhidePizza(){
    if(display == 1){
        Pizza.style.display = 'block';
        display = 0;
        btnPizza.innerHTML = `<img src="images/left.png" class="imgl"></img>`; 
    }
    else{
        Pizza.style.display = 'none';
        display = 1;
        btnPizza.innerHTML = `<img src="images/down.png" class="imgd"></img>`;
    }
};
function showhideBurger(){
    if(display == 1){
        Burger.style.display = 'block';
        display = 0;
        btnBurger.innerHTML = `<img src="images/left.png" class="imgl"></img>`;

    }
    else{
        Burger.style.display = 'none';
        display = 1;
        btnBurger.innerHTML = `<img src="images/down.png" class="imgd"></img>`;        
    }
};
function showhidePasta(){
    if(display == 1){
        Pasta.style.display = 'block';
        display = 0;
        btnPasta.innerHTML = `<img src="images/left.png" class="imgl"></img>`;       
    }
    else{
        Pasta.style.display = 'none';
        display = 1;
        btnPasta.innerHTML = `<img src="images/down.png" class="imgd"></img>`;

    }
};
function showhideSandwich(){
    if(display == 1){
        Sandwich.style.display = 'block';
        display = 0;
        btnSandwich.innerHTML = `<img src="images/left.png" class="imgl"></img>`;
    }
    else{
        Sandwich.style.display = 'none';
        display = 1;
        btnSandwich.innerHTML = `<img src="images/down.png" class="imgd"></img>`;
    }
};
function showhideFries(){
    if(display == 1){
        Fries.style.display = 'block';
        display = 0;
        btnFries.innerHTML = `<img src="images/left.png" class="imgl"></img>`;
    }
    else{
        Fries.style.display = 'none';
        display = 1;
        btnFries.innerHTML = `<img src="images/down.png" class="imgd"></img>`;
    }
};
function showhideSoup(){
    if(display == 1){
        Soup.style.display = 'block';
        display = 0;
        btnSoup.innerHTML = `<img src="images/left.png" class="imgl"></img>`;
    }
    else{
        Soup.style.display = 'none';
        display = 1;
        btnSoup.innerHTML = `<img src="images/down.png" class="imgd"></img>`;
    }
};
function showhideShakes(){
    if(display == 1){
        Shakes.style.display = 'block';
        display = 0;
        btnShakes.innerHTML = `<img src="images/left.png" class="imgl"></img>`;
    }
    else{
        Shakes.style.display = 'none';
        display = 1;
        btnShakes.innerHTML = `<img src="images/down.png" class="imgd"></img>`;
    }
};
function showhideCoffee(){
    if(display == 1){
        Coffee.style.display = 'block';
        display = 0;
        btnCoffee.innerHTML = `<img src="images/left.png" class="imgl"></img>`;
    }
    else{
        Coffee.style.display = 'none';
        display = 1;
        btnCoffee.innerHTML = `<img src="images/down.png" class="imgd"></img>`;
    }
};
function showhideDrinks(){
    if(display == 1){
        Drinks.style.display = 'block';
        display = 0;
        btnDrinks.innerHTML = `<img src="images/left.png" class="imgl"></img>`;
    }
    else{
        Drinks.style.display = 'none';
        display = 1;
        btnDrinks.innerHTML = `<img src="images/down.png" class="imgd"></img>`;
    }
};
function showhideMojito(){
    if(display == 1){
        Mojito.style.display = 'block';
        display = 0;
        btnMojito.innerHTML = `<img src="images/left.png" class="imgl"></img>`;
    }
    else{
        Mojito.style.display = 'none';
        display = 1;
        btnMojito.innerHTML = `<img src="images/down.png" class="imgd"></img>`;
    }
};