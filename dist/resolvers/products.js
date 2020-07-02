"use strict";
exports.__esModule = true;
exports.ProductRating = exports.ProductQuantites = exports.ProductImages = exports.Products = void 0;
var schema_1 = require("@nexus/schema");
exports.Products = schema_1.objectType({
    name: 'product',
    definition: function (t) {
        t.model.id();
        t.model.cost();
        t.model.description();
        t.model.discount();
        t.model.discounted_cost();
        t.model.mrp();
        t.model.order();
        t.model.product_image();
        t.model.product_quantity();
        t.model.product_rating();
        t.model.tax();
        t.model.title();
        t.model.total_cost();
        t.model.store();
        t.model.store_id();
    }
});
exports.ProductImages = schema_1.objectType({
    name: 'product_image',
    definition: function (t) {
        t.model.id();
        t.model.image();
        t.model.product_id();
        t.model.product({ type: 'product' });
    }
});
exports.ProductQuantites = schema_1.objectType({
    name: 'product_quantity',
    definition: function (t) {
        t.model.id();
        t.model.cart({ type: 'cart' });
        t.model.product_id();
        t.model.product_qty();
        t.model.product({ type: 'product' });
    }
});
exports.ProductRating = schema_1.objectType({
    name: 'product_rating',
    definition: function (t) {
        t.model.id();
        t.model.product_id();
        t.model.product();
        t.model.rating();
        t.model.user_id();
        t.model.user();
    }
});
