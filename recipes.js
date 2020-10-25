class Recipe extends Item {
    constructor(name, imageURL) {
        super(name, imageURL);
    }
}

const cocoa = new Recipe('cocoa', '/images/receipe_cocoa.png');
const chicken = new Recipe('chicken', '/images/receipe_chicken.png');
const mushroom = new Recipe('mushroom', '/images/receipe_mushroom.png');
const pork = new Recipe('pork', '/images/receipe_pork.png');
const seafood = new Recipe('seafood', '/images/receipe_seafood.png');
const vegetable = new Recipe('vegetable', '/images/receipe_vegetable.png');
const wheat = new Recipe('wheat', '/images/receipe_wheat.png');

const recipes = [cocoa, chicken, mushroom, pork, seafood, vegetable, wheat];
