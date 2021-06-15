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
var geo_1 = require("../../common/geo");
var constants = require("../../config/constants");
var PartnerController = /** @class */ (function (_super) {
    __extends(PartnerController, _super);
    function PartnerController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartnerController.prototype.create = function (req, res) {
        throw new Error("Method not implemented.");
    };
    PartnerController.prototype.read = function (req, res) {
        var fs = require('fs');
        var _ = require('underscore');
        var partners = JSON.parse(fs.readFileSync(constants.DB)).partners;
        var org = req.query.org;
        var kilometers = req.query.kms;
        var lat = req.query.lat;
        var lng = req.query.lng;
        if (org != undefined && org != "") {
            partners = _.filter(partners, function (p) { if (p.organization.toLowerCase().includes(org))
                return p; });
        }
        if (lat != undefined && lat != "" && lng != undefined && lng != "" && kilometers != undefined && kilometers != 0) {
            partners.forEach(function (partner) {
                var displayPartner = false;
                if (partner.offices !== undefined) {
                    var offices = partner.offices;
                    offices.forEach(function (office) {
                        if (office.coordinates) {
                            var coordinates = (office.coordinates).split(",");
                            var km_far = geo_1.geoDistance(lat, lng, coordinates[0], coordinates[1], 'K');
                            office.km_far = km_far;
                            // multiply by 1000 to change to meters.
                            var withinRadius = false;
                            if (km_far <= kilometers) {
                                displayPartner = true;
                                withinRadius = true;
                            }
                            office.withinRadius = withinRadius;
                        }
                    });
                }
                partner.displayPartner = displayPartner;
            });
            partners = _.where(partners, { "displayPartner": true });
        }
        partners = _.sortBy(partners, 'organization');
        res.json({ partners: partners });
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
