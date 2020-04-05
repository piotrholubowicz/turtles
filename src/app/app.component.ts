import { Component } from '@angular/core';
import { ImageService } from './image.service';
import { Observable, of } from "rxjs";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  containerClass$ = of('container');

  constructor(
    private imageService: ImageService
  ) { }

  titleSrc(): string {
    return this.imageService.getTitlePath();
  }

  onFluidContainer(fluid: boolean) {
    this.containerClass$ = fluid ? of('container-fluid') : of('container');
    console.log(fluid ? 'FLUID' : 'NOT FLUID');
  }

}
