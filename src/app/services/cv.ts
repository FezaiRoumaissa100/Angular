import { Injectable, signal } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root' 
})
export class CvService {
  
   private personnes = signal<Personne[]>([
    new Personne(1, 'Smith', 'Anna', 25, 'rotating_card_profile.png', 456, 'Web Developer'),
    new Personne(2, 'Doe', 'Jhon', 28, 'rotating_card_profile3.png', 457, 'Designer'),
    new Personne(3, 'Fezai', 'Roumaissa', 22, 'tim_logo.png', 458, 'Student'),
  ]);

 
  getpersonnes() {
    return this.personnes;
  }
}
