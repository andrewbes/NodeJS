module.exports = Product;
/**
 * Product constructor.
 * @constructor
 * @param {string} id - The unique identifier of the product.
 * @param {string} name - The name of the product.
 * @param {string} description - The description of the product.
 * @param {number} price - The price of the product.
 * @param {string} brand - The brand of the product.
 * @param {Array<string>} sizes - The array of available sizes for the product.
 * @param {string} activeSize - The active size of the product.
 * @param {number} quantity - The quantity of the product in stock.
 * @param {Date} date - The date when the product was added.
 * @param {Array<Review>} reviews - The array of reviews for the product.
 * @param {Array<string>} images - The array of image URLs for the product.
 */
function Product(id, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = new Date(date);
    this.reviews = reviews;
    this.images = images;
}

Product.prototype.getId = function () {
    return this.id;
};

Product.prototype.getName = function () {
    return this.name;
};

Product.prototype.getDescription = function () {
    return this.description;
};

Product.prototype.getPrice = function () {
    return this.price;
};

Product.prototype.getBrand = function () {
    return this.brand;
};

Product.prototype.getSizes = function () {
    return this.sizes;
};

Product.prototype.getActiveSize = function () {
    return this.activeSize;
};

Product.prototype.getQuantity = function () {
    return this.quantity;
};

Product.prototype.getDate = function () {
    return this.date;
};

Product.prototype.getReviews = function () {
    return this.reviews;
};

Product.prototype.getImages = function () {
    return this.images;
};

