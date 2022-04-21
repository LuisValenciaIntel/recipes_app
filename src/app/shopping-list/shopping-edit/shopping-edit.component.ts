import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { IngredientModel } from "../../shared/models/ingredient.model";
import { ShoppingService } from "../shopping.service";
import { NgForm } from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("f") formRef!: NgForm;
  ingredientSelectSub!: Subscription;
  editMode = false;
  editedIndex: number = 0;
  editIngredient!: IngredientModel;

	constructor(private shoppingService: ShoppingService) {}

  ngOnDestroy(): void {
     this.ingredientSelectSub.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredientSelectSub = this.shoppingService.ingredientSelected.subscribe(
      (index: number) => {
        this.editedIndex = index;
        this.editIngredient = this.shoppingService.getIngredient(index);
        this.editMode = true;
        this.formRef.setValue({
          name: this.editIngredient.name,
          amount: this.editIngredient.amount
        });
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new IngredientModel(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.editIngredient(this.editedIndex, newIngredient);
    } else {
      this.shoppingService.addIngredient(newIngredient)
    }
    this.onClear();
  }

  onClear() {
    this.formRef.reset()
    this.editMode = false;
  }

  onDeleteIngredient() {
    this.shoppingService.deleteIngredient(this.editedIndex);
    this.onClear();
  }

}
