import { IngredientModel } from "../shared/models/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingService {
		ingredientAdded = new Subject<void>();
    ingredientSelected = new Subject<number>()

		private ingredients: IngredientModel[] = [
			new IngredientModel('Apples', 5),
			new IngredientModel('Tomates', 10),
		]

		getIngredients() {
				return [...this.ingredients]
		}

    getIngredient(i: number) {
      return this.ingredients[i];
    }

		addIngredient(ingredient: IngredientModel) {
      this.ingredients.push(ingredient)
      this.newIngredientAdded();
		}

		addIngredients(ingredients: IngredientModel[]) {
      this.ingredients = [ ...this.ingredients, ...ingredients]
      this.newIngredientAdded();
		}

    editIngredient(index: number, ingredient: IngredientModel) {
      this.ingredients[index] = ingredient;
      this.newIngredientAdded();
    }

    deleteIngredient(index: number) {
      this.ingredients.splice(index, 1);
      this.newIngredientAdded();
    }

		newIngredientAdded() {
				this.ingredientAdded.next();
		}

    selectIngredient(i: number) {
      this.ingredientSelected.next(i);
    }
}
