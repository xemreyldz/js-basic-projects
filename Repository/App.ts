import {ProductService } from "./ProductService";
let _ProductService = new ProductService();

let result;

result = _ProductService.getProducts();

console.log(result);