class Food extends Item {
    constructor(name, imageURL, recipes, price, time) {
        super(name, imageURL);
        this.recipes = recipes;
        this.price = price;
        this.time = time;
    }
}

const butterSearedScallop = new Food(
    'butter seared scallop',
    'images/food_butter_seared_scallop.png',
    [
        { type: mushroom, number: 1 },
        { type: seafood, number: 2 },
    ],
    125,
    118
);

const cheeseEggRoll = new Food(
    'cheese egg roll',
    'images/food_cheese_egg_roll.png',
    [
        { type: mushroom, number: 1 },
        { type: chicken, number: 2 },
    ],
    135,
    129
);

const cheeseMushroomBiscuit = new Food('cheese mushroom biscuit', 'images/food_cheese_mushroom_biscuit.png', [{ type: mushroom, number: 1 }], 45, 45);

const cheeseMushroomSalisburySteak = new Food(
    'cheese mushroom salisbury steak',
    'images/food_cheese_mushroom_salisbury_steak.png',
    [
        { type: pork, number: 2 },
        { type: mushroom, number: 1 },
    ],
    117,
    111
);

const chickenSalad = new Food(
    'chicken salad',
    'images/food_chicken_salad.png',
    [
        { type: chicken, number: 1 },
        { type: vegetable, number: 2 },
    ],
    450,
    420
);

const chickenSoup = new Food(
    'chicken soup',
    'images/food_chicken_soup.png',
    [
        { type: chicken, number: 1 },
        { type: cocoa, number: 1 },
    ],
    150,
    140
);

const combatGrilledSkewer = new Food('combat grilled skewer', 'images/food_combat_grilled_skewer.png', [{ type: pork, number: 1 }], 36, 34);

const donut = new Food('donut', 'images/food_donut.png', [{ type: wheat, number: 1 }], 72, 69);

const eggFriedRice = new Food(
    'egg fried rice',
    'images/food_egg_fried_rice.png',
    [
        { type: chicken, number: 1 },
        { type: cocoa, number: 1 },
        { type: wheat, number: 1 },
    ],
    222,
    209
);

const friedChicken = new Food('fried chicken', 'images/food_fried_chicken.png', [{ type: chicken, number: 1 }], 90, 87);

const garlicSauceShreddedPork = new Food(
    'garlic sauce shredded pork',
    'images/food_garlic_sauce_shredded_pork.png',
    [
        { type: pork, number: 1 },
        { type: mushroom, number: 1 },
        { type: cocoa, number: 1 },
        { type: seafood, number: 2 },
    ],
    221,
    206
);

const grilledFish = new Food('grilled fish', 'images/food_grilled_fish.png', [{ type: seafood, number: 1 }], 40, 38);

const grilledMushroom = new Food(
    'grilled mushroom',
    'images/food_grilled_mushroom.png',
    [
        { type: mushroom, number: 1 },
        { type: cocoa, number: 1 },
    ],
    105,
    101
);

const meatPizza = new Food(
    'meat pizza',
    'images/food_meat_pizza.png',
    [
        { type: pork, number: 1 },
        { type: chicken, number: 1 },
        { type: mushroom, number: 1 },
        { type: cocoa, number: 1 },
    ],
    231,
    216
);

const meatStew = new Food(
    'meat stew',
    'images/food_meat_stew.png',
    [
        { type: pork, number: 2 },
        { type: cocoa, number: 1 },
    ],
    132,
    125
);

const porkDoria = new Food(
    'pork doria',
    'images/food_pork_doria.png',
    [
        { type: pork, number: 1 },
        { type: mushroom, number: 1 },
        { type: wheat, number: 2 },
    ],
    225,
    213
);

const roastedPrawn = new Food(
    'roasted prawn',
    'images/food_roasted_prawn.png',
    [
        { type: seafood, number: 1 },
        { type: cocoa, number: 1 },
    ],
    100,
    94
);

const sushi = new Food(
    'sushi',
    'images/food_sushi.png',
    [
        { type: seafood, number: 1 },
        { type: wheat, number: 1 },
    ],
    112,
    104
);

const tricolorStew = new Food(
    'tricolor stew',
    'images/food_tricolor_stew.png',
    [
        { type: pork, number: 2 },
        { type: seafood, number: 2 },
        { type: mushroom, number: 1 },
    ],
    237,
    223
);

const foods = [butterSearedScallop, cheeseEggRoll, cheeseMushroomBiscuit, cheeseMushroomSalisburySteak, chickenSalad, chickenSoup, combatGrilledSkewer, donut, eggFriedRice, friedChicken, garlicSauceShreddedPork, grilledFish, grilledMushroom, meatPizza, meatStew, porkDoria, roastedPrawn, sushi, tricolorStew];
