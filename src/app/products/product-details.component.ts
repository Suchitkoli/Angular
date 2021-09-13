import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
 
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string ='Product Detail ';
  product:IProduct | undefined;

  constructor( private route:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
    const id= Number (this.route.snapshot.paramMap.get('id'));
    this.pageTitle+=`: ${id}`;
    this.product={
        "productId":id,
        "productName":"Leaf Rake",
        "productCode":"GDN-0011",
        "releaseDate":"March 19,2021",
        "description":"Leaf Rake",
        "price":19.5,
        "starRating":4.0,
        "imageUrl":"assets/images/leaf_rake.png"
    }
    
  }

  onBack():void {
    this.router.navigate(['/products']);
  }

}
