"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.userMutations = void 0;
var schema_1 = require("@nexus/schema");
exports.userMutations = schema_1.extendType({
    type: 'Mutation',
    definition: function (t) {
        t.crud.createOneuser({
            alias: 'createUser',
            resolve: function (root, args, ctx, info, originalResolve) {
                return __awaiter(this, void 0, void 0, function () {
                    var res, cart, _a, _b, _c, _d, _e, _f, wishlist, _g, _h, _j, _k, _l, _m;
                    return __generator(this, function (_o) {
                        switch (_o.label) {
                            case 0: return [4 /*yield*/, originalResolve(root, args, ctx, info)];
                            case 1:
                                res = _o.sent();
                                _b = (_a = ctx.prisma.cart).create;
                                _c = {};
                                _d = {};
                                _e = {};
                                _f = {};
                                return [4 /*yield*/, res.id];
                            case 2: return [4 /*yield*/, _b.apply(_a, [(_c.data = (_d.users = (_e.connect = (_f.id = _o.sent(), _f), _e), _d), _c)])];
                            case 3:
                                cart = _o.sent();
                                _h = (_g = ctx.prisma.wishlist).create;
                                _j = {};
                                _k = {};
                                _l = {};
                                _m = {};
                                return [4 /*yield*/, res.id];
                            case 4: return [4 /*yield*/, _h.apply(_g, [(_j.data = (_k.users = (_l.connect = (_m.id = _o.sent(), _m), _l), _k), _j)])];
                            case 5:
                                wishlist = _o.sent();
                                return [2 /*return*/, res];
                        }
                    });
                });
            }
        });
    }
});