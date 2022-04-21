import { RecipeModel } from "../shared/models/recipes.model";
import { Injectable } from "@angular/core";
import { ShoppingService } from "../shopping-list/shopping.service";
import { IngredientModel } from "../shared/models/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipesService {
    recipeAddedSub = new Subject<RecipeModel[]>();

		constructor(private shoppingService: ShoppingService) {}

		private recipes = [
				new RecipeModel("Hamburger",
					'Delicious hamburger',
					"https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg",
					[
						new IngredientModel('Queso', 2),
						new IngredientModel('Lechuga', 1),
            new IngredientModel('Carne', 2),
            new IngredientModel('Cebolla', 1)
					]),
				new RecipeModel("Quesadillas",
          'Beautiful food',
          "https://upload.wikimedia.org/wikipedia/commons/a/a4/Quesadillas_tradicionales.jpg",
					[
							new IngredientModel('Queso', 2),
							new IngredientModel('Tortilla', 1)
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

    addRecipe(newRecipe: RecipeModel) {
      this.recipes.push(newRecipe);
      this.recipeAddedSub.next([...this.recipes])
    }

    updateRecipe(index: number, newRecipe: RecipeModel) {
      this.recipes[index] = newRecipe;
      this.recipeAddedSub.next([...this.recipes])
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipeAddedSub.next([...this.recipes])
    }

}
