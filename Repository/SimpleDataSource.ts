import { Product } from "./Product";

export class SimpleDataSource{
    private products: Array<Product>

    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Samsung S5","Telefon",1000),
            new Product(2,"Monster Abra","Notebook",20000),
            new Product(3,"Oppo A5s","Telefon",5000),
            new Product(4,"Excalibur","Notebook",18000),
        );
    }
    getProducts():Product[] {
        return this.products;
    }

}
