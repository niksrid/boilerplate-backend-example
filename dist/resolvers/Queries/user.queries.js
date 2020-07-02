"use strict";
exports.__esModule = true;
exports.userQueries = void 0;
var schema_1 = require("@nexus/schema");
exports.userQueries = schema_1.extendType({
    type: 'Query',
    definition: function (t) {
        t.crud.user({
            type: 'user',
            alias: 'users',
            filtering: true,
            ordering: true
        });
    }
});
