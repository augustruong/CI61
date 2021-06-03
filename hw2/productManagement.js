import {Product,Household,Clothes,Food} from "./product.js";

class productManagement {
    instock = [];
    totalSell = 0;

    add(product) {
        if (product instanceof Product) {
            this.instock.push(product);
        } else {
            console.log("Wrong data")
        }
        
    }

    sold(product) {
        product.price -= product.price*(product.saleoff/100); 

        this.totalSell += product.price;
        for (let i = 0; i < this.instock.length; ++i) {
            if (this.instock[i].id == product.id) {
                this.instock.splice(i,1);
            }
        }
    }

    checksell() {
        console.log(this.totalSell);
    }
}

let chair = new Household('ghe','Cai Ghe',200,'Ikea',10,'21/06/03','Good');
let shirt = new Clothes('ao','Cai Ao',100,'H&M',5,'21/06/03','VN','Cotton');
let milktea = new Food('tsua','Tra Sua',30,'BobaPop',2,'21/06/03','matcha');

let newStock = new productManagement();

newStock.add(chair);
newStock.add(shirt);
newStock.add(milktea);

newStock.sold(chair);
newStock.sold(shirt);
newStock.sold(milktea);

newStock.checksell();