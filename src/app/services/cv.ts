import { computed, Injectable, Signal, signal } from '@angular/core';
import { Personne } from '../Model/Personne';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { of, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root' 
})

export class CvService {
  
  private apiUrl = 'https://apilb.tridevs.net/api';

  private fakePersonnes: Personne[] = [
    new Personne(1, 'Smith', 'Anna', 25, 'rotating_card_profile.png', 11223388, 'Web Developer'),
    new Personne(2, 'Doe', 'Jhon', 28, 'rotating_card_profile3.png', 12345678, 'Designer'),
    new Personne(3, 'Fezai', 'Roumaissa', 22, 'tim_logo.png', 11223344, 'Student'),
  ];

  personnes = signal<Personne[]>(this.fakePersonnes);

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.loadPersonnes();
  }

  loadPersonnes() {
    this.http.get<Personne[]>(`${this.apiUrl}/personnes`)
      .pipe(
        catchError(() => {
          this.toastr.error(
            "Impossible de récupérer les CVs depuis l'API. Affichage des données locales.",
            'Erreur API',
            { timeOut: 3000 }
          );
          this.personnes.set(this.fakePersonnes);
          return of(null);
        })
      )
      .subscribe((data) => {
        if (data && data.length > 0) {
          this.personnes.set(data);
          this.toastr.success('CVs chargés depuis API', 'Succès', { timeOut: 2000 });
        }
      });
  }
 
  getpersonnes() {
    return this.personnes;
  }
  getPersonneById(id: number): Personne | undefined {
    const personne = this.personnes().find(personne => {
      return personne.id == id;
    })
    return personne;
  }
  deletePersonne(id: number) {
  this.personnes.update(list => list.filter(p => p.id !== id));
  }

}
