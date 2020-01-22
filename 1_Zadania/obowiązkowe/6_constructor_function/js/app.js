// Exercise 0

console.log('---------- Exercise 0 ----------');

function Basket() {
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function(name, price) {
    this.products.push({ name, price });
}

Basket.prototype.showBasket = function() {
    let sum = 0;

    for(let product of this.products) {
        console.log(`${ product.name } | ${ product.price }`);

        sum += product.price;
    }

    console.log(sum);
}

let aliceBasket = new Basket();

aliceBasket.addProduct('pomidor', 10);
aliceBasket.addProduct('arbuz', 40);
aliceBasket.showBasket();

let bruceBasket = new Basket();

bruceBasket.addProduct('ryż', 10);
bruceBasket.addProduct('grzyby mun', 50);
bruceBasket.addProduct('tofu', 20);
bruceBasket.showBasket();