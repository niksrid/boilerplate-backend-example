"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Queries = void 0;
var productQueries = require("./product.queries");
var userQueries = require("./user.queries");
var storeQueries = require("./stores.queries");
exports.Queries = __assign(__assign(__assign({}, productQueries), userQueries), storeQueries);
