import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RecipeModel } from '../../shared/models/recipes.model'
import { RecipesService } from "../recipes.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = []

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
			this.recipes = this.recipesService.getRecipes();
  }
}
