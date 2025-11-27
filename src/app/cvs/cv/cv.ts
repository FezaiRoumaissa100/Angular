import { Component } from '@angular/core';
import { ListeCv } from "../liste-cv/liste-cv";
import { DetailCv } from "../detail-cv/detail-cv";
import { Personne } from '../../Model/Personne';

@Component({
  standalone: true,
  selector: 'app-cv',
  imports: [ListeCv, DetailCv],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv {
  

  personnes: Personne[] = [
    new Personne(1, 'Smith','Anna', 25, 'rotating_card_profile.png', 456,'web developper'),
    new Personne(2, 'Doe','Jhon', 28, 'rotating_card_profile3.png', 457,'designer'),
    new Personne(3, 'fezai','Roumaissa', 22, 'tim_logo.png', 458,'Student'),
  ];
   selectedPersonne: Personne =new Personne(0,'','',0,'',0,'');
   selectPersonne(selectedPersonne: Personne) {
    this.selectedPersonne = selectedPersonne;
  }
}
