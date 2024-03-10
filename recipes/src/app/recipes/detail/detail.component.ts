import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input()
  recipe!: Recipe;

  constructor(private recipeService: RecipeService){

  }
  ngOnInit(){

  }
  onAddToShopping(){
    this.recipeService.addIngToShopping(this.recipe.ingredients);

  }

}
