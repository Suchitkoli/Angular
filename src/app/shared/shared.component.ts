import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  @Input() rating:number=0;
  cropWidth:number=75;
 @Output() ratingClicked: EventEmitter<string> =
  new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
    this.cropWidth= this.rating * 75/5;
  }
  onClick():void{
    this.ratingClicked.emit(`The Rating ${this.rating} was clicked `);
  }
}
