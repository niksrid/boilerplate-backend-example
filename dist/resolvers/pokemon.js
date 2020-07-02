"use strict";
exports.__esModule = true;
exports.Pokemon = void 0;
var schema_1 = require("@nexus/schema");
exports.Pokemon = schema_1.objectType({
    name: 'pokemon',
    definition: function (t) {
        t.model.id();
        t.model.name();
        t.model.pokedex();
        t.model.type();
    }
});
