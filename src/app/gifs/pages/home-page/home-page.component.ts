import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { IGif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private gifServ: GifsService){}

  get gifs(): IGif[]{
    return this.gifServ.gifs;
  }
}
