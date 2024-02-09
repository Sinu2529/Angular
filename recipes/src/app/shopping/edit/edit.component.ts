import { Component, ViewChild, ElementRef, EventEmitter,Output } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  @ViewChild('nameInput')
  nameInputRef!: ElementRef;
  @ViewChild('amountInput')
  amountInputRef!: ElementRef;
  @Output() ingredientAdded= new EventEmitter<Ingredients>();


  onAddItem(){
    const ingname=this.nameInputRef.nativeElement.value;
    const ingamount=this.amountInputRef.nativeElement.value;
    const newIngredient =new Ingredients(ingname, ingamount);
    this.ingredientAdded.emit(newIngredient);

  }

}
