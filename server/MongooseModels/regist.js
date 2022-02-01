"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regist = void 0;
var tslib_1 = require("tslib");
var mongoose_1 = tslib_1.__importDefault(require("mongoose"));
var RegistSchema = new mongoose_1.default.Schema({
    vaseId: {
        type: Number,
        required: true
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    text: {
        type: String
    }
}, {
    timestamps: { createdAt: true, updatedAt: false }
});
var Regist = mongoose_1.default.model('Regist', RegistSchema);
exports.Regist = Regist;
//# sourceMappingURL=regist.js.map