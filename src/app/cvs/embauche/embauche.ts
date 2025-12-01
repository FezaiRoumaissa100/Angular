import { Component, inject } from '@angular/core';
import { ToasterService } from '../../services/toaster-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-embauche',
  imports: [CommonModule],
  templateUrl: './embauche.html',
  styleUrl: './embauche.css',
})
export class Embauche {
  private embaucheService = inject(ToasterService);
  personnesEmbauchees = this.embaucheService.getEmbauches();

}
