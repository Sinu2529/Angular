import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent{
  ingredients!: Ingredients[];
  
  onIngredientAdded(ingredient: Ingredients){
    this.ingredients.push(ingredient);
  }


  constructor(private slService: ShoppingService){

  }
  ngOnInit(){
    this.ingredients=this.slService.getIngredients()
    this.slService.ingredientschanged.subscribe((ingredients:Ingredients[])=>{
      this.ingredients=ingredients;
    })

  }

}
