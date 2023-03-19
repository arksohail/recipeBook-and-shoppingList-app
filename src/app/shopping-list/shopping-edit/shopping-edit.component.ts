import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('amountInput') amountInput : ElementRef;
  @Output() ingredientCreated = new EventEmitter<Ingredient>();
  onAdd(name: HTMLInputElement): void {
    console.log(name.value);
    console.log(this.amountInput.nativeElement.value);
    if (name.value && this.amountInput.nativeElement.value) {
      this.ingredientCreated.emit(new Ingredient(name.value, this.amountInput.nativeElement.value))
    }
  }
  onDelete(): void {

  }
  onClear(nameInput): void {
    this.amountInput.nativeElement.value = '';
    nameInput.value = '';
  }

}
