"use strict";
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var schema_1 = require("./schema");
var context_1 = require("./context");
new graphql_yoga_1.GraphQLServer({ schema: schema_1.schema, context: context_1.createContext }).start(function () {
    console.log("Pokemon being served at: http://localhost:4000\n\u2B50\uFE0F");
});