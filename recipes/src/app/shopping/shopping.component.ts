import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent{
  ingredients: Ingredients[]=[
    new Ingredients('apple',7),
    new Ingredients('mango',7)
  ];
  
  onIngredientAdded(ingredient: Ingredients){
    this.ingredients.push(ingredient);
  }


  constructor(){

  }
  ngOnInit(){

  }

}
