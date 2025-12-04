import { Component, inject, input, Input } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { AgePipe } from "../../pipes/age-pipe";
import { embaucheService } from '../../services/embauche';
import { ToasterService } from '../../services/toaster-service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-detail-cv',
  imports: [AgePipe],
  templateUrl: './detail-cv.html',
  styleUrl: './detail-cv.css',
})
export class DetailCv {
   
   personne = input<Personne>(null!);
   embaucheservice=inject(ToasterService);
   router = inject(Router);
    embaucher(){
      this.embaucheservice.embaucher(this.personne());
     }
      debaucher(){
        this.embaucheservice.debaucher(this.personne());
      }
      Infos(){
        const link = ['cv', this.personne().id];
        this.router.navigate(link);

      }
}