"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = exports.PORT = void 0;
exports.PORT = process.env.PORT || 4000;
var path = require('path');
exports.DB = path.join(__dirname, '../../database/partners.json');
