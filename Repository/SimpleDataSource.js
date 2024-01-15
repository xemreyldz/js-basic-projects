"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung S5", "Telefon", 1000), new Product_1.Product(2, "Monster Abra", "Notebook", 20000), new Product_1.Product(3, "Oppo A5s", "Telefon", 5000), new Product_1.Product(4, "Excalibur", "Notebook", 18000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
