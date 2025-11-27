import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-ttc-calculator',
  standalone: true,
  templateUrl: './ttc-calculator.html',
  styleUrls: ['./ttc-calculator.css']
})
export class TtcCalculatorComponent {
  prixHT = signal<number>(0);
  quantite = signal<number>(1);
  tva = signal<number>(18);

  prixTTC = computed(() => {
    return this.prixHT() * (1 + this.tva() / 100);
  });

  prixTotal = computed(() => {
    return this.prixTTC() * this.quantite();
  });

  remise = computed(() => {
    if (this.quantite() >= 10 && this.quantite() <= 15) {
      return this.prixTotal() * 0.2;
    } else if (this.quantite() > 15) {
      return this.prixTotal() * 0.3;
    } else {
      return 0;
    }
  });
  prixFinal = computed(() => this.prixTotal() - this.remise());


  setPrixHT(value: string) {
    this.prixHT.set(Number(value));
  }


  setQuantite(value: string) {
    this.quantite.set(Number(value));
  }

  setTva(value: string) {
    this.tva.set(Number(value));
  }
}