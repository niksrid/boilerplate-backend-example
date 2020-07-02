"use strict";
exports.__esModule = true;
exports.productQueries = void 0;
var schema_1 = require("@nexus/schema");
exports.productQueries = schema_1.extendType({
    type: 'Query',
    definition: function (t) {
        t.crud.product({
            filtering: true,
            ordering: true,
            type: 'product'
        });
    }
});
