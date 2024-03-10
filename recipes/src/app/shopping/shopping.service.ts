import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";

export class ShoppingService{
    ingredientschanged = new EventEmitter<Ingredients[]>();
    ingredients: Ingredients[]=[
        new Ingredients('apple',7),
        new Ingredients('mango',7)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientschanged.emit(this.ingredients.slice());
    }

    addShopping(ingredients:Ingredients[]){
        this.ingredients.push(...ingredients);
        this.ingredientschanged.emit(this.ingredients.slice())
    }
}