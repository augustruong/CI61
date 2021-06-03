export class Product {
    id;
    name;
    price;
    factory;
    saleoff;
    importDate;

    constructor(id,name,price,factory,saleoff,importDate) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.factory = factory;
        this.saleoff = saleoff;
        this.importDate = importDate;
    }
}

export class Household extends Product {
    durability;
    constructor(id,name,price,factory,saleoff,importDate,durability) {
        super(id,name,price,factory,saleoff,importDate);
        this.durability = durability;
    }
}

export class Clothes extends Product {
    origin;
    material;
    constructor(id,name,price,factory,saleoff,importDate,origin,material) {
        super(id,name,price,factory,saleoff,importDate);
        this.origin = origin;
        this.material = material;
    }
}

export class Food extends Product {
    taste;
    constructor(id,name,price,factory,saleoff,importDate,taste) {
        super(id,name,price,factory,saleoff,importDate);
        this.taste = taste;
    }
}


