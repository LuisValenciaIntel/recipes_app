import { RecipeModel } from "../shared/models/recipes.model";
import { Injectable } from "@angular/core";
import {ShoppingService} from "../shopping-list/shopping.service";
import {IngredientModel} from "../shared/models/ingredient.model";

@Injectable()
export class RecipesService {

		constructor(private shoppingService: ShoppingService) {}

		private recipes = [
				new RecipeModel("A test Recipe",
					'This is a simple test',
					"https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
					[
						new IngredientModel('Queso', 2),
						new IngredientModel('Lechuga', 1)
					]),
				new RecipeModel("A test Recipe 2", 'This is a simple test', "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
					[
							new IngredientModel('Carne', 2),
							new IngredientModel('Cebolla', 1)
					])
		]

		getRecipes() {
			return [ ...this.recipes ];
		}

		addIngredientsToShoppingList(ingredients: IngredientModel[]) {
				this.shoppingService.addIngredients(ingredients);
		}

    findRecipeById(id: number) {
      return [...this.recipes][id]
    }
}
