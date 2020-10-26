class Recipe extends Item {
    constructor(name, imageURL) {
        super(name, imageURL);
    }
}

const cocoa = new Recipe('cocoa', 'images/recipe_cocoa.png');
const chicken = new Recipe('chicken', 'images/recipe_chicken.png');
const mushroom = new Recipe('mushroom', 'images/recipe_mushroom.png');
const pork = new Recipe('pork', 'images/recipe_pork.png');
const seafood = new Recipe('seafood', 'images/recipe_seafood.png');
const vegetable = new Recipe('vegetable', 'images/recipe_vegetable.png');
const wheat = new Recipe('wheat', 'images/recipe_wheat.png');

const recipes = [cocoa, chicken, mushroom, pork, seafood, vegetable, wheat];
