import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazyLoading.component.html' ,
  styleUrl: './lazyLoading.component.css',

})
export class LazyLoadingComponent implements OnInit {
  @Input() url! : string;

  @Input() alt! : string;

  public hasLoaded : boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('We could not load this image');
  }

  onLoad() : void{
    setTimeout(() => {this.hasLoaded = true}, 1000);
  }
 }
