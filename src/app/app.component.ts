import { Component } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(
    private imageService: ImageService
  ) { }

  titleSrc(): string {
    return this.imageService.getTitlePath();
  }

}
