import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Personne } from '../../Model/Personne';

@Component({
  standalone: true,
  selector: 'app-item-cv',
  imports: [],
  templateUrl: './item-cv.html',
  styleUrl: './item-cv.css',
})
export class ItemCv {
  personne = input.required<Personne>();
  personneSelected = output<Personne>();


  selectPersonne() {
    this.personneSelected.emit(this.personne());
  }
}
