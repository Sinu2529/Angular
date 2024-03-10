import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

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

  constructor(private slService: ShoppingService){}


  onAddItem(){
    const ingname=this.nameInputRef.nativeElement.value;
    const ingamount=this.amountInputRef.nativeElement.value;
    const newIngredient =new Ingredients(ingname, ingamount);
    this.slService.addIngredients(newIngredient)

  }

}
