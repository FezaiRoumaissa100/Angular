import { Component, signal } from '@angular/core';
import { Cv } from "./cvs/cv/cv";
import { TtcCalculatorComponent } from "./ttc-calculator/ttc-calculator";

@Component({
  selector: 'app-root',
  imports: [Cv],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP1Angular');
}
