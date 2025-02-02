import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private gifsService : GifsService){}

  get SearchList(){
     const search =  this.gifsService.TagHistory
     return search
  }

   searchButtonsList(value:string): void{
      this.gifsService.searcTag(value)
  }
}
