import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Color {
  id: number;
  name: string;
  hex: string;
  rgb: string;
  favorite: boolean;
}

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class ColorComponent {
  colors = signal<Color[]>([
    { id: 1, name: 'Red', hex: '#FF0000', rgb: 'rgb(255, 0, 0)', favorite: false },
    { id: 2, name: 'Green', hex: '#00FF00', rgb: 'rgb(0, 255, 0)', favorite: false },
    { id: 3, name: 'Blue', hex: '#0000FF', rgb: 'rgb(0, 0, 255)', favorite: false },
    { id: 4, name: 'Yellow', hex: '#FFFF00', rgb: 'rgb(255, 255, 0)', favorite: false },
    { id: 5, name: 'Purple', hex: '#800080', rgb: 'rgb(128, 0, 128)', favorite: false },
    { id: 6, name: 'Orange', hex: '#FFA500', rgb: 'rgb(255, 165, 0)', favorite: false },
  ]);

  newColorName = signal('');
  newColorHex = signal('#000000');
  nextId = signal(7);
  selectedColor = signal<Color | null>(null);

  get favoriteColors() {
    return this.colors().filter(color => color.favorite);
  }

  addColor() {
    const name = this.newColorName().trim();
    if (name && this.newColorHex()) {
      const rgbValue = this.hexToRgb(this.newColorHex());
      this.colors.set([
        ...this.colors(),
        {
          id: this.nextId(),
          name,
          hex: this.newColorHex(),
          rgb: rgbValue,
          favorite: false
        }
      ]);
      this.nextId.update(id => id + 1);
      this.newColorName.set('');
      this.newColorHex.set('#000000');
    }
  }

  toggleFavorite(id: number) {
    this.colors.set(
      this.colors().map(color =>
        color.id === id ? { ...color, favorite: !color.favorite } : color
      )
    );
  }

  deleteColor(id: number) {
    this.colors.set(this.colors().filter(color => color.id !== id));
    if (this.selectedColor()?.id === id) {
      this.selectedColor.set(null);
    }
  }

  selectColor(color: Color) {
    this.selectedColor.set(color);
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard: ' + text);
    });
  }

  hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return `rgb(${r}, ${g}, ${b})`;
    }
    return 'rgb(0, 0, 0)';
  }
}