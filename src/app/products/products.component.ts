import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  
pageTitle:string ='product List';
imageWidth:number = 50;
imageMargin:number=2;
showImage:boolean=false;
errorMessage:string='';
  sub!: Subscription;

private _listFilter: string ='';
get listFilter():string {
  return this._listFilter;
}

set listFilter(value:string){
  this._listFilter=value;
  console.log('In setter',value)
  this.filteredProducts=this.performFilter(value);
}

filteredProducts:IProduct[]=[];

products:IProduct[]=[];
  constructor(private productService: ProductService) { }
  ngOnDestroy(): void {

    this.sub.unsubscribe();
   
  }

  performFilter(filterBy:string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct)=>
    product.productName.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
   this.sub= this.productService.getProducts().subscribe({
      next: products => {
        this.products=products;
        this.filteredProducts=this.products;
      },
      error: (err: string)=> this.errorMessage=err
    });
    
    
  }

  

  onRatingClicked(message:string):void{
    this.pageTitle='Product List: ' + message;
  }


    toggleImage():void{
      this.showImage=!this.showImage;
    }
}
