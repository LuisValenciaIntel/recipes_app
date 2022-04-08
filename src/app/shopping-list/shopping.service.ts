import { IngredientModel } from "../shared/models/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingService {
		ingredientAdded = new Subject<void>();

		private ingredients: IngredientModel[] = [
			new IngredientModel('Apples', 5),
			new IngredientModel('Tomates', 10),
		]

		getIngredients() {
				return [...this.ingredients]
		}

		addIngredient(ingredient: IngredientModel) {
				this.ingredients.push(ingredient)
		}

		addIngredients(ingredients: IngredientModel[]) {
				this.ingredients = [ ...this.ingredients, ...ingredients]
		}

		newIngredientAdded() {
				this.ingredientAdded.next();
		}
}
