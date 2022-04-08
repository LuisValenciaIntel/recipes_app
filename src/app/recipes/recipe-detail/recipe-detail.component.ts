import {Component, OnInit} from '@angular/core';
import {RecipeModel} from "../../shared/models/recipes.model";
import {RecipesService} from "../recipes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: RecipeModel;

  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recipe = this.recipesService.findRecipeById(+params['id']);
    })
  }

	addIngredientsToSpList() {
			this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
      this.router.navigate(["/shopping-list"])
	}

  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.route })
  }
}
