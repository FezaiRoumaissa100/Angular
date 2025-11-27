import { Component, input, Input } from '@angular/core';
import { Personne } from '../../Model/Personne';

@Component({
  standalone: true,
  selector: 'app-detail-cv',
  imports: [],
  templateUrl: './detail-cv.html',
  styleUrl: './detail-cv.css',
})
export class DetailCv {
   personne = input<Personne>(new Personne(0,'','',0,'',0,''));

}
