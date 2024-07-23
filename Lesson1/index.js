const Product = require('./product');
const Review = require('./review');

var product = new Product(
    "001",
    "T-shirt",
    "Cotton T-shirt for everyday wear",
    19.99,
    "Nike",
    ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    'M',
    100,
    "2024-04-13 10:00:00",
    [new Review(1, 'John Doe', '2024-04-13', 'Great product description!', Review.generateRating(5, 4, 5, 5))],
    ["image1.jpg", "image2.jpg"]
);

console.log(product.getId());
console.log(product.getName());
console.log(product.getDescription());
console.log(product.getPrice());
console.log(product.getBrand());
console.log(product.getSizes());
console.log(product.getActiveSize());
console.log(product.getQuantity());
console.log(product.getDate());
product.getReviews().forEach(function (review) {
    console.log("review: {")
    for (let key in review) {
        if (review.hasOwnProperty(key) && key !== 'rating') {
            console.log(key + ': ' + review[key] + ",");
        }
    }
    console.log("rating:", review.rating, "}")
});
console.log(product.getImages());
//TODO:
