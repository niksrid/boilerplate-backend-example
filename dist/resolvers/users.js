"use strict";
exports.__esModule = true;
exports.UserWishlist = exports.UserAddresses = exports.Users = void 0;
var schema_1 = require("@nexus/schema");
exports.Users = schema_1.objectType({
    name: 'user',
    definition: function (t) {
        t.model.id();
        t.model.cart();
        t.model.blocked();
        t.model.full_name();
        t.model.mobile_no();
        t.model.order();
        t.model.product_rating();
        t.model.user_address();
        t.model.wishlist();
    }
});
exports.UserAddresses = schema_1.objectType({
    name: 'user_address',
    definition: function (t) {
        t.model.alias();
        t.model.city();
        t.model.first_name();
        t.model.id();
        t.model.last_name();
        t.model.poc_no();
        t.model.state();
        t.model.street_address();
        t.model.user_id();
        t.model.user();
        t.model.zip_code();
    }
});
exports.UserWishlist = schema_1.objectType({
    name: 'wishlist',
    definition: function (t) {
        t.model.user_id();
        t.model.product();
        t.model.id();
        t.model.user();
    }
});
