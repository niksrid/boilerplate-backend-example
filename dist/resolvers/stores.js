"use strict";
exports.__esModule = true;
exports.Stores = void 0;
var schema_1 = require("@nexus/schema");
exports.Stores = schema_1.objectType({
    name: 'store',
    definition: function (t) {
        t.model.id();
        t.model.address();
        t.model.approved();
        t.model.blocked();
        t.model.lat();
        t.model.lng();
        t.model.name();
        t.model.product();
    }
});
