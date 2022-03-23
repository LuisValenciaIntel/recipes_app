import { Component } from '@angular/core';

import { featureType } from './shared/models/featureModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes-app';
  featureSelected: featureType = 'recipe';

  changeFeatureSelected(feature: featureType) {
    this.featureSelected = feature;
  }

}
