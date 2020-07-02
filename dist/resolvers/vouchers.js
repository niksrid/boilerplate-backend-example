"use strict";
exports.__esModule = true;
exports.Vouchers = void 0;
var schema_1 = require("@nexus/schema");
exports.Vouchers = schema_1.objectType({
    name: 'voucher',
    definition: function (t) {
        t.model.id();
        t.model.cart({ type: 'cart' });
        t.model.cost();
        t.model.validity_date();
        t.model.voucher_no();
    }
});
