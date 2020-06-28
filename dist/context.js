"use strict";
exports.__esModule = true;
exports.createContext = void 0;
var client_1 = require("@prisma/client");
var graphql_yoga_1 = require("graphql-yoga");
var prisma = new client_1.PrismaClient();
var pubsub = new graphql_yoga_1.PubSub();
function createContext() {
    return { prisma: prisma, pubsub: pubsub };
}
exports.createContext = createContext;
