import { Component, signal } from '@angular/core';
import { Cv } from "./cvs/cv/cv";
import { TtcCalculatorComponent } from "./ttc-calculator/ttc-calculator";
import { Header } from "./header/header/header";
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [Cv, Header,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP1Angular');
}
