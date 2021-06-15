"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerController = void 0;
var CrudController_1 = require("../CrudController");
var PartnerController = /** @class */ (function (_super) {
    __extends(PartnerController, _super);
    function PartnerController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartnerController.prototype.create = function (req, res) {
        throw new Error("Method not implemented.");
    };
    PartnerController.prototype.read = function (req, res) {
        res.json({ message: 'GET /partner request received' });
    };
    PartnerController.prototype.update = function (req, res) {
        throw new Error("Method not implemented.");
    };
    PartnerController.prototype.delete = function (req, res) {
        throw new Error("Method not implemented.");
    };
    return PartnerController;
}(CrudController_1.CrudController));
exports.PartnerController = PartnerController;
