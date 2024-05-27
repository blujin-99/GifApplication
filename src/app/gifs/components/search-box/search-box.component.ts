import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  constructor(private gifServ: GifsService){}


  @ViewChild('tagInput')
 public tagInput!: ElementRef<HTMLInputElement>


  searchTag():void{
    const tag = this.tagInput.nativeElement.value
    this.gifServ.searcTag(tag)
    this.tagInput.nativeElement.value = ''
 }
}
