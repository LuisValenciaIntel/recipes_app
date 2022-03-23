import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {IngredientModel} from "../../shared/models/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild("nameInput") nameInputRef!: ElementRef;
  @ViewChild("amountInput") amountInputRef!: ElementRef;
  @Output() addIngredient = new EventEmitter<IngredientModel>();

  onAddIngredients() {
    const nameValue = this.nameInputRef.nativeElement.value;
    const amountValue = this.amountInputRef.nativeElement.value;
    const newIngredient = new IngredientModel(nameValue, amountValue);
    this.addIngredient.emit(newIngredient)
  }

}
