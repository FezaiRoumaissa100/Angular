import { Component, inject } from '@angular/core';
import { embaucheService} from '../../services/embauche';

@Component({
  selector: 'app-embauche',
  imports: [],
  templateUrl: './embauche.html',
  styleUrl: './embauche.css',
})
export class Embauche {
  private embaucheService = inject(embaucheService);
  personnesEmbauchees = this.embaucheService.getEmbauches();

}
