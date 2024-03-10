import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent {
  @Input() selectedRecipes: any= Recipe;

  constructor(private recipeService: RecipeService){

  }

  ngOnInit(){
    this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
      this.selectedRecipes=recipe;
    }
    );
  }
}

