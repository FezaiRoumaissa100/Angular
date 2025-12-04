import { Component, inject } from '@angular/core';
import { CvService } from '../../services/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../../Model/Personne';

@Component({
  standalone: true,
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
personne!: Personne | undefined;
private cvService = inject(CvService);
private activatedRoute = inject(ActivatedRoute);
private router = inject(Router);


ngOnInit(): void {
  const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  this.personne = this.cvService.getPersonneById(id);
}

  delete() {
    if (!this.personne) return;
    this.cvService.deletePersonne(this.personne.id);

    this.router.navigate(['/cv']);
  }
  goBack() {
    this.router.navigate(['/cv']);
  }

}
