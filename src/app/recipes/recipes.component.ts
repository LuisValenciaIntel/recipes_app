import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../shared/models/recipes.model";
import {RecipesService} from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
	providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  recipeSelected!: RecipeModel;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
			this.recipesService.itemSelected.subscribe((recipe) => this.recipeSelected = recipe);
  }

  onItemSelectFromList(recipe: RecipeModel) {
    this.recipeSelected = recipe;
  }

}
