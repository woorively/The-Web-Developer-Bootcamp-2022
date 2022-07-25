// To make an object literal:
let product = {
    name: 'Gummy Bears',
    inStock: true,
    price: 1.99,
    flavors: ['grape', 'apple', 'cherry']
}

// To retrieve a value:
product.price; // 1.99
product["price"]; //7

//updating values
product.code = "SB9C511";
product["price"] = 2.99;

// Arrays + Objects
const shopping = [
    {
        product: 'candy',
        price: 3,
    },
    {
        product: 'water',
        price: 5,
    },
    {
        product: 'apple',
        price: 2,
    }
]