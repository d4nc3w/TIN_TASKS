function Game(title, developer, price, exclusive){
    this.title = title;
    this.developer = developer;
    this.price = price;
    this.exclusive = exclusive;

    this.displayInfo = function() {
        return "Game: [Title: " + this.title + ", Developer: " + this.developer + ", Price: " + this.price + "$, Exclusive: " + this.exclusive + "]";
    };
    this.risePrice = function(surplus){
        this.price += surplus;
        console.log("New price for: " + this.title + "is " + this.price + "$");
    }
}

let game1 = new Game("Witcher 3", "CD Project Red", 29.99, false);
let game2 = new Game("Minecraft", "Mojang", 19.99, false);
let game3 = new Game("Ghost Of Tsushima", "Sony", 35.99, true);

console.log(game1.displayInfo());
console.log(game2.displayInfo());
console.log(game3.displayInfo());

game2.risePrice(10);
console.log(game2.displayInfo());
