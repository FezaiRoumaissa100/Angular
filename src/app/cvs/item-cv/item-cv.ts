import { Component, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-item-cv',
  imports: [CommonModule],
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
