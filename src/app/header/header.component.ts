import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { featureType } from '../shared/models/featureModel'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onFeatureSelect = new EventEmitter<featureType>();

  constructor() { }

  onChangeNavigation(feature: featureType) {
    this.onFeatureSelect.emit(feature);
  }

  ngOnInit(): void {
  }

}
