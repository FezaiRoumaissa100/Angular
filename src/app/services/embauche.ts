import { Injectable,signal } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root',
})
export class embaucheService {
  private embauches=signal<Personne[]> ([]);
  getEmbauches(){
    return this.embauches;
  }
  embaucher(personne:Personne){
    if (!this.embauches().includes(personne)){
    this.embauches.set([...this.embauches(),personne]);
  }
    else {
   alert("Cette personne est déjà embauchée !");
  }
}
  debaucher(personne:Personne){
    if (this.embauches().includes(personne)){
      this.embauches.set(this.embauches().filter(p => p !== personne)); 
}
    else {
      alert("Cette personne n'est pas dans la liste des embauchés !");
    }
  }
}