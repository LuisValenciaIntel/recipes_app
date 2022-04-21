import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeModel } from '../../shared/models/recipes.model'
import { RecipesService } from "../recipes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: RecipeModel[] = []
  recipeAddSubs!: Subscription;

  constructor(private recipesService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
			this.recipes = this.recipesService.getRecipes();
      this.recipeAddSubs = this.recipesService.recipeAddedSub.subscribe(
        (recipes: RecipeModel[]) => {
          this.recipes = recipes;
        }
      )
  }
  onNewRecipe(){
    console.log(this.route)
    this.router.navigate(["new"], { relativeTo: this.route })
  }

  ngOnDestroy(): void {
    this.recipeAddSubs.unsubscribe();
  }
}
