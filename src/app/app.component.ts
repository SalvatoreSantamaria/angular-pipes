import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  inputDate: string;
  amount: number;
  
  someObject = {
    make: 'Ford',
    year: 1999
  }

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.inputDate = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
}
