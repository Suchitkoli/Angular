import { NgModule } from '@angular/core';

import { ProductDetailsComponent } from './product-details.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipes';

import { ProductsComponent } from './products.component';

import { RouterModule } from '@angular/router';
import { ProductsDetailGuard } from './products-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe,
    
  ],
  imports: [
    
    RouterModule.forChild([
      {path:'products',component:ProductsComponent},
      {path:'products/:id',
      canActivate:[ProductsDetailGuard],
      component:ProductDetailsComponent
    }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
