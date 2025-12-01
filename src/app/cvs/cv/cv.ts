import { Component, inject, signal } from '@angular/core';
import { ListeCv } from "../liste-cv/liste-cv";
import { DetailCv } from "../detail-cv/detail-cv";
import { Personne } from '../../Model/Personne';
import { CvService } from '../../services/cv';
import { Embauche } from "../embauche/embauche";

@Component({
  standalone: true,
  selector: 'app-cv',
  imports: [ListeCv, DetailCv, Embauche],
  templateUrl: './cv.html',
  styleUrls: ['./cv.css'],
})
export class Cv {
  
  private cvService = inject(CvService);
  personnes = this.cvService.getpersonnes();
   selectedPersonne: Personne=null!;
   selectPersonne(selectedPersonne: Personne) {
    this.selectedPersonne = selectedPersonne;
  }
}


