import { Component, Input } from '@angular/core';
import { IGif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.css'
})
export class GifCardComponent {

  @Input() public gifCard! : IGif ;
}
