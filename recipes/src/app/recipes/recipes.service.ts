import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping/shopping.service";

@Injectable(
    
)

export class RecipeService{
    recipeSelected= new EventEmitter<Recipe>();
    
    private recipes:Recipe[]=[
        new Recipe('burger', 'Desc', 'assets/1.jpg',[
            new Ingredients('Buns',2),
            new Ingredients('Meat',2),
            new Ingredients('lattace',2),
            new Ingredients('sauce',2),
        ]),
        new Recipe('noodle Test', 'Desc', 'assets/3.jpg',[
            new Ingredients('noodle',2),
            new Ingredients('onion leaf',2),
            new Ingredients('sauce',2),
        ])
      ];

    constructor(private slService: ShoppingService){

      }
    getRecipes(){
        return this.recipes.slice();
    }

    addIngToShopping(ingredients: Ingredients[]){
        this.slService.addShopping(ingredients)

    }
}
