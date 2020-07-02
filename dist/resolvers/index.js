"use strict";
exports.__esModule = true;
exports.resolvers = void 0;
var Mutations_1 = require("./Mutations");
var Queries_1 = require("./Queries");
var cart_1 = require("./cart");
var vouchers_1 = require("./vouchers");
var products_1 = require("./products");
var users_1 = require("./users");
var stores_1 = require("./stores");
exports.resolvers = {
    Mutations: Mutations_1.Mutations,
    //   Subscriptions,
    Queries: Queries_1.Queries,
    Cart: cart_1.Cart,
    Vouchers: vouchers_1.Vouchers,
    ProductQuantites: products_1.ProductQuantites,
    ProductImages: products_1.ProductImages,
    ProductRating: products_1.ProductRating,
    Stores: stores_1.Stores,
    Products: products_1.Products,
    Users: users_1.Users,
    UserAddresses: users_1.UserAddresses,
    UserWishlist: users_1.UserWishlist
};
