import { Injectable, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  private embauches_toster = signal<Personne[]>([]);

  constructor(private toastr: ToastrService) {}

  getEmbauches() {
    return this.embauches_toster;
  }

  embaucher(personne: Personne) {
    if (!this.embauches_toster().includes(personne)) {
      this.embauches_toster.set([...this.embauches_toster(), personne]);
      this.toastr.success(
        'Cette personne a été embauché avec succès !',
        'Embauche réussie'
      );
    } else {
      this.toastr.error(
        'Cette personne est déjà embauchée !',
        'CV déjà embauché'
      );
    }
  }

  debaucher(personne: Personne) {
    if (this.embauches_toster().includes(personne)) {
      this.embauches_toster.set(
        this.embauches_toster().filter(p => p !== personne)
      );
      this.toastr.info(
        'Cette personne a été débauché avec succès !',
        'Débauche confirmée'
      );
    } else {
      this.toastr.error(
        'Cette personne n\'est pas dans la liste des embauchés !',
        'Erreur'
      );
    }
  }
}