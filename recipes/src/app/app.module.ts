import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {headerComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ListComponent } from './recipes/list/list.component';
import { DetailComponent } from './recipes/detail/detail.component';
import { ItemComponent } from './recipes/list/item/item.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { EditComponent } from './shopping/edit/edit.component'
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shopping/shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    RecipesComponent,
    ListComponent,
    DetailComponent,
    ItemComponent,
    ShoppingComponent,
    EditComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
