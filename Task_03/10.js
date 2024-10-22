class Notebook {
    constructor(brand, price, cpu, ram, fans){
        this.brand = brand;
        this.price = price;
        this.cpu = cpu;
        this.ram = ram;
        this.fans = fans;
    }

    discount(percentage){
        let amount = percentage / 100;
        amount = amount * this.price;
        this.price -= amount;
        console.log("Applied discount: " + percentage + "%");
    }
}

var n = new Notebook("Apple", 999.99, "M2 Pro", 16, true);
var n1 = new Notebook("Dell", 699.99, "Intel Core i9", 32, true);
var n2 = new Notebook("Asus", 799.99, "Amd Ryzen 5", 32, false);

console.log(n);
console.log(n1);
n2.discount(20);
console.log(n2);