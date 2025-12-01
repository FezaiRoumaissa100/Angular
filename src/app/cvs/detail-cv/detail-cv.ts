import { Component, inject, input, Input } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { AgePipe } from "../../pipes/age-pipe";
import { embaucheService} from '../../services/embauche'; 

@Component({
  standalone: true,
  selector: 'app-detail-cv',
  imports: [AgePipe],
  templateUrl: './detail-cv.html',
  styleUrl: './detail-cv.css',
})
export class DetailCv {
   
   personne = input<Personne>(null!);
   embaucheservice=inject(embaucheService);
    embaucher(){
      this.embaucheservice.embaucher(this.personne());
     }
}