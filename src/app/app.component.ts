import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Turtles';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'pl', label: 'Polski' },
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) {}
}
