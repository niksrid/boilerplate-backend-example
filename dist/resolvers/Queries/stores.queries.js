"use strict";
exports.__esModule = true;
exports.storeQueries = void 0;
var schema_1 = require("@nexus/schema");
exports.storeQueries = schema_1.extendType({
    type: 'Query',
    definition: function (t) {
        t.crud.store({
            filtering: true,
            ordering: true,
            type: 'store'
        });
    }
});
