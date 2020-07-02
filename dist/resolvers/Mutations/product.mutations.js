"use strict";
exports.__esModule = true;
exports.productMutations = void 0;
var schema_1 = require("@nexus/schema");
exports.productMutations = schema_1.extendType({
    type: 'Mutation',
    definition: function (t) {
        t.crud.createOneproduct({
            alias: 'createProduct',
            computedInputs: {
                discounted_cost: function (_a) {
                    var args = _a.args, ctx = _a.ctx, info = _a.info;
                    return (args.data.mrp - args.data.discount);
                },
                tax: function (_a) {
                    var args = _a.args, ctx = _a.ctx, info = _a.info;
                    return (0.18 * (args.data.mrp - args.data.discount));
                },
                total_cost: function (_a) {
                    var args = _a.args, ctx = _a.ctx, info = _a.info;
                    return (1.18 * (args.data.mrp - args.data.discount));
                }
            }
        });
    }
});
