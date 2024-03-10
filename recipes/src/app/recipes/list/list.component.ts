import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  recipes!: Recipe[];

  constructor(private recipeService: RecipeService){

  }


  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
    
  }
}
