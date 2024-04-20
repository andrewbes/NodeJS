module.exports = Review;
/**
 * Review constructor.
 * @constructor
 * @param {number} id - The unique identifier of the review.
 * @param {string} author - The author of the review.
 * @param {Date} date - The date of the review.
 * @param {string} comment - The text content of the review.
 * @param {number} rating - The rating of the review.
 */
function Review(id, author, date, comment, rating) {
    this.id = id;
    this.author = author;
    this.date = new Date(date);
    this.comment = comment;
    this.rating = rating;
}

Review.prototype.getId = function () {
    return this.id;
};

Review.prototype.getAuthor = function () {
    return this.author;
};

Review.prototype.getDate = function () {
    return this.date;
};

Review.prototype.getComment = function () {
    return this.comment;
};

Review.prototype.getRating = function () {
    return this.rating;
};

Review.generateRating = function (service, price, value, quality) {
    return {
        service: service,
        price: price,
        value: value,
        quality: quality
    };
};