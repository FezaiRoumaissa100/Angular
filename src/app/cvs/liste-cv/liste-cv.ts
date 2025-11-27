import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { ItemCv } from "../item-cv/item-cv";
import { Personne } from '../../Model/Personne';

@Component({
  standalone: true,
  selector: 'app-liste-cv',
  imports: [ItemCv],
  templateUrl: './liste-cv.html',
  styleUrl: './liste-cv.css',
})
export class ListeCv {
  personnes = input<Personne[]>([]);
  personneSelected = output<Personne>();

  selectPersonne(selectedPersonne: Personne) {
    console.log(selectedPersonne);
    this.personneSelected.emit(selectedPersonne);
  }

}
