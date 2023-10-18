import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  generatedPassword = '';
  letters = false;
  numbers = false;
  symbols = false;
  length = 0;
  disabled = true;

  onButtonClickGeneratePassword() {
    this.generatedPassword = '';

    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.letters)
      validChars += letters;
    if (this.numbers)
      validChars += numbers;
    if (this.symbols)
      validChars += symbols;

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      this.generatedPassword += validChars[index];
    }
  }

  onChangeUseLetters() {
    this.letters = !this.letters;
  }

  onChangeUseNumbers() {
    this.numbers = !this.numbers;
  }

  onChangeUseSymbols() {
    this.symbols = !this.symbols;
  }

  onInputSetLength(e: Event) {
    const length = parseInt((e.target as HTMLInputElement).value);
    if (length)
      this.length = length;
    else
      this.length = 0;
  }
}
