import { Component, inject } from '@angular/core';
import { ToasterService } from '../../services/toaster-service';

@Component({
  selector: 'app-embauche',
  imports: [],
  templateUrl: './embauche.html',
  styleUrl: './embauche.css',
})
export class Embauche {
  private embaucheService = inject(ToasterService);
  personnesEmbauchees = this.embaucheService.getEmbauches();

}
