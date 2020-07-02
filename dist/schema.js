"use strict";
exports.__esModule = true;
exports.schema = void 0;
var schema_1 = require("@nexus/schema");
var nexus_prisma_1 = require("nexus-prisma");
var allTypes = require("./resolvers");
var path_1 = require("path");
exports.schema = schema_1.makeSchema({
    types: [allTypes],
    plugins: [nexus_prisma_1.nexusPrismaPlugin({ experimentalCRUD: true, prismaClient: function (ctx) { return ctx.prisma; } })],
    outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts'
    },
    typegenAutoConfig: {
        sources: [
            {
                source: '@prisma/client',
                alias: 'prisma'
            },
            {
                source: path_1.join(__dirname, 'types.ts'),
                alias: 'ctx'
            },
        ],
        contextType: 'ctx.Context'
    }
});
