"use strict";
exports.__esModule = true;
exports.Cart = void 0;
var schema_1 = require("@nexus/schema");
exports.Cart = schema_1.objectType({
    name: 'cart',
    definition: function (t) {
        t.model.id();
        t.model.product_quantity();
        t.model.product();
        // t.model.co({alias:"coupons"})
        t.model.shipping_cost();
        t.model.total_cost();
        t.model.total_discount();
        t.model.user_id();
        t.model.voucher();
        t.model.user();
    }
});
