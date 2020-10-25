class Food extends Item {
    constructor(name, imageURL, recipes, price, time) {
        super(name, imageURL);
        this.recipes = recipes;
        this.price = price;
        this.time = time;
    }
}
