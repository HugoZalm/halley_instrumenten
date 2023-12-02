import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';

@Component({
  selector: 'app-empty-svg',
  templateUrl: './empty-svg.component.html',
  styleUrls: ['./empty-svg.component.scss'],
  standalone: true,
  imports: [MaterialModule]
})
export class EmptySvgComponent {

}